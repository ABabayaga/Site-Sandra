import { useEffect, useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { entregas, type EntregaGaleria } from '../data/entregas'

function SlideshowModal({ galeria, onClose }: { galeria: EntregaGaleria; onClose: () => void }) {
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(false)
    const total = galeria.imagens.length

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total)
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total)

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 300)
    }

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose()
            if (e.key === 'ArrowRight') nextSlide()
            if (e.key === 'ArrowLeft') prevSlide()
        }
        document.addEventListener('keydown', handleKey)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleKey)
            document.body.style.overflow = ''
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            {/* Slides */}
            {galeria.imagens.map((item, i) => (
                <div
                    key={item.imagem}
                    className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={item.imagem}
                        alt={galeria.titulo}
                        className="max-h-[75vh] max-w-[85vw] object-contain drop-shadow-2xl"
                    />
                    <div className="mt-6 px-8 text-center">
                        <p className="text-lg font-serif tracking-wide text-white">{galeria.titulo}</p>
                        <p className="mt-1 text-xs tracking-widest text-white/50">{galeria.local}</p>
                    </div>
                </div>
            ))}

            {/* Botão fechar */}
            <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:bg-white/10"
            >
                ✕
            </button>

            {total > 1 && (
                <>
                    {/* Prev */}
                    <button
                        onClick={(e) => { e.stopPropagation(); prevSlide() }}
                        className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white/10 sm:left-8"
                    >
                        ←
                    </button>

                    {/* Next */}
                    <button
                        onClick={(e) => { e.stopPropagation(); nextSlide() }}
                        className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-xl text-white transition-colors hover:bg-white/10 sm:right-8"
                    >
                        →
                    </button>

                    {/* Counter */}
                    <div className="absolute bottom-6 right-8 z-10 text-xs tracking-[0.2em] text-white/60">
                        0{current + 1} / 0{total}
                    </div>

                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                        {galeria.imagens.map((item, i) => (
                            <button
                                key={item.imagem}
                                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}

export default function Entregas() {
    const [modalGaleria, setModalGaleria] = useState<EntregaGaleria | null>(null)
    const isSingle = entregas.length === 1

    return (
        <section id="entregas" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-5 sm:px-6 sm:py-0">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="mb-6 flex flex-col items-center gap-2 text-center sm:mb-14">
                    <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— Entregas —</h2>
                    <p className="max-w-xl text-sm text-gray-600 sm:text-base">
                        Cada obra é embalada, transportada e instalada com o mesmo cuidado que teve em sua criação.
                    </p>
                </div>

                {/* Uma card por entrega, centralizadas lado a lado; abrem o modal com as imagens */}
                <div className="flex flex-wrap justify-center gap-6">
                    {entregas.map((galeria) => {
                        const capa = galeria.imagens[0]
                        return (
                            <button
                                key={galeria.slug}
                                onClick={() => setModalGaleria(galeria)}
                                className={`group relative flex h-56 w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl shadow-sm sm:h-64 ${isSingle ? 'max-w-2xl' : 'sm:w-85'}`}
                                style={{
                                    backgroundImage: `url('${capa.imagem}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: capa.posicao,
                                    backgroundColor: '#e7ddcf',
                                }}
                            >
                                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />
                                <div className="relative z-10 flex flex-col items-center gap-2 px-4 text-center text-white">
                                    <FaMapMarkerAlt size={22} />
                                    <p className="text-lg font-bold">{galeria.titulo}</p>
                                    <p className="text-sm text-white/80">{galeria.local}</p>
                                    <span className="mt-2 rounded-full border-2 border-white/40 bg-black/30 px-5 py-2 text-xs tracking-[0.16em] backdrop-blur-[10px] transition-colors group-hover:bg-white/20">
                                        VER GALERIA DE ENTREGAS
                                    </span>
                                </div>
                            </button>
                        )
                    })}
                </div>

            </div>

            {/* Modal Slideshow */}
            {modalGaleria !== null && (
                <SlideshowModal
                    galeria={modalGaleria}
                    onClose={() => setModalGaleria(null)}
                />
            )}
        </section>
    )
}
