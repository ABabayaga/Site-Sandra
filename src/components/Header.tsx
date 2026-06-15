import { useState } from "react";

interface HeaderProps {
  onOpenSeries: () => void;
}

export default function Header({ onOpenSeries }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#" },
    { label: "ARTISTA", href: "#artista" },
    { label: "COLEÇÕES", href: "#colecoes" },
    { label: "SERIES", href: null, onClick: onOpenSeries },
    { label: "CONEXÕES", href: "#conexoes" },
    { label: "ENTREGAS", href: "#entregas" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <header>
      <nav
        aria-label="Primary"
        className="fixed top-3 left-1/2 z-50 w-[calc(100%-16px)] max-w-6xl -translate-x-1/2 sm:top-4 sm:w-[calc(100%-24px)]"
      >
        <div className="relative flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-[#08284E]/80 px-3 shadow-[0_10px_40px_rgba(8,40,78,0.25)] backdrop-blur-xl sm:h-20 sm:px-4 md:px-5">
          {/* Anel interno sutil */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

          {/* Logo */}
          <a href="#" className="relative z-10 flex shrink-0 items-center">
            <img
              src="/logo.png"
              className="h-10 object-contain sm:h-24"
              alt="Logo"
            />
          </a>

          {/* Links — desktop */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {links.map((link) =>
              link.onClick ? (
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] cursor-pointer bg-transparent border-none p-0 transition-colors duration-200 hover:text-white"
                >
                  <span className="flex items-center gap-1">
                    {link.label}
                    <svg className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100 transition-opacity" viewBox="0 0 10 10" fill="currentColor">
                      <rect x="0" y="0" width="4" height="4" rx="0.5"/>
                      <rect x="6" y="0" width="4" height="4" rx="0.5"/>
                      <rect x="0" y="6" width="4" height="4" rx="0.5"/>
                      <rect x="6" y="6" width="4" height="4" rx="0.5"/>
                    </svg>
                  </span>
                  <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href!}
                  className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                  <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
                </a>
              )
            )}
          </div>

         

          {/* Hamburger — mobile */}
          <button
            className="relative z-10 flex h-9 w-9 items-center justify-center gap-1.5 self-center lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-5 bg-[#D9BC9A] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#D9BC9A] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-[#D9BC9A] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Menu mobile dropdown */}
        <div
          className={`mt-2 overflow-hidden rounded-2xl border border-white/10 bg-[#08284E]/80 backdrop-blur-xl transition-all duration-300 lg:hidden ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {links.map((link) => (
              <li key={link.label}>
                {link.onClick ? (
                  <button
                    onClick={() => { link.onClick!(); setMenuOpen(false); }}
                    className="flex w-full items-center gap-1.5 text-left rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                    <svg className="w-2.5 h-2.5 opacity-60" viewBox="0 0 10 10" fill="currentColor">
                      <rect x="0" y="0" width="4" height="4" rx="0.5"/>
                      <rect x="6" y="0" width="4" height="4" rx="0.5"/>
                      <rect x="0" y="6" width="4" height="4" rx="0.5"/>
                      <rect x="6" y="6" width="4" height="4" rx="0.5"/>
                    </svg>
                  </button>
                ) : (
                  <a
                    href={link.href!}
                    className="block rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
