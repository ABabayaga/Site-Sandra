import { useEffect } from "react";

const series = [
    {
        nome: 'Arquiteturas do Invisível',
        imagem: '/BG1.png',
        descricao:
            'A série Arquiteturas do Invisível investiga as estruturas intangíveis que moldam nossa experiência no mundo, como memórias, afetos, silêncios, intuições e encontros, revelando por meio de camadas, texturas, fluxos e geometrias orgânicas a arquitetura silenciosa das forças invisíveis que sustentam, conectam e transformam a existência humana entre a ordem e o acaso, a presença e a ausência.',
    },
    {
        nome: 'Mar',
        imagem: '/BG.png',
        descricao:
            'Uma investigação sobre movimento, profundidade e transformação. As obras da série Mar não representam a paisagem marítima de forma literal; evocam suas forças invisíveis, seus encontros e correntes, os fluxos que aproximam, afastam e conectam. São composições que convidam à contemplação e ao silêncio, como quem observa o horizonte e encontra nele reflexos de si mesmo.',
    },
    {
        nome: 'Estado de Presença',
        imagem: '/BG3.png',
        descricao:
            'Uma coleção dedicada aos instantes de consciência e permanência. Cada obra explora a relação entre presença, percepção e existência, revelando movimentos internos, encontros humanos e energias que ocupam o espaço mesmo quando não são imediatamente visíveis. São trabalhos que convidam o observador a desacelerar e habitar o momento.',
    },
    {
        nome: 'Forças Primordiais',
        imagem: '/BG1.png',
        descricao:
            'Inspirada nos elementos fundamentais da natureza e nos impulsos que moldam a vida, esta série investiga energia, expansão, erosão, criação e transformação. As obras carregam intensidade visual e gestual, revelando a potência dos processos naturais e das forças.',
    },
    {
        nome: 'Raízes',
        imagem: '/BG.png',
        descricao:
            'Uma reflexão sobre origem, pertencimento e memória. A série Raízes busca revelar as conexões invisíveis que sustentam nossa existência: histórias, vínculos, heranças afetivas e culturais. As composições sugerem crescimento, permanência e continuidade, lembrando que toda expansão nasce de algo profundamente enraizado.',
    },
    {
        nome: 'Essência',
        imagem: '/BG3.png',
        descricao:
            'A busca pelo que permanece quando o excesso é removido. Nesta série, formas, texturas e cores são conduzidas para revelar aquilo que é fundamental, íntimo e verdadeiro. As obras propõem uma experiência de encontro com a própria natureza das coisas, celebrando a simplicidade, a autenticidade e a presença do essencial.',
    },
    {
        nome: 'Ouro em Estado',
        imagem: '/BG3.png',
        descricao:
            'Uma investigação sobre valor, transformação e descoberta. O ouro aparece não apenas como material, mas como símbolo daquilo que é raro, precioso e revelado pelo tempo. As obras exploram contrastes entre matéria e luz, imperfeição e beleza, sugerindo que aquilo que possui verdadeiro valor muitas vezes emerge de processos de transformação.',
    },
    {
        nome: 'Cicatrizes Urbanas',
        imagem: '/BG3.png',
        descricao:
            'Uma leitura poética das marcas deixadas pelo tempo, pela ocupação humana e pela transformação constante das cidades. Texturas, camadas e contrastes evocam paredes, superfícies e vestígios que contam histórias silenciosas. A série propõe um olhar sensível sobre as memórias inscritas nos espaços urbanos e sobre a beleza que pode surgir da imperfeição e do desgaste.',
    },
];

interface SeriesModalProps {
    onClose: () => void;
}

export default function SeriesModal({ onClose }: SeriesModalProps) {
    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Panel */}
            <div
                className="relative z-10 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#F9F2EC] px-4 py-8 sm:px-8 sm:py-10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#08284E]/10 text-[#08284E] hover:bg-[#08284E]/20 transition-colors"
                    aria-label="Fechar"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Header */}
                <div className="mb-8 text-center">
                    <h2 className="mb-2 text-3xl font-serif text-[#1a1a1a] sm:text-4xl">SÉRIES</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Cada série nasce de um estado interno, uma forma de perceber e traduzir o mundo
                    </p>
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-4 sm:gap-5">
                    {series.map((s) => (
                        <div
                            key={s.nome}
                            className="flex flex-col gap-4 rounded-2xl bg-[#08284E] px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-6"
                        >
                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                                <img src={s.imagem} alt={s.nome} className="w-full h-full object-cover" />
                            </div>

                            <p className="w-full shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-white md:w-36">
                                {s.nome}
                            </p>

                            <p className="flex-1 text-sm leading-relaxed text-white/70">
                                {s.descricao}
                            </p>

                            <div className="shrink-0 md:self-center">
                                <button className="w-full rounded-lg bg-[#C9A96E] px-5 py-3 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap text-[#08284E] transition-colors hover:bg-[#b8956a] md:w-auto md:px-6">
                                    SAIBA MAIS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
