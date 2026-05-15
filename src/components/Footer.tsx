export default function Footer() {
    return (
        <footer id="contato">
            <div className="bg-[#08284E] px-4 py-8 sm:px-6">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 items-stretch sm:gap-10 md:grid-cols-2">

                    {/* Col 1 — Logo + Nome */}
                    <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-white/30 px-6 py-5 sm:px-10">
                        <img src="/logo.png" alt="SN Logo" className="h-16 sm:h-20" />
                        <div className="text-center">
                            <p className="text-[#C9A96E] text-lg font-bold">Sandra Novas</p>
                            <p className="text-white/60 text-sm">Galeria de Arte</p>
                        </div>
                    </div>

                    {/* Col 2 — Endereço, Instagram e Horário */}
                    <div className="flex flex-col justify-center gap-4 rounded-2xl border border-white/30 px-5 py-5 sm:px-8">
                        <div>
                            <p className="text-white text-base font-semibold mb-2">Atendimento</p>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-widest">
                                R. Spipe Calarge, 280 – Campo Grande – MS
                            </p>
                        </div>

                        <a
                            href="https://www.instagram.com/galeriasandranovas/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white/60 hover:text-[#C9A96E] transition-colors w-fit"
                        >
                            <img src="/insta.png" alt="Instagram" className="h-5 w-5" />
                            <span className="text-[11px] uppercase tracking-[0.18em] sm:text-xs sm:tracking-widest">Instagram</span>
                        </a>

                        <div>
                            <p className="text-white text-sm font-semibold mb-1">Horário de Funcionamento</p>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-widest">
                                Segunda a Sexta-feira
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.18em] pb-2 text-white/60 sm:text-xs sm:tracking-widest">
                                10h às 19h
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-widest">
                                Sábados
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 sm:text-xs sm:tracking-widest">
                                09h às 13h
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-[#2a2a28] px-4 py-5 sm:px-6">
                <p className="text-center text-[9px] uppercase tracking-[0.16em] text-white/60 sm:text-[10px] sm:tracking-[0.2em]">
                    Agência BR7 – Marketing em Movimento 2026
                </p>
            </div>
        </footer>
    )
}
