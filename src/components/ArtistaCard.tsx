export default function ArtistaCard() {
    return (
        <section
            className="relative z-10 flex w-full h-42"
            style={{ marginTop: '-110px', marginBottom: '-110px' }}
        >
            <div className="bg-[#08284E] flex flex-col justify-center px-14 py-10 w-[48%]">
                <h2 className="text-white text-4xl font-light tracking-widest uppercase mb-6">
                    Sobre a Artista
                </h2>
                <div className="flex items-center gap-6">
                    <span className="text-[#C9A96E] text-xs tracking-[0.25em] uppercase whitespace-nowrap">
                        Sandra Novas
                    </span>
                    <div className="flex-1 h-px bg-[#C9A96E] opacity-70" />
                </div>
            </div>
            {/* Direita transparente — hero acima, artista abaixo aparecem por baixo */}
            <div className="flex-1" />
        </section>
    );
}
