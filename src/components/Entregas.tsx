import { useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaExpand } from 'react-icons/fa'

const entregas = [
    {
        imagem: '/ent1.png',
        titulo: 'Entrega Realizada',
        local: 'Alphaville 3, Campo Grande/MS',
        posicao: '75% 45%',
        span: 'sm:col-span-2 sm:row-span-2',
    },
    {
        imagem: '/ent2.png',
        titulo: '',
        local: '',
        posicao: '55% 22%',
        span: 'sm:col-span-1 sm:row-span-1',
    },
    {
        imagem: '/ent3.png',
        titulo: '',
        local: '',
        posicao: '62% 45%',
        span: 'sm:col-span-1 sm:row-span-1',
    },
]

function BentoGalleryModal({ onClose }: { onClose: () => void }) {
    const [visible, setVisible] = useState(false)
    const [selected, setSelected] = useState<typeof entregas[0] | null>(null)

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 300)
    }

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key !== 'Escape') return
            if (selected) setSelected(null)
            else handleClose()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selected])

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm transition-opacity duration-300 sm:p-8 ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => (selected ? setSelected(null) : handleClose())}
        >
            <div
                className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-[#F9F2EC] p-4 sm:p-6"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[#08284E]/20 bg-white/70 text-lg text-[#08284E] backdrop-blur-sm transition-colors hover:bg-white"
                >
                    ✕
                </button>

                {selected ? (
                    <div className="flex flex-col items-center pt-2">
                        <div className="relative w-full overflow-hidden rounded-xl">
                            <img
                                src={selected.imagem}
                                alt={selected.titulo || 'Entrega'}
                                className="max-h-[65vh] w-full object-contain"
                            />
                            {selected.titulo && (
                                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4">
                                    <p className="flex items-center gap-2 text-base font-bold text-white">
                                        <FaMapMarkerAlt size={14} />
                                        {selected.titulo}
                                    </p>
                                    <p className="text-sm text-white/80">{selected.local}</p>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => setSelected(null)}
                            className="mt-4 rounded-full border border-[#08284E]/20 px-4 py-2 text-xs tracking-[0.16em] text-[#08284E] transition-colors hover:bg-[#08284E]/10"
                        >
                            ← VOLTAR À GALERIA
                        </button>
                    </div>
                ) : (
                    <>
                        <h3 className="mb-4 pr-10 text-xl font-serif text-[#1a1a1a] sm:mb-6 sm:text-2xl">Galeria de Entregas</h3>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:auto-rows-[160px]">
                            {entregas.map((item) => (
                                <button
                                    key={item.imagem}
                                    onClick={() => setSelected(item)}
                                    className={`group relative h-48 overflow-hidden rounded-xl sm:h-auto ${item.span}`}
                                    style={{
                                        backgroundImage: `url('${item.imagem}')`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: item.posicao,
                                        backgroundColor: '#e7ddcf',
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                                    {item.titulo && (
                                        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 text-left">
                                            <p className="flex items-center gap-2 text-sm font-bold text-white">
                                                <FaMapMarkerAlt size={12} />
                                                {item.titulo}
                                            </p>
                                            <p className="text-xs text-white/80">{item.local}</p>
                                        </div>
                                    )}
                                    <div className="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-[10px] transition-opacity duration-300 group-hover:opacity-100">
                                        <FaExpand size={12} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default function Entregas() {
    const [galleryOpen, setGalleryOpen] = useState(false)

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

                {/* CTA */}
                <button
                    onClick={() => setGalleryOpen(true)}
                    className="group relative mx-auto flex h-56 w-full max-w-2xl cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl shadow-sm sm:h-64"
                    style={{
                        backgroundImage: `url('${entregas[0].imagem}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: entregas[0].posicao,
                        backgroundColor: '#e7ddcf',
                    }}
                >
                    <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />
                    <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                        <FaMapMarkerAlt size={22} />
                        <p className="text-lg font-bold">{entregas[0].titulo}</p>
                        <p className="text-sm text-white/80">{entregas[0].local}</p>
                        <span className="mt-2 rounded-full border-2 border-white/40 bg-black/30 px-5 py-2 text-xs tracking-[0.16em] backdrop-blur-[10px] transition-colors group-hover:bg-white/20">
                            VER GALERIA DE ENTREGAS
                        </span>
                    </div>
                </button>

            </div>

            {galleryOpen && (
                <BentoGalleryModal onClose={() => setGalleryOpen(false)} />
            )}
        </section>
    )
}
