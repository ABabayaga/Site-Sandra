export default function Artista() {
    return (
        <section id="artista" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="mb-10 flex flex-col items-center gap-5 sm:mb-14 sm:gap-6">
                    <div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="mx-auto mb-3 h-28 sm:mb-4 sm:h-44" />
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                            <p className="text-[10px] tracking-[0.16em] text-[#6e4c0d] sm:text-xs sm:tracking-[0.2em]">GALERIA SANDRA NOVAS</p>
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                        </div>
                    </div>

                    <div className="w-full max-w-2xl px-4 py-4 text-center sm:px-16 sm:py-6">
                        <h2 className="text-3xl leading-snug font-serif text-[#1a1a1a] sm:text-4xl">
                            Uma trajetória guiada pelo<br />impulso criativo
                        </h2>
                    </div>
                </div>

                {/* Grid 3 colunas */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">

                    {/* Card 1 — Sobre Mim */}
                    <div className="flex flex-col justify-between h-full rounded-2xl p-6 sm:p-8">
                        <div>
                            <p className="text-[11px] font-bold tracking-[0.2em] text-[#1a1a1a] mb-5">SOBRE MIM</p>
                            <p className="mb-5 text-base leading-snug font-semibold text-[#08284E] sm:mb-6 sm:text-lg">
                            Sandra Novas desenvolve uma pesquisa artística voltada à abstração sensível, explorando a relação entre matéria, emoção e presença.

                            </p>
                            <p className="text-sm leading-relaxed text-gray-700">
                            Sua produção utiliza a pintura como linguagem intuitiva, onde textura, gesto e cor constroem atmosferas que evocam estados internos e experiências sensoriais.

                            </p>
                        </div>
                        <div className="mt-6 sm:mt-8">
                            <p className="text-2xl text-[#1a1a1a] mb-1" style={{ fontFamily: 'cursive' }}>
                                sandra novas
                            </p>
                            <p className="font-semibold text-[#1a1a1a] text-sm">Sandra Novas</p>
                            <p className="text-xs text-gray-600">Artista visual</p>
                        </div>
                    </div>

                    {/* Card 2 — Texto */}
                    <div className="rounded-2xl p-6 flex flex-col justify-between h-full sm:p-8">
                        <div className="flex flex-col gap-5">
                            <p className="text-sm text-gray-600 leading-relaxed">
                            Com obras marcadas por camadas orgânicas e composições de forte presença visual, a artista cria séries que transitam entre intensidade e silêncio, movimento e contemplação.

                            </p>
                            <p className="text-sm text-gray-600 leading-relaxed">
                            A Galeria Sandra Novas surge como um espaço de conexão entre arte, percepção e experiência, reunindo trabalhos que convidam o olhar a desacelerar e permanecer.
                            </p>
                            
                        </div>
                        <p className="mt-6 text-base leading-snug font-semibold text-[#08284E] sm:mt-8 sm:text-lg">
                            Um espaço de liberdade, experimentação e escuta.
                        </p>
                    </div>

                    {/* Card 3 — Foto */}
                    <div className="overflow-hidden rounded-2xl bg-white shadow-sm sm:min-h-0">
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
