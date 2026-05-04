const series = [
    {
        nome: 'SÉRIE TRANSIÇÕES',
        imagem: '/colecao/transicoes.jpg',
        descricao:
            'Entre um estado e outro, existem movimentos invisíveis. A série Transições nasce desses encontros — forças que se chocam, se misturam e se reorganizam. Aqui, a cor não é estática. Ela atravessa, rompe e se transforma, revelando processos internos que muitas vezes não conseguimos nomear.',
    },
    {
        nome: 'SÉRIE CICLOS',
        imagem: '/colecao/ciclos.jpg',
        descricao:
            'vida se move em ritmos silenciosos, repetidos e necessários. A série Ciclos investiga esses fluxos — o que começa, termina e recomeça continuamente. As formas giram, se acumulam e se dissolvem, criando uma sensação de continuidade e renovação. Uma pausa para perceber o tempo não como linha, mas como movimento circular.',
    },
    {
        nome: 'SÉRIE MAR',
        imagem: '/colecao/mar.jpg',
        descricao:
            'O mar não é apenas paisagem, é estado. Na série Mar, a profundidade, o silêncio e o movimento coexistem em camadas. As cores evocam imensidão, fluidez e contemplação, criando uma sensação de mergulho.',
    },
]

export default function Series() {
    return (
        <section style={{ backgroundColor: '#F9F2EC' }} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="flex flex-col items-center gap-4 mb-14">
                    <div className="bg-white rounded-2xl px-16 py-5 text-center shadow-sm">
                        <img src="/logo.png" alt="SN Logo" className="h-12 mx-auto mb-3" />
                        <div className="flex items-center gap-3">
                            <span className="flex-1 h-px bg-gray-200" />
                            <p className="text-xs tracking-[0.2em] text-[#C9A96E] whitespace-nowrap">GALERIA SANDRA NOVAS</p>
                            <span className="flex-1 h-px bg-gray-200" />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl px-12 py-6 text-center shadow-sm w-full max-w-2xl">
                        <h2 className="text-4xl font-serif text-[#1a1a1a] mb-3">SÉRIES</h2>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            Cada série nasce de um estado interno, uma forma de perceber e traduzir o mundo
                        </p>
                    </div>
                </div>

                {/* Linhas de séries */}
                <div className="flex flex-col gap-6">
                    {series.map((s) => (
                        <div
                            key={s.nome}
                            className="bg-[#08284E] rounded-2xl flex items-center gap-6 px-6 py-5 shadow-sm"
                        >
                            {/* Imagem */}
                            <div className="shrink-0 w-20 h-20 rounded-xl overflow-hidden">
                                <img
                                    src={s.imagem}
                                    alt={s.nome}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Nome */}
                            <p className="shrink-0 text-white text-xs font-bold tracking-[0.15em] w-36">
                                {s.nome}
                            </p>

                            {/* Descrição */}
                            <p className="flex-1 text-white/70 text-sm leading-relaxed">
                                {s.descricao}
                            </p>

                            {/* Botão */}
                            <div className="shrink-0">
                                <button className="bg-[#C9A96E] text-white text-[10px] font-bold tracking-[0.15em] px-6 py-3 rounded-lg hover:bg-[#b8956a] transition-colors whitespace-nowrap">
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
