import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function NotFoundPage() {
    return (
        <main>
            <Header />
            <section
                style={{ backgroundColor: "#F9F2EC" }}
                className="min-h-screen flex items-center px-4 pt-28 pb-24 sm:px-6 sm:pt-36 sm:pb-32"
            >
                <div className="max-w-2xl mx-auto text-center animate-[fadeSlideIn_0.5s_ease-out_both]">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#6e4c0d]">Erro 404</p>
                    <h1 className="mb-6 text-5xl font-serif leading-tight text-[#1a1a1a] sm:text-6xl">
                        Página não encontrada
                    </h1>
                    <p className="mb-10 text-base leading-relaxed text-gray-700">
                        O endereço que você tentou acessar não existe ou foi movido.
                    </p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-[#08284E]/70 hover:text-[#08284E] transition-colors"
                    >
                        ← Voltar para o início
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
