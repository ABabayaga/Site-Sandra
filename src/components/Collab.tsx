import { useState, useEffect } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { useFocusTrap } from '../hooks/useFocusTrap'

type Obra = {
    imagem: string
    titulo?: string
}

type Collab = {
    nome: string
    imagem: string
    descricao: string
    obras: Obra[]
}

const collabs: Collab[] = [
    {
        nome: 'Dayvison Rodrigues',
        imagem: '/dr/dr1.jpeg',
        descricao: 'A arte de Dayvison Rodrigues nasce do encontro entre o desenho, o graffiti, a fotografia e a pintura. Em um processo intuitivo, o artista combina texturas, cores e referências da estética urbana para transformar memórias e experiências em narrativas visuais.\n\nSímbolos ligados à força, ao pertencimento e à origem atravessam suas obras, revelando também sua conexão com Mato Grosso do Sul. Como artista convidado da Galeria Sandra Novas, Dayvison apresenta trabalhos que ampliam o diálogo entre diferentes linguagens e convidam o público a descobrir novas perspectivas.',
        // Obras exibidas no modal. Vazio = usa a imagem de capa como único slide.
        obras: [
            { imagem: '/dr/dr1.jpeg' },
            { imagem: '/dr/dr2.jpeg' },
            { imagem: '/dr/dr3.jpeg' },
            { imagem: '/dr/dr4.jpeg' },
        ],
    },
    /* {
        nome: 'NOME DA COLLAB',
        imagem: '/IMAGE 2.png',
        descricao: 'Descrição da collab: parceria, contexto e o que nasceu desse encontro.',
        obras: [],
    },
    {
        nome: 'NOME DA COLLAB',
        imagem: '/IMAGE 3.png',
        descricao: 'Descrição da collab: parceria, contexto e o que nasceu desse encontro.',
        obras: [],
    }, */
]

function getSlides(collab: Collab): Obra[] {
    return collab.obras.length > 0 ? collab.obras : [{ imagem: collab.imagem }]
}

function CollabModal({ collab, onClose }: { collab: Collab; onClose: () => void }) {
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(false)
    const slides = getSlides(collab)
    const total = slides.length
    const containerRef = useFocusTrap<HTMLDivElement>()

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
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Collab — ${collab.nome}`}
            tabIndex={-1}
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300 outline-none ${visible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleClose}
        >
            <div
                className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-[#08284E] shadow-2xl md:max-h-[85vh] md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Galeria de obras */}
                <div className="relative aspect-4/3 w-full shrink-0 bg-black md:aspect-auto md:h-auto md:w-1/2">
                    {slides.map((obra, i) => (
                        <img
                            key={obra.imagem}
                            src={obra.imagem}
                            alt={obra.titulo ?? collab.nome}
                            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                        />
                    ))}

                    {total > 1 && (
                        <>
                            {/* Prev */}
                            <button
                                onClick={prevSlide}
                                aria-label="Obra anterior"
                                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/20"
                            >
                                <FaChevronLeft size={16} />
                            </button>

                            {/* Next */}
                            <button
                                onClick={nextSlide}
                                aria-label="Próxima obra"
                                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/30 text-white transition-colors hover:bg-white/20"
                            >
                                <FaChevronRight size={16} />
                            </button>

                            {/* Dots */}
                            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                                {slides.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrent(i)}
                                        aria-label={`Ir para imagem ${i + 1}`}
                                        aria-current={i === current}
                                        className="-m-2.5 flex items-center justify-center p-2.5"
                                    >
                                        <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/40'}`} />
                                    </button>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Título da obra (só aparece se a obra tiver título) */}
                    {slides[current].titulo && (
                        <p className="absolute bottom-4 left-4 z-10 rounded-lg bg-black/45 px-3 py-1 text-[10px] tracking-[0.18em] text-white/80 backdrop-blur-sm">
                            {slides[current].titulo}
                        </p>
                    )}
                </div>

                {/* Descrição completa */}
                <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-8 md:py-10">
                    <p className="mb-2 text-[10px] tracking-[0.22em] text-white/50">COLLAB</p>
                    <h3 className="mb-5 text-2xl font-serif text-white sm:text-3xl">{collab.nome}</h3>
                    <p className="text-sm leading-relaxed whitespace-pre-line text-white/70">
                        {collab.descricao}
                    </p>
                </div>
            </div>

            {/* Botão fechar */}
            <button
                onClick={handleClose}
                aria-label="Fechar"
                className="absolute top-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10"
            >
                <FaTimes size={16} />
            </button>
        </div>
    )
}

export default function Collab() {
    const [modalCollab, setModalCollab] = useState<Collab | null>(null)

    return (
        <section id="collabs" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-3 sm:px-6 sm:py-0 sm:pb-10">
            <div className="max-w-6xl mx-auto">

                {/* Topo: título */}
                <div className="mb-6 pt-2 flex flex-col items-center gap-4 sm:mb-2 sm:pt-10">
                    <div className="w-full max-w-2xl rounded-2xl px-4 py-2 text-center sm:px-12 sm:py-6">
                        <h2 className="mb-3 text-3xl font-serif text-[#1a1a1a] sm:text-4xl">— Diálogos / Artistas Convidados —</h2>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Encontros que ampliam a obra: parcerias onde arte, marca e ambiente se atravessam
                        </p>
                    </div>
                </div>

                {/* Linhas de collabs */}
                <div className="flex flex-col gap-4 sm:gap-6">
                    {collabs.map((c) => (
                        <div
                            key={c.nome}
                            className="flex flex-col gap-4 rounded-2xl bg-[#08284E] px-4 py-4 shadow-sm sm:px-6 sm:py-5 md:flex-row md:items-center md:gap-6"
                        >
                            {/* Imagem */}
                            <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                                <img
                                    src={c.imagem}
                                    alt={c.nome}
                                    loading="lazy"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Nome */}
                            <p className="w-full shrink-0 text-xs font-bold uppercase tracking-[0.15em] text-white md:w-36">
                                {c.nome}
                            </p>

                            {/* Descrição resumida — texto completo fica no modal */}
                            <p className="flex-1 text-sm leading-relaxed text-white/70 line-clamp-2">
                                {c.descricao}
                            </p>

                            {/* Botão */}
                            <div className="shrink-0 md:self-center">
                                <button
                                    onClick={() => setModalCollab(c)}
                                    className="flex h-11 w-full items-center justify-center rounded-lg bg-[#C9A96E] px-5 text-[10px] font-bold tracking-[0.15em] whitespace-nowrap text-[#08284E] transition-colors hover:bg-[#b8956a] md:w-auto md:px-6"
                                >
                                    SAIBA MAIS
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Modal */}
            {modalCollab !== null && (
                <CollabModal
                    collab={modalCollab}
                    onClose={() => setModalCollab(null)}
                />
            )}
        </section>
    )
}
