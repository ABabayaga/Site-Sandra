import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExpand, FaMapMarkerAlt, FaTimes } from "react-icons/fa";
import { entregas, type EntregaImagem } from "../data/entregas";
import Header from "./Header";
import Footer from "./Footer";
import { useFocusTrap } from "../hooks/useFocusTrap";

function ImagemModal({ item, onClose }: { item: EntregaImagem; onClose: () => void }) {
    const [visible, setVisible] = useState(false);
    const containerRef = useFocusTrap<HTMLDivElement>();

    const handleClose = () => {
        setVisible(false);
        setTimeout(onClose, 300);
    };

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true));
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") handleClose();
        };
        document.addEventListener("keydown", handleKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", handleKey);
            document.body.style.overflow = "";
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Imagem ampliada da entrega"
            tabIndex={-1}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 outline-none ${visible ? "opacity-100" : "opacity-0"}`}
            onClick={handleClose}
        >
            <img
                src={item.imagem}
                alt="Foto ampliada da entrega"
                className="max-h-[90vh] max-w-[90vw] object-contain drop-shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
            <button
                onClick={handleClose}
                aria-label="Fechar"
                className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
                <FaTimes size={16} />
            </button>
        </div>
    );
}

export default function EntregaPage() {
    const [modalItem, setModalItem] = useState<EntregaImagem | null>(null);

    return (
        <main>
            <Header />
            <section
                style={{ backgroundColor: "#F9F2EC" }}
                className="min-h-screen px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32"
            >
                <div className="max-w-5xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#08284E]/70 hover:text-[#08284E] transition-colors"
                    >
                        ← Voltar
                    </Link>

                    <div className="mt-10 mb-10 text-center sm:mb-14">
                        <h1 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— Entregas —</h1>
                        <p className="mx-auto mt-2 max-w-xl text-sm text-gray-600 sm:text-base">
                            Cada obra é embalada, transportada e instalada com o mesmo cuidado que teve em sua criação.
                        </p>
                    </div>

                    <div className="flex flex-col gap-12">
                        {entregas.map((galeria) => (
                            <div key={galeria.slug}>
                                <div className="mb-4 flex items-center gap-3 sm:mb-6">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#08284E]/10 text-[#08284E]">
                                        <FaMapMarkerAlt size={18} />
                                    </div>
                                    <div>
                                        <p className="text-lg font-bold text-[#1a1a1a]">{galeria.titulo}</p>
                                        <p className="text-sm text-gray-600">{galeria.local}</p>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:auto-rows-[220px]">
                                    {galeria.imagens.map((item) => (
                                        <button
                                            key={item.imagem}
                                            onClick={() => setModalItem(item)}
                                            aria-label={`Ampliar foto da entrega em ${galeria.local}`}
                                            className={`group relative h-64 overflow-hidden rounded-xl shadow-sm sm:h-auto ${item.span}`}
                                            style={{ backgroundColor: "#e7ddcf" }}
                                        >
                                            <img
                                                src={item.imagem}
                                                alt=""
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full object-cover"
                                                style={{ objectPosition: item.posicao }}
                                            />
                                            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                                            <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-[10px] transition-opacity duration-300 group-hover:opacity-100">
                                                <FaExpand size={12} />
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />

            {modalItem !== null && (
                <ImagemModal item={modalItem} onClose={() => setModalItem(null)} />
            )}
        </main>
    );
}
