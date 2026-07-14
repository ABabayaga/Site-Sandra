import { Link, Navigate, useParams } from "react-router-dom";
import { series } from "../data/series";
import Header from "./Header";
import Footer from "./Footer";

export default function SeriePage() {
    const { slug } = useParams<{ slug: string }>();
    const serie = series.find((s) => s.slug === slug);

    if (!serie) return <Navigate to="/" replace />;

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

                    <div className="animate-[fadeSlideIn_0.5s_ease-out_both] mt-10 grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
                        <div className="overflow-hidden rounded-3xl shadow-sm">
                            <img
                                src={serie.imagem}
                                alt={serie.nome}
                                className="h-80 w-full object-cover sm:h-105 md:h-140"
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#6e4c0d]">Série</p>
                            <h1 className="mb-6 text-4xl font-serif leading-tight text-[#1a1a1a] sm:text-5xl">
                                {serie.nome}
                            </h1>
                            <p className="text-base leading-relaxed text-gray-700">
                                {serie.descricao}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
