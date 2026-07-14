export default function ArtistaCard() {
    return (
        <section
            className="relative z-10 flex w-full"
            style={{ marginTop: '-66px', marginBottom: '-66px' }}
        >
            <div className="w-full bg-[#08284E] px-6 py-6 sm:w-[48%] sm:px-14 sm:py-6">
                <h2 className="mb-4 text-2xl font-light tracking-[0.2em] text-white uppercase sm:mb-6 sm:text-2xl sm:tracking-widest">
                    Sobre a Artista
                </h2>
                <div className="flex items-center gap-3 sm:gap-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#C9A96E] sm:text-xs sm:tracking-[0.25em]">
                        Sandra Novas
                    </span>
                    <div className="flex-1 h-px bg-[#C9A96E] opacity-70" />
                </div>
            </div>
            <div className="hidden flex-1 sm:block" style={{ backgroundColor: '#F9F2EC' }} />
        </section>
    );
}
