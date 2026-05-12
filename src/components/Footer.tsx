export default function Footer() {
    return (
        <footer id="contato">
            <div className="bg-[#08284E] py-8 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

                    {/* Col 1 — Logo + Nome */}
                    <div className="border border-white/30 rounded-2xl px-10 py-4 w-full flex flex-col items-center gap-3">
                        <img src="/logo.png" alt="SN Logo" className="h-20" />
                        <div className="text-center">
                            <p className="text-[#C9A96E] text-lg font-bold">Sandra Novas</p>
                            <p className="text-white/60 text-sm">Galeria de Arte</p>
                        </div>
                    </div>

                    {/* Col 2 — Endereço, Instagram e Horário */}
                    <div className="border border-white/30 rounded-2xl px-8 py-4 flex flex-col justify-center gap-4">
                        <div>
                            <p className="text-white text-base font-semibold mb-2">Contato</p>
                            <p className="text-white/60 text-xs tracking-widest uppercase">
                                R. Snipe Calarge, 280 – Campo Grande – MS
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-[#C9A96E] transition-colors w-fit"
                        >
                            <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
                            <span className="text-xs tracking-widest uppercase">Instagram</span>
                        </a>

                        <div>
                            <p className="text-white text-sm font-semibold mb-1">Horário de Funcionamento</p>
                            <p className="text-white/60 text-xs tracking-widest uppercase">
                                Segunda a Sexta-feira
                            </p>
                            <p className="text-white/60 text-xs tracking-widest uppercase">
                                11h às 18h
                            </p>
                        </div>
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
