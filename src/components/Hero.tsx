export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video2.mp4" type="video/mp4" />
            </video>

            {/* Overlay escuro sutil para dar contraste ao conteúdo */}
            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <p className="text-xs tracking-[0.35em] text-white/80 font-light mb-6 uppercase drop-shadow-md font-mirza">
                    Pintura Abstrata Contemporânea
                </p>

                <div className="flex items-center gap-6 w-full max-w-4xl justify-center mb-6">
                    <div className="flex-1 h-px bg-yellow-400 opacity-80" />
                    <h1 className="text-6xl md:text-8xl font-light tracking-widest text-white whitespace-nowrap drop-shadow-lg font-gilda">
                        Sandra Novas
                    </h1>
                    <div className="flex-1 h-px bg-yellow-400 opacity-80" />
                </div>

                <p className="text-xs tracking-[0.3em] text-white/80 font-light mb-12 uppercase drop-shadow-md font-mirza">
                    Transformando Estados Internos em Paisagens de Cor
                </p>

                <div className="flex gap-4">
                    <a
                        href="#obras"
                        className="px-8 py-3 bg-yellow-700 text-white text-xs tracking-widest uppercase hover:bg-yellow-600 transition-colors shadow-lg"
                    >
                        Ver Obras
                    </a>
                    <a
                        href="#sobre"
                        className="px-8 py-3 border border-white text-white text-xs tracking-widest uppercase hover:bg-white hover:text-gray-900 transition-colors shadow-lg"
                    >
                        Sobre a Artista
                    </a>
                </div>
            </div>
        </section>
    )
}