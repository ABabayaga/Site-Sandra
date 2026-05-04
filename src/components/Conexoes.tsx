const conexoes = [
    {
        nome: 'GUSTAVO SOARES',
        cargo: 'Empresário',
        imagem: '/conexoes/gustavo.jpg',
        texto1: `Algumas conexões não começam com um plano, começam com o tempo. Gustavo acompanha a trajetória de Sandra há mais de duas décadas. Ao longo desse caminho, o que se construiu foi além de momentos pontuais: uma relação atravessada por ciclos pessoais e profissionais, marcada por proximidade, confiança e uma admiração que se manteve constante.\n\nEntre encontros e recomeços, existe uma presença que nunca deixou de existir — aquela que não precisa ser anunciada, mas que se revela nas escolhas, nas decisões e no apoio silencioso.`,
        texto2: `Hoje, sua participação se traduz em visão, suporte e sensibilidade para reconhecer o valor de uma obra antes mesmo dela estar pronta. Existe um olhar atento para o que ainda está em processo, uma capacidade de enxergar potência onde muitos ainda veem apenas início.\n\nMais do que um investidor, Gustavo integra a estrutura invisível que sustenta o que se torna visível — alguém que compreende que a arte não nasce apenas do gesto criativo, mas também do ambiente que permite que ela exista.`,
    },
    {
        nome: 'Deise Rigon',
        cargo: 'FL HOME',
        imagem: '/conexoes/deise.jpg',
        texto1: `À frente da marca, Deise Rigon conduz uma construção guiada por percepção, intenção e cuidado — valores que se conectam de forma natural com o processo artístico. Não como caminhos paralelos, mas como linguagens que se reconhecem.\n\nNesse encontro, arte e ambiente deixam de ocupar espaços distintos e passam a dialogar de maneira orgânica. A obra não apenas compõe o espaço, ela se integra a ele. E o espaço, por sua vez, amplia a presença da obra.`,
        texto2: `O que se estabelece não é uma relação comercial, mas uma convergência de visões. Um alinhamento onde diferentes formas de expressão se encontram para criar experiências mais completas, mais sensíveis e mais significativas.\n\nPorque no fim, trata-se menos sobre onde cada elemento está — e mais sobre o que eles constroem juntos.`,
    },
]

export default function Conexoes() {
    return (
        <section style={{ backgroundColor: '#F9F2EC' }} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="flex justify-center mb-14">
                    <div className="border border-gray-300 rounded-2xl px-14 py-4 bg-white/60">
                        <h2 className="text-3xl font-serif text-[#1a1a1a]">Conexões</h2>
                    </div>
                </div>

                {/* Linhas */}
                <div className="flex flex-col gap-8">
                    {conexoes.map((c) => (
                        <div key={c.nome} className="grid grid-cols-1 md:grid-cols-3 gap-6">

                            {/* Col 1 — Foto */}
                            <div className="relative rounded-2xl overflow-hidden shadow-sm min-h-72">
                                <img
                                    src={c.imagem}
                                    alt={c.nome}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm px-5 py-4">
                                    <p className="text-[#08284E] text-lg font-semibold leading-tight">{c.nome}</p>
                                </div>
                            </div>

                            {/* Col 2 — Texto 1 */}
                            <div className="bg-white rounded-2xl p-7 shadow-sm">
                                <p className="text-[#08284E] font-semibold text-base mb-4">{c.cargo}</p>
                                {c.texto1.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 last:mb-0">
                                        {p}
                                    </p>
                                ))}
                            </div>

                            {/* Col 3 — Texto 2 */}
                            <div className="bg-white rounded-2xl p-7 shadow-sm">
                                {c.texto2.split('\n\n').map((p, i) => (
                                    <p key={i} className="text-sm text-gray-600 leading-relaxed mb-4 last:mb-0">
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
