const series = [
    {
        nome: 'SÉRIE TRANSIÇÕES',
        imagem: '/BG1.png',
        descricao:
            'Entre um estado e outro, existem movimentos invisíveis. A série Transições nasce desses encontros — forças que se chocam, se misturam e se reorganizam. Aqui, a cor não é estática. Ela atravessa, rompe e se transforma, revelando processos internos que muitas vezes não conseguimos nomear.',
    },
    {
        nome: 'SÉRIE CICLOS',
        imagem: '/BG.png',
        descricao:
            'vida se move em ritmos silenciosos, repetidos e necessários. A série Ciclos investiga esses fluxos — o que começa, termina e recomeça continuamente. As formas giram, se acumulam e se dissolvem, criando uma sensação de continuidade e renovação. Uma pausa para perceber o tempo não como linha, mas como movimento circular.',
    },
    {
        nome: 'SÉRIE MAR',
        imagem: '/BG3.png',
        descricao:
            'O mar não é apenas paisagem, é estado. Na série Mar, a profundidade, o silêncio e o movimento coexistem em camadas. As cores evocam imensidão, fluidez e contemplação, criando uma sensação de mergulho.',
    },
]

export default function Series() {
    return (
        <section id="series" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="mb-10 flex flex-col items-center gap-4 sm:mb-14">
                <div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="mx-auto mb-3 h-28 sm:mb-4 sm:h-44" />
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                            <p className="text-[10px] tracking-[0.16em] text-[#6e4c0d] sm:text-xs sm:tracking-[0.2em]">GALERIA SANDRA NOVAS</p>
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                        </div>
                    </div>

                    <div className="w-full max-w-2xl rounded-2xl px-4 py-4 text-center sm:px-12 sm:py-6">
                        <h2 className="mb-3 text-3xl font-serif text-[#1a1a1a] sm:text-4xl">SÉRIES</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
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
                                <button className="w-full rounded-lg bg-[#C9A96E] px-5 py-3 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap text-white transition-colors hover:bg-[#b8956a] md:w-auto md:px-6">
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
