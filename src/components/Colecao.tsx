import { useState, useEffect } from 'react'

const obras = [
    {
        serie: 'SÉRIE TRANSIÇÕES',
        titulo: 'ENCONTRO DE FORÇAS',
        dimensoes: '2,00 x 2,20',
        imagem: '/serie1.png',
    },
    {
        serie: 'SÉRIES CICLOS',
        titulo: 'ENERGIA VITAL',
        dimensoes: '1,20 x 1,00',
        imagem: '/serie2.png',
    },
    {
        serie: 'SÉRIE GOTEJAMENTO',
        titulo: 'MOVIMENTO E FLUXO',
        dimensoes: '1,00 x 1,00',
        imagem: '/serie3.png',
    },
    {
        serie: 'SÉRIE INTENSIDADE',
        titulo: 'ENERGIA INCANDESCENTE',
        dimensoes: '0,80 x 0,80',
        imagem: '/serie4.png',
    },
    {
        serie: 'SÉRIE MAR',
        titulo: 'PROFUNDIDADE AZUL',
        dimensoes: '2,00 x 1,20',
        imagem: '/serie5.png',
    },
    {
        serie: 'SÉRIE CONEXÕES',
        titulo: 'RAÍZES INVISÍVEIS',
        dimensoes: '2,00 x 1,20',
        imagem: '/serie6.png',
    },
]

function SlideshowModal({ initialIndex, onClose }: { initialIndex: number; onClose: () => void }) {
    const [current, setCurrent] = useState(initialIndex)
    const [visible, setVisible] = useState(false)

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
    }, [])

    const nextSlide = () => setCurrent((prev) => (prev + 1) % obras.length)
    const prevSlide = () => setCurrent((prev) => (prev - 1 + obras.length) % obras.length)

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 300)
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            {/* Slides */}
            {obras.map((obra, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    style={{
                        backgroundImage: `url(${obra.imagem})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Gradient overlay + info */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/30 to-transparent px-8 pb-20 pt-32">
                        <p className="text-white/70 text-[10px] tracking-[0.22em] mb-2">{obra.serie}</p>
                        <p className="text-white text-2xl font-serif tracking-wide">{obra.titulo}</p>
                        <p className="text-white/50 text-xs mt-2 tracking-widest">{obra.dimensoes}</p>
                    </div>
                </div>
            ))}

            {/* Botão fechar */}
            <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white text-lg hover:bg-white/10 transition-colors"
            >
                ✕
            </button>

            {/* Prev */}
            <button
                onClick={(e) => { e.stopPropagation(); prevSlide() }}
                className="absolute left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white text-xl hover:bg-white/10 transition-colors sm:left-8"
            >
                ←
            </button>

            {/* Next */}
            <button
                onClick={(e) => { e.stopPropagation(); nextSlide() }}
                className="absolute right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white text-xl hover:bg-white/10 transition-colors sm:right-8"
            >
                →
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 right-8 z-10 text-white/60 text-xs tracking-[0.2em]">
                0{current + 1} / 0{obras.length}
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {obras.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    )
}

function CardObra({ serie, titulo, dimensoes, imagem, onVerMais }: typeof obras[0] & { onVerMais: () => void }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer">
            <img
                src={imagem}
                alt={serie}
                className="h-72 w-full object-cover sm:h-80 md:h-96"
            />
            <div className="absolute bottom-0 left-0 max-w-[calc(100%-1rem)] rounded-tr-2xl bg-[#08284E] px-4 py-3 sm:px-5 sm:py-4">
                <p className="text-white text-xs font-bold tracking-[0.15em] mb-1">{serie}</p>
                <p className="mb-1 text-[10px] text-white/70 tracking-[0.18em] sm:tracking-widest">{titulo}</p>
                <p className="text-white/50 text-[10px]">{dimensoes}</p>
            </div>
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
                <button
                    onClick={onVerMais}
                    className="rounded-full border border-white/40 px-3 py-1 text-[10px] tracking-[0.16em] text-white transition-colors hover:bg-white/10 sm:px-4 sm:tracking-widest"
                >
                    VER MAIS
                </button>
            </div>
        </div>
    )
}

export default function Colecao() {
    const [modalIndex, setModalIndex] = useState<number | null>(null)

    return (
        <section id='colecoes' style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-16 sm:px-6 sm:py-0">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="mb-10 flex flex-col items-center gap-4 sm:mb-14">
                    {/*<div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="mx-auto mb-3 h-28 sm:mb-4 sm:h-44" />
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                            <p className="text-[10px] tracking-[0.16em] text-[#6e4c0d] sm:text-xs sm:tracking-[0.2em]">GALERIA SANDRA NOVAS</p>
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                        </div>
                    </div>*/}
                    <div className="rounded-2xl px-4 py-2 text-center sm:px-10 sm:py-3">
                        <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">Explorar a coleção</h2>
                    </div>
                </div>

                {/* Grid 3x2 */}
                <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 sm:mb-14">
                    {obras.map((obra, i) => (
                        <CardObra key={obra.serie} {...obra} onVerMais={() => setModalIndex(i)} />
                    ))}
                </div>

            </div>

            {/* Modal Slideshow */}
            {modalIndex !== null && (
                <SlideshowModal
                    initialIndex={modalIndex}
                    onClose={() => setModalIndex(null)}
                />
            )}
        </section>
    )
}
