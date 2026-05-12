import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#" },
    { label: "ARTISTA", href: "#artista" },
    { label: "COLEÇÕES", href: "#colecoes" },
    { label: "SERIES", href: "#series" },
    { label: "CONEXÕES", href: "#conexoes" },
    { label: "CONTATO", href: "#contato" },
  ];

  return (
    <header>
      <nav
        aria-label="Primary"
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2"
      >
        <div className="relative flex h-20 items-center justify-between rounded-2xl border border-white/10 bg-[#08284E]/70 px-4 shadow-[0_10px_40px_rgba(8,40,78,0.25)] backdrop-blur-xl md:px-5">
          {/* Anel interno sutil */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />

          {/* Logo */}
          <a href="#" className="relative z-10 flex shrink-0 items-center">
            <img
              src="/public/logo.png"
              className="h-12 sm:h-24 object-contain"
              alt="Logo"
            />
          </a>

          {/* Links — desktop */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b]"
              >
                {link.label}
              </a>
            ))}
          </div>

         

          {/* Hamburger — mobile */}
          <button
            className="relative z-10 flex lg:hidden flex-col justify-center items-center gap-1.5 w-9 h-9"
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
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}