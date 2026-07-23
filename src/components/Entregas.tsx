import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaExpand } from 'react-icons/fa'

const entregas = [
    {
        imagem: '/ent1.png',
        titulo: 'Entrega Realizada',
        local: 'Alphaville 3, Campo Grande/MS',
        posicao: '75% 45%',
    },
    {
        imagem: '/ent2.png',
        titulo: '',
        local: '',
        posicao: '55% 22%',
    },
    {
        imagem: '/ent3.png',
        titulo: '',
        local: '',
        posicao: '62% 45%',
    },
]

function ImagemModal({ item, onClose }: { item: typeof entregas[0]; onClose: () => void }) {
    const [visible, setVisible] = useState(false)

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 300)
    }

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose()
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
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <img
                src={item.imagem}
                alt={item.titulo}
                className="max-h-[90vh] max-w-[90vw] object-contain drop-shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            />
            <button
                onClick={handleClose}
                className="absolute top-5 right-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-lg text-white transition-colors hover:bg-white/10"
            >
                ✕
            </button>
        </div>
    )
}

export default function Entregas() {
    const [activeIndex, setActiveIndex] = useState(0)
    const [modalItem, setModalItem] = useState<typeof entregas[0] | null>(null)

    return (
        <section id="entregas" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-10 sm:px-6 sm:py-14">
            <div className="max-w-6xl mx-auto">

                {/* Título */}
                <div className="mb-10 flex flex-col items-center gap-2 text-center sm:mb-14">
                    <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— Entregas —</h2>
                    <p className="max-w-xl text-sm text-gray-600 sm:text-base">
                        Cada obra é embalada, transportada e instalada com o mesmo cuidado que teve em sua criação.
                    </p>
                </div>

                {/* Painéis */}
                <div className="flex h-140 w-full flex-col overflow-hidden rounded-2xl shadow-sm sm:h-96 sm:flex-row">
                    {entregas.map((item, index) => {
                        const isActive = activeIndex === index
                        return (
                            <div
                                key={item.imagem}
                                role="button"
                                tabIndex={0}
                                onClick={() => setActiveIndex(index)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') setActiveIndex(index)
                                }}
                                className="relative flex cursor-pointer flex-col justify-end overflow-hidden transition-[flex] duration-500 ease-in-out"
                                style={{
                                    backgroundImage: `url('${item.imagem}')`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: item.posicao,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundColor: '#e7ddcf',
                                    borderWidth: '2px',
                                    borderStyle: 'solid',
                                    borderColor: isActive ? '#08284E' : 'rgba(8,40,78,0.1)',
                                    flex: isActive ? '7 1 0%' : '1 1 0%',
                                    minHeight: '60px',
                                    minWidth: '60px',
                                }}
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setModalItem(item)
                                    }}
                                    className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/30 bg-black/40 text-white backdrop-blur-[10px] transition-colors hover:bg-black/60"
                                >
                                    <FaExpand size={14} />
                                </button>

                                {isActive && (
                                    <>
                                        <div
                                            className="pointer-events-none absolute right-0 bottom-0 left-0 h-32"
                                            style={{ boxShadow: 'inset 0 -120px 100px -80px #000' }}
                                        />

                                        <div className="relative z-10 flex items-center gap-3 px-4 pb-5">
                                            {index === 0 ? (
                                                <>
                                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-black/40 backdrop-blur-[10px]">
                                                        <FaMapMarkerAlt size={18} className="text-white" />
                                                    </div>
                                                    <div className="text-white">
                                                        <p className="text-lg font-bold whitespace-nowrap">{item.titulo}</p>
                                                        <p className="text-sm whitespace-nowrap text-white/80">{item.local}</p>
                                                    </div>
                                                </>
                                            ) : (
                                                <p className="text-lg font-bold whitespace-nowrap text-white/50">
                                                    {index + 1}/{entregas.length}
                                                </p>
                                            )}
                                        </div>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div>

            </div>

            {modalItem !== null && (
                <ImagemModal item={modalItem} onClose={() => setModalItem(null)} />
            )}
        </section>
    )
}
