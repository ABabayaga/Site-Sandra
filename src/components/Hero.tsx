export default function Hero() {
    return (
        <section className="relative min-h-screen w-full">
            <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/video4-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video4-opt.mp4" type="video/mp4" />
            </video>

            {/* Overlay escuro sutil para dar contraste ao conteúdo */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-24 pb-10 text-center sm:px-6">
                <p className="mb-4 text-[10px] font-light uppercase tracking-[0.28em] text-white/80 drop-shadow-md font-mirza sm:mb-6 sm:text-xs sm:tracking-[0.35em]">
                    Pintura Abstrata Contemporânea
                </p>

                <div className="mb-5 flex w-full max-w-4xl items-center justify-center gap-3 sm:mb-6 sm:gap-6">
                    <div className="h-px flex-1 bg-yellow-400 opacity-80" />
                    <h1 className="max-w-[220px] text-4xl leading-none font-bold tracking-[0.12em] text-white drop-shadow-lg font-poppins sm:max-w-none sm:text-6xl sm:tracking-widest md:text-8xl">
                        Sandra Novas
                    </h1>
                    <div className="h-px flex-1 bg-yellow-400 opacity-80" />
                </div>

                <p className="mb-8 max-w-xs text-[10px] font-light uppercase tracking-[0.22em] text-white/80 drop-shadow-md font-mirza sm:mb-12 sm:max-w-2xl sm:text-xs sm:tracking-[0.3em]">
                    Transformando Estados Internos em Paisagens de Cor
                </p>

                <div className="flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                    <a
                        href="#colecoes"
                        className="bg-yellow-700 px-6 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-white transition-colors shadow-lg hover:bg-yellow-600 sm:px-8 sm:text-xs sm:tracking-widest"
                    >
                        Ver Obras
                    </a>
                    <a
                        href="#artista"
                        className="border border-white px-6 py-3 text-center text-[11px] uppercase tracking-[0.22em] text-white transition-colors shadow-lg hover:bg-white hover:text-gray-900 sm:px-8 sm:text-xs sm:tracking-widest"
                    >
                        Sobre a Artista
                    </a>
                </div>
            </div>

            <a
                href="#artista"
                className="absolute bottom-0 left-0 z-20 flex h-24 w-[calc(100%-2rem)] translate-y-1/2 flex-col justify-center bg-[#08284E] px-8 text-white shadow-2xl transition-transform hover:scale-[1.01] sm:h-32 sm:w-[42rem] sm:px-16 lg:w-[46rem]"
            >
                <span className="mb-4 text-2xl font-light uppercase tracking-[0.16em] sm:mb-6 sm:text-4xl sm:tracking-[0.18em]">
                    Sobre a Artista
                </span>
                <span className="flex w-full items-center gap-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-[#C9A96E] sm:text-xs">
                        Sandra Novas
                    </span>
                    <span className="h-px flex-1 bg-[#C9A96E]" />
                </span>
            </a>
        </section>
    )
}
