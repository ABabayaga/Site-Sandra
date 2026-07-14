const conexoes = [
    {
        nome: 'Gustavo Soares',
        cargo: 'Empresário',
        imagem: '/gus5.jpeg',
        texto1: `Gustavo Soares é empresário e investidor, com uma trajetória marcada pela visão estratégica e pela capacidade de identificar projetos com potencial de crescimento.\n\nSua relação profissional com Sandra Novas atravessa mais de duas décadas, acompanhando diferentes fases de sua evolução artística e empreendedora. Ao longo desse período, Gustavo Soares passou a reconhecer não apenas a força de sua produção artística, mas também o potencial de expansão de sua marca no mercado da arte. \n\n Hoje, sua atuação está diretamente ligada ao desenvolvimento da Galeria Sandra Novas.`,
        texto2: `Ele contribui com investimento, visão empresarial e apoio estratégico para fortalecer a presença da artista no mercado. \n\nSua participação também se estende ao posicionamento, comunicação e estrutura de marketing da galeria, elementos fundamentais para ampliar o alcance, a percepção de valor e a conexão da obra com novos públicos.\n\nMais do que apoiar a produção artística, Gustavo Soares investe na construção de uma estrutura capaz de transformar talento, identidade e expressão em presença de mercado. Sua atuação reforça a importância de unir arte, estratégia e gestão para que a Galeria Sandra Novas avance com consistência, profissionalismo e visão de futuro.`,
    },
    {
        nome: 'Deise Rigon',
        cargo: 'FL Home',
        imagem: '/deise2.jpeg',
        texto1: `À frente da marca, Deise Rigon conduz uma construção guiada por percepção, intenção e cuidado — valores que se conectam de forma natural com o processo artístico. Não como caminhos paralelos, mas como linguagens que se reconhecem.\n\nNesse encontro, arte e ambiente deixam de ocupar espaços distintos e passam a dialogar de maneira orgânica. A obra não apenas compõe o espaço, ela se integra a ele. E o espaço, por sua vez, amplia a presença da obra. \n\n O que se estabelece não é uma relação comercial, mas uma convergência de visões. `,
        texto2: `É um alinhamento onde diferentes formas de expressão se encontram. \n\n Dessa conexão surgem experiências mais completas, mais sensíveis e mais significativas. \n\n O que se estabelece não é uma relação comercial, mas uma convergência de visões. Um alinhamento onde diferentes formas de expressão se encontram para criar experiências mais completas, mais sensíveis e mais significativas.\n\nPorque no fim, trata-se menos sobre onde cada elemento está — e mais sobre o que eles constroem juntos.`,
    },
]

export default function Conexoes() {
    return (
        <section id="conexoes" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-10 sm:px-6 sm:py-0 sm:pb-10">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="mb-10 flex justify-center sm:mb-14">
                    <div className="rounded-2xl px-6 py-3 sm:px-14 sm:py-4">
                        <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— Conexões —</h2>
                    </div>
                </div>

                {/* Linhas */}
                <div className="flex flex-col gap-6 sm:gap-8">
                    {conexoes.map((c) => (
                        <div key={c.nome} className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:items-stretch">

                            {/* Col 1 — Foto */}
                            <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-[#F9F2EC] p-3 shadow-sm sm:min-h-72 sm:p-4">
                                <img
                                    src={c.imagem}
                                    alt={c.nome}
                                    className="w-full h-full object-contain rounded-xl"
                                />
                                <div className="absolute right-0 bottom-0 left-0 bg-white px-4 py-3 sm:px-5 sm:py-4">
                                    <p className="text-base leading-tight font-semibold text-[#08284E] sm:text-lg">{c.nome}</p>
                                </div>
                            </div>

                            {/* Col 2 — Texto 1 */}
                            <div className="rounded-2xl p-5  sm:p-7">
                                <p className="mb-4 text-base font-semibold text-[#08284E]">{c.cargo}</p>
                                {c.texto1.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600 last:mb-0">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* Col 3 — Texto 2 */}
                            <div className="rounded-2xl p-5  sm:p-7">
                                {c.texto2.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600 last:mb-0">
                                        {p}
                                    </p>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
