export default function Artista() {
    return (
        <section id="artista" style={{ backgroundColor: '#F9F2EC' }} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="flex flex-col items-center gap-6 mb-14">
                    <div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="h-44 mx-auto mb-4" />
                        <div className="flex items-center gap-4">
                            <div className="w-48 h-px bg-[#4b3102] opacity-60" />
                            <p className="text-xs tracking-[0.2em] text-[#6e4c0d] whitespace-nowrap">GALERIA SANDRA NOVAS</p>
                            <div className="w-48 h-px bg-[#4b3102] opacity-60" />
                        </div>
                    </div>

                    <div className="bg-#C9A96E  px-16 py-6 text-center  w-full max-w-2xl">
                        <h2 className="text-4xl font-serif text-[#1a1a1a] leading-snug">
                            Uma trajetória guiada pelo<br />impulso criativo
                        </h2>
                    </div>
                </div>

                {/* Grid 3 colunas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 — Sobre Mim */}
                    <div className="bg-#C9A96Erounded-2xl p-8 flex flex-col justify-between">
                        <div>
                            <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-5">SOBRE MIM</p>
                            <p className="text-[#08284E] text-lg font-semibold leading-snug mb-6">
                                Hoje, minha produção se concentra na pintura abstrata, onde investigo a natureza e as conexões sensoriais.
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Cada obra é uma tradução de estados internos, transformados em paisagens de cor, movimento e intensidade.
                            </p>
                        </div>
                        <div className="mt-8">
                            <p className="text-2xl text-[#1a1a1a] mb-1" style={{ fontFamily: 'cursive' }}>
                                sandra novas
                            </p>
                            <p className="font-semibold text-[#1a1a1a] text-sm">Sandra Novas</p>
                            <p className="text-xs text-gray-400">Artista visual</p>
                        </div>
                    </div>

                    {/* Card 2 — Texto */}
                    <div className="bg-#C9A96E rounded-2xl p-8  flex flex-col justify-between">
                        <div className="flex flex-col gap-5">
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Minha trajetória artística começou de forma intuitiva, guiada pela curiosidade e pela escuta do momento.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Sem formação acadêmica, construí minha linguagem de maneira orgânica, onde a criação nasce do impulso e da conexão com o que sinto.
                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Minhas primeiras obras surgiram como gestos de troca e afeto, antes de qualquer intenção comercial.
                            </p>
                        </div>
                        <p className="text-[#08284E] text-lg font-semibold leading-snug mt-8">
                            Um espaço de liberdade, experimentação e escuta.
                        </p>
                    </div>

                    {/* Card 3 — Foto */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="/artista.png"
                            alt="Sandra Novas"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
