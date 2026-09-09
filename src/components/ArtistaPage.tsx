import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function ArtistaPage() {
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
                                <audio controls className="w-full" src="/artista/audio.mpeg">
                                    Seu navegador não suporta reprodução de áudio.
                                </audio>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
