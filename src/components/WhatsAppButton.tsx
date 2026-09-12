import React from "react";

export const WhatsAppButton: React.FC = () => {
    return (
        <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 animate-gentle-pulse">
            <div className="relative w-9 h-9 sm:w-12 sm:h-12">
                <span className="absolute bottom-full right-2 mb-3 whitespace-nowrap rounded-full bg-blue-950 px-3 py-1.5 text-[11px] sm:text-xs font-poppins text-white shadow-lg shadow-black/15 ring-1 ring-black/5">
                    Agende sua visita
                    <span className="absolute top-full right-3 h-2.5 w-2.5 -mt-1.5 rotate-45 bg-blue-950 shadow-lg shadow-black/15" />
                </span>
                <a
                    href="https://wa.me/5567981473191?text=Ol%C3%A1!%20Conheci%20a%20Galeria%20Sandra%20Novas%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20visita.%20Poderiam%20me%20passar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full transition-all hover:scale-110"
                    aria-label="Falar no WhatsApp"
                >
                    <img
                        src="/whatsapp.png"
                        alt="WhatsApp"
                        className="w-full h-full object-contain drop-shadow-md"
                    />
                </a>
            </div>
        </div>
    );
};
