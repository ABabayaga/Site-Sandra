const conexoes = [
    {
        nome: 'Gustavo Soares',
        cargo: 'Empresário',
        imagem: '/gus5.jpeg',
        texto: `Empresário e investidor, Gustavo Soares mantém uma relação profissional com Sandra Novas há mais de duas décadas, acompanhando sua evolução artística e empreendedora.\n\nHoje sua atuação está diretamente ligada ao desenvolvimento da Galeria Sandra Novas, contribuindo com investimento, visão estratégica e apoio ao posicionamento, marketing e presença da artista no mercado.`,
    },
    {
        nome: 'Deise Rigon',
        cargo: 'FL Home',
        imagem: '/deise2.jpeg',
        texto: `À frente da FL Home, Deise Rigon conduz uma construção guiada por percepção, intenção e cuidado valores que dialogam naturalmente com o processo artístico.\n\nNessa conexão, arte e ambiente deixam de ser espaços distintos: a obra integra-se ao ambiente e o ambiente amplia sua presença, criando experiências mais completas e significativas.`,
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
                <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:items-stretch">
                    {conexoes.map((c) => (
                        <div key={c.nome} className="grid grid-cols-1 gap-4 sm:grid-cols-[6fr_5fr] sm:gap-5">

                            {/* Foto */}
                            <div className="relative min-h-80 overflow-hidden rounded-2xl bg-[#F9F2EC] p-3 shadow-sm sm:min-h-full sm:p-4">
                                <img
                                    src={c.imagem}
                                    alt={c.nome}
                                    className="w-full h-full object-contain rounded-xl"
                                />
                                <div className="absolute right-0 bottom-0 left-0 bg-white px-4 py-3 sm:px-5 sm:py-4">
                                    <p className="text-base leading-tight font-semibold text-[#08284E] sm:text-lg">{c.nome}</p>
                                </div>
                            </div>

                            {/* Texto */}
                            <div className="rounded-2xl p-2 sm:p-3">
                                <p className="mb-3 text-base font-semibold text-[#08284E]">{c.cargo}</p>
                                {c.texto.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-3 text-sm leading-relaxed text-gray-600 last:mb-0">
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
