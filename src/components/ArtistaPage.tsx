import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExpand, FaTimes } from "react-icons/fa";
import Header from "./Header";
import Footer from "./Footer";
import { useFocusTrap } from "../hooks/useFocusTrap";

const obras = [
    "/artista/Obra Carpas (1).jpg.jpeg",
    "/artista/Obra Carpas (2).jpg.jpeg",
    "/artista/Obra Carpas (3).jpg.jpeg",
    "/artista/Obra Carpas (4).jpg.jpeg",
    "/artista/Obra Carpas (5).jpg.jpeg",
    "/artista/Obra Carpas (6).jpg.jpeg",
    "/artista/Obra Carpas (7).jpg.jpeg",
    "/artista/Obra Carpas (8).jpg.jpeg",
];

function ImagemModal({ src, onClose }: { src: string; onClose: () => void }) {
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
            aria-label="Imagem ampliada da obra"
            tabIndex={-1}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 outline-none ${visible ? "opacity-100" : "opacity-0"}`}
            onClick={handleClose}
        >
            <img
                src={src}
                alt="Foto ampliada da obra"
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

export default function ArtistaPage() {
    const [modalSrc, setModalSrc] = useState<string | null>(null);

    return (
        <main>
            <Header />
            <section
                style={{ backgroundColor: "#F9F2EC" }}
                className="min-h-screen px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32"
            >
                <div className="max-w-4xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#08284E]/70 hover:text-[#08284E] transition-colors"
                    >
                        ← Voltar
                    </Link>

                    <div className="mt-10 mb-10 text-center sm:mb-14">
                        <p className="mb-2 text-[10px] tracking-[0.22em] text-[#08284E]/50">ARTISTA CONVIDADO</p>
                        <h1 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">Dayvison Rodrigues</h1>
                    </div>

                    <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-[220px_1fr]">
                        {/* Vídeo — coluna estreita, altura acompanha o texto ao lado */}
                        <video
                            controls
                            playsInline
                            className="h-64 w-full rounded-2xl bg-black object-cover shadow-sm md:h-full"
                            src="/artista/video.mp4"
                        >
                            Seu navegador não suporta reprodução de vídeo.
                        </video>

                        {/* Texto + áudio */}
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                                <p className="text-sm leading-relaxed whitespace-pre-line text-gray-700 sm:text-base">
                                    A arte de Dayvison Rodrigues nasce do encontro entre o desenho, o graffiti, a fotografia e a pintura. Em um processo intuitivo, o artista combina texturas, cores e referências da estética urbana para transformar memórias e experiências em narrativas visuais.
                                    {"\n\n"}
                                    Símbolos ligados à força, ao pertencimento e à origem atravessam suas obras, revelando também sua conexão com Mato Grosso do Sul. Como artista convidado da Galeria Sandra Novas, Dayvison apresenta trabalhos que ampliam o diálogo entre diferentes linguagens e convidam o público a descobrir novas perspectivas.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                                <p className="mb-2 text-xs font-medium text-gray-500 sm:text-sm">
                                    Áudio referente à obra em vídeo
                                </p>
                                <audio controls className="w-full" src="/artista/audio2.mpeg">
                                    Seu navegador não suporta reprodução de áudio.
                                </audio>
                            </div>
                        </div>
                    </div>

                    {/* Obras */}
                    <div className="mt-12 sm:mt-16">
                        <p className="mb-4 text-center text-[10px] tracking-[0.22em] text-[#08284E]/50 sm:mb-6">
                            OBRAS
                        </p>
                        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
                            {obras.map((src) => (
                                <button
                                    key={src}
                                    onClick={() => setModalSrc(src)}
                                    aria-label="Ampliar foto da obra"
                                    className="group relative aspect-square overflow-hidden rounded-xl shadow-sm"
                                    style={{ backgroundColor: "#e7ddcf" }}
                                >
                                    <img
                                        src={src}
                                        alt=""
                                        loading="lazy"
                                        className="absolute inset-0 h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                                    <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-[10px] transition-opacity duration-300 group-hover:opacity-100">
                                        <FaExpand size={12} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

            {modalSrc !== null && (
                <ImagemModal src={modalSrc} onClose={() => setModalSrc(null)} />
            )}
        </main>
    );
}
