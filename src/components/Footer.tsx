export default function Footer() {
    return (
        <footer>
            {/* Área principal navy */}
            <div className="bg-[#08284E] py-16 px-6">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Col 1 — Logo + Nome */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="border border-white/30 rounded-2xl px-10 py-6 w-full flex justify-center">
                            <img src="/logo.png" alt="SN Logo" className="h-16" />
                        </div>
                        <div className="border border-white/30 rounded-2xl px-10 py-4 w-full text-center">
                            <p className="text-[#C9A96E] text-lg font-bold">Sandra Novas</p>
                            <p className="text-white/60 text-sm">Galeria de Arte</p>
                        </div>
                    </div>

                    {/* Col 2 — Contato */}
                    <div className="border border-white/30 rounded-2xl px-8 py-8 h-full flex flex-col justify-center gap-4">
                        <p className="text-white text-base font-semibold">Contato</p>
                        <p className="text-white/60 text-xs tracking-widest uppercase">
                            R. Snipe Calarge, 280 – Campo Grande – MS
                        </p>
                        <p className="text-white/60 text-sm cursor-pointer hover:text-[#C9A96E] transition-colors">
                            Event
                        </p>
                    </div>

                  

                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#2a2a28] py-5 px-6">
                <p className="text-center text-white/30 text-[10px] tracking-[0.2em] uppercase">
                    Agência BR7 – Marketing em Movimento 2026
                </p>
            </div>
        </footer>
    )
}
