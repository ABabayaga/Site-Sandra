export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden">
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
        </section>
    )
}
