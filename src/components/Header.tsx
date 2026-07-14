import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { series } from "../data/series";

const extraSeries = series.slice(3);

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [seriesMenuOpen, setSeriesMenuOpen] = useState(false);
  const seriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!seriesMenuOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSeriesMenuOpen(false);
    };
    const onClickOutside = (e: MouseEvent) => {
      if (seriesRef.current && !seriesRef.current.contains(e.target as Node)) {
        setSeriesMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [seriesMenuOpen]);

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
          <a href="/" className="relative z-10 flex shrink-0 items-center">
            <img
              src="/logo.png"
              className="h-10 object-contain sm:h-24"
              alt="Logo"
            />
          </a>

          {/* Links — desktop */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex">
            <a
              href="/"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              HOME
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/#artista"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              ARTISTA
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/#colecoes"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              COLEÇÕES
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>

            {/* SERIES — dropdown */}
            <div ref={seriesRef} className="relative">
              <button
                onClick={() => setSeriesMenuOpen((v) => !v)}
                aria-expanded={seriesMenuOpen}
                className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] cursor-pointer bg-transparent border-none p-0 transition-colors duration-200 hover:text-white"
              >
                <span className="flex items-center gap-1">
                  SERIES
                  <svg
                    className={`h-2.5 w-2.5 transition-transform duration-300 ${seriesMenuOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 10 6"
                    fill="none"
                  >
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
              </button>

              {seriesMenuOpen && (
                <div className="animate-[fadeSlideIn_0.3s_ease-out_both] absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#08284E]/95 p-2 shadow-xl backdrop-blur-xl">
                  <ul className="flex flex-col gap-0.5">
                    {extraSeries.map((s) => (
                      <li key={s.nome}>
                        <Link
                          to={`/series/${s.slug}`}
                          onClick={() => setSeriesMenuOpen(false)}
                          className="group/item flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left uppercase text-[12px] tracking-wide text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
                        >
                          {s.nome}
                          <svg
                            className="h-3 w-3 shrink-0 text-[#D9BC9A]/60 transition-transform duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-white"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path d="M4 2.5L8 6l-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              href="/#conexoes"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              CONEXÕES
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/#entregas"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              ENTREGAS
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="/#contato"
              className="group relative flex flex-col items-center gap-0.5 text-[13px] font-medium uppercase tracking-[0.16em] text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              CONTATO
              <span className="block h-px w-0 bg-[#fba13b] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Links principais — mobile */}
          <div className="relative z-10 flex items-center gap-3.5 sm:gap-5 lg:hidden">
            <a
              href="/#artista"
              className="text-[10px] font-medium uppercase tracking-widest text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              ARTISTA
            </a>
            <a
              href="/#colecoes"
              className="text-[10px] font-medium uppercase tracking-widest text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              COLEÇÕES
            </a>
            <a
              href="/#contato"
              className="text-[10px] font-medium uppercase tracking-widest text-[#fba13b] transition-colors duration-200 hover:text-white"
            >
              CONTATO
            </a>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 self-center lg:hidden"
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
            menuOpen ? "max-h-144 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            <li>
              <a
                href="/"
                className="block rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
              >
                HOME
              </a>
            </li>
            {/* SERIES — dropdown mobile */}
            <li>
              <button
                onClick={() => setSeriesMenuOpen((v) => !v)}
                aria-expanded={seriesMenuOpen}
                className="flex w-full items-center gap-1.5 text-left rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white hover:bg-white/5"
              >
                SERIES
                <svg
                  className={`h-2.5 w-2.5 transition-transform duration-300 ${seriesMenuOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 10 6"
                  fill="none"
                >
                  <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${seriesMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden pl-3">
                  <ul className="flex flex-col gap-0.5 py-1">
                    {extraSeries.map((s) => (
                      <li key={s.nome}>
                        <Link
                          to={`/series/${s.slug}`}
                          onClick={() => { setSeriesMenuOpen(false); setMenuOpen(false); }}
                          className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-left uppercase text-[11px] tracking-wide text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
                        >
                          {s.nome}
                          <svg
                            className="h-3 w-3 shrink-0 text-[#D9BC9A]/60"
                            viewBox="0 0 12 12"
                            fill="none"
                          >
                            <path d="M4 2.5L8 6l-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <a
                href="/#conexoes"
                className="block rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
              >
                CONEXÕES
              </a>
            </li>
            <li>
              <a
                href="/#entregas"
                className="block rounded-xl px-4 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-[#D9BC9A] transition-colors duration-200 hover:text-white hover:bg-white/5"
              >
                ENTREGAS
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
