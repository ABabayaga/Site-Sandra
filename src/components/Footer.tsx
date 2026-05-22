export default function Footer() {
    return (
        <footer id="contato">
            <div className="bg-[#08284E] px-4 py-4 sm:px-6 ">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 items-stretch sm:grid-cols-3 sm:gap-8 border-t border-b border-white/30">

                    {/* Col 1 — Logo + Nome */}
                    <div className="flex flex-col items-center justify-center gap-0  px-6 py-3">
                        <img src="/logo.png" alt="SN Logo" className="h-10 sm:h-25" />
                        <div className="text-center">
                            <p className="text-[#C9A96E] text-base font-bold">Sandra Novas</p>
                            <p className="text-white/60 text-xs">Galeria de Arte</p>
                        </div>
                    </div>

                    {/* Col 2 — Atendimento + Horário */}
                    <div className="flex flex-col justify-center gap-2  px-5 py-3">
                        <div>
                            <p className="text-white text-sm font-semibold mb-1">Atendimento</p>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-white/60 leading-relaxed whitespace-nowrap">
                                R. Spipe Calarge, 286 – Campo Grande – MS
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com/galeriasandranovas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-[#C9A96E] transition-colors w-fit"
                        >
                            <img src="/insta.png" alt="Instagram" className="h-4 w-4" />
                            <span className="text-[11px] uppercase tracking-[0.15em]">Instagram</span>
                        </a>

                        <div>
                            <p className="text-white text-xs font-semibold mb-1">Horário de Funcionamento</p>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-white/60 leading-relaxed">
                                Segunda a Sexta-feira · 10h às 19h
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-white/60 leading-relaxed">
                                Sábados · 09h às 13h
                            </p>
                        </div>
                    </div>

                    {/* Col 3 — BR7 */}
                    <div className="flex flex-col items-center justify-center gap-2  px-6 py-3">
                        <p className="text-white text-xs font-semibold">Uma criação de</p>
                        <a
                            href="https://www.instagram.com/br7.mkt_/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src="/br7.png" alt="BR7 Marketing em Movimento" className="h-12 sm:h-16" />
                        </a>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#2a2a28] px-4 py-1 sm:px-4">
                <a
                    href="https://www.instagram.com/br7.mkt_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center text-[9px] uppercase tracking-[0.16em] text-white/60 hover:text-white/80 transition-colors sm:text-[10px] sm:tracking-[0.2em]"
                >
                    Agência BR7 – Marketing em Movimento {new Date().getFullYear()}
                </a>
            </div>
        </footer>
    )
}
