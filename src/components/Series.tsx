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
]

export default function Series() {
    return (
        <section id="series" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-16 sm:px-6 sm:py-0 sm:pb-10">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="mb-10 flex flex-col items-center gap-4 sm:mb-14">
                {/*<div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="mx-auto mb-3 h-28 sm:mb-4 sm:h-44" />
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                            <p className="text-[10px] tracking-[0.16em] text-[#6e4c0d] sm:text-xs sm:tracking-[0.2em]">GALERIA SANDRA NOVAS</p>
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                        </div>
                    </div>*/}

                    <div className="w-full max-w-2xl rounded-2xl px-4 py-4 text-center sm:px-12 sm:py-6">
                        <h2 className="mb-3 text-3xl font-serif text-[#1a1a1a] sm:text-4xl">SÉRIES</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Cada série nasce de um estado interno, uma forma de perceber e traduzir o mundo
                        </p>
                    </div>
                </div>

                {/* Linhas de séries */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {series.map((s) => (
                        <div
                            key={s.nome}
                            className="flex flex-col gap-4 rounded-2xl bg-[#08284E] px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-6"
                        >
                            {/* Imagem */}
                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                                <img
                                    src={s.imagem}
                                    alt={s.nome}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Nome */}
                            <p className="w-full shrink-0 text-xs font-bold tracking-[0.15em] text-white md:w-36">
                                {s.nome}
                            </p>

                            {/* Descrição */}
                            <p className="flex-1 text-sm leading-relaxed text-white/70">
                                {s.descricao}
                            </p>

                            {/* Botão */}
                            <div className="shrink-0 md:self-center">
                                <button className="w-full rounded-lg bg-[#C9A96E] px-5 py-3 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap text-[#08284E] transition-colors hover:bg-[#b8956a] md:w-auto md:px-6">
                                    SAIBA MAIS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
