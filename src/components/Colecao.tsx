import { useState, useEffect } from 'react'
import TiltedCard from './TiltedCard'

type Obra = {
    titulo: string
    dimensoes: string
    imagens: string[]
    frase: string
}

type Serie = {
    nome: string
    obras: Obra[]
}

const series: Serie[] = [
    {
        nome: 'SÉRIE ESTADO DE PRESENÇA',
        obras: [
            { titulo: 'ENERGIA VITAL', dimensoes: '1,20 x 1,00', imagens: ['/estadodepresenca/ep1.jpeg'], frase: 'Movimentos circulares constroem um fluxo contínuo, evocando a pulsação e a renovação constante da vida.' },
            { titulo: 'ENTRE CAMADAS', dimensoes: '0,20 x 0,30', imagens: ['/estadodepresenca/ep2.jpeg'], frase: 'Há um fogo que não destrói, apenas transforma. A matéria se expande em camadas vibrantes, como se a luz brotasse de dentro da própria tela. As texturas preservam a memória do gesto, enquanto as cores aquecem o olhar e despertam sensações.' },
            { titulo: 'CONFLUÊNCIA', dimensoes: '1,80 x 0,30', imagens: ['/estadodepresenca/ep4.jpeg'], frase: 'Em três movimentos, a obra revela uma mesma energia em constante transformação. A composição encontra o equilíbrio: contrastes e encontros na mesma energia.' },
            { titulo: 'MOVIMENTO E FLUXO', dimensoes: '1,20 x 1,00', imagens: ['/estadodepresenca/ep5.jpeg'], frase: 'Gestos livres e espontâneos registram o fluxo do tempo em camadas de movimento e energia.' },
            { titulo: 'ENTRE SINAIS', dimensoes: '0,97 x 0,80', imagens: ['/estadodepresenca/ep55.jpeg'], frase: 'O que nos atravessa raramente vem de forma direta.' },
        ],
    },
    {
        nome: 'SÉRIE FORÇAS PRIMORDIAIS',
        obras: [
            { titulo: 'AURORA', dimensoes: '0,50 x 0,80', imagens: ['/forcasprimordiais/fp1.jpeg'], frase: 'Começo, surgimento, luz que rompe.' },
            { titulo: 'ÂMAGO', dimensoes: '0,30 x 0,30', imagens: ['/forcasprimordiais/fp2.jpeg'], frase: 'Duas forças coexistem em tensão. Não se anulam nem se dissolvem; encontram-se. A obra pulsa no limite entre choque e equilíbrio, onde o contraste não rompe, mas sustenta a própria existência.' },
            { titulo: 'ENERGIA INCANDESCENTE', dimensoes: '0,80 x 0,80', imagens: ['/forcasprimordiais/fp3.jpeg'], frase: 'Uma composição densa e vibrante que revela uma energia em combustão, intensa e expansiva.' },
        ],
    },
    {
        nome: 'SÉRIE RAÍZES',
        obras: [
            { titulo: 'GÊNESE', dimensoes: '0,30 x 0,30', imagens: ['/raizes/ra2.jpeg'], frase: 'Toda criação começa em movimento.' },
            { titulo: 'GUARDIÃO', dimensoes: '1,20 x 1,00', imagens: ['/raizes/ra1.jpeg'], frase: 'Inspirada em símbolos ancestrais e elementos orgânicos da terra, a obra constrói um campo de proteção e energia vital. O centro luminoso é cercado por formas que lembram sementes, raízes e adornos ritualísticos, criando uma composição que fala de origem, força e permanência.' },
        ],
    },
    {
        nome: 'SÉRIE MAR',
        obras: [
            { titulo: 'PROFUNDIDADE AZUL', dimensoes: '2,00 x 1,20', imagens: ['/mar/ma2.jpeg'], frase: 'Camadas de azul constroem uma imersão silenciosa, onde profundidade e contemplação se encontram.' },
            { titulo: 'MARÉ INTERNA', dimensoes: '0,50 x 0,80', imagens: ['/mar/ma1.jpeg'], frase: 'Entre correntes silenciosas e camadas profundas, a obra revela movimentos internos que nunca permanecem imóveis.' },
        ],
    },
]

type Slide = {
    imagem: string
    titulo: string
    dimensoes: string
    frase: string
}

function getSlides(serie: Serie): Slide[] {
    return serie.obras.flatMap((obra) =>
        obra.imagens.map((imagem) => ({ imagem, titulo: obra.titulo, dimensoes: obra.dimensoes, frase: obra.frase }))
    )
}

function SlideshowModal({ serie, onClose }: { serie: Serie; onClose: () => void }) {
    const [current, setCurrent] = useState(0)
    const [visible, setVisible] = useState(false)
    const slides = getSlides(serie)
    const total = slides.length

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

    const nextSlide = () => setCurrent((prev) => (prev + 1) % total)
    const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total)

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
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 flex flex-col items-center pb-16 transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-3 px-8 pt-14">
                        {/* Frase acima da obra (só mobile — no desktop vira overlay) */}
                        <p className="max-h-[22vh] w-[85vw] shrink-0 overflow-y-auto rounded-xl bg-white/10 px-4 py-3 text-left text-xs font-serif italic leading-relaxed text-white/70 backdrop-blur-sm sm:hidden">
                            {slide.frase}
                        </p>
                        <TiltedCard
                            imageSrc={slide.imagem}
                            altText={slide.titulo}
                            captionText={slide.titulo}
                            containerHeight="auto"
                            containerWidth="auto"
                            fitImage
                            imageClassName="max-h-[70vh] max-w-[85vw] object-contain rounded-[15px] drop-shadow-2xl"
                            scaleOnHover={1.04}
                            rotateAmplitude={9}
                            showMobileWarning={false}
                            displayOverlayContent
                            overlayContent={
                                /* Frase sobre a obra */
                                <p className="absolute left-5 top-5 hidden max-h-[calc(100%-2.5rem)] max-w-[min(19rem,60%)] overflow-y-auto rounded-xl bg-black/35 px-3 py-2 text-left text-[13px] font-serif italic leading-relaxed text-white/75 backdrop-blur-md sm:block">
                                    {slide.frase}
                                </p>
                            }
                        />
                    </div>
                    {/* Cartão de legenda */}
                    <div className="mt-4 w-full max-w-xl shrink-0 px-6">
                        <div className="max-h-[26vh] overflow-y-auto rounded-2xl bg-white/10 px-6 py-4 text-center backdrop-blur-sm">
                            <p className="text-white/50 text-[10px] tracking-[0.22em] mb-1">{serie.nome}</p>
                            <p className="text-white text-lg font-serif tracking-wide">{slide.titulo}</p>
                            <p className="text-white/40 text-xs mt-1 tracking-widest">{slide.dimensoes}</p>
                        </div>
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
                0{current + 1} / 0{total}
            </div>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {slides.map((_, i) => (
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

function CardObra({ serie, onVerMais }: { serie: Serie; onVerMais: () => void }) {
    const slides = getSlides(serie)
    const capa = slides[0]?.imagem
    const totalObras = serie.obras.length

    return (
        <div className="group relative overflow-hidden rounded-2xl shadow-sm cursor-pointer">
            {capa ? (
                <img
                    src={capa}
                    alt={serie.nome}
                    className="h-72 w-full object-cover sm:h-80 md:h-96"
                />
            ) : (
                <div className="h-72 w-full sm:h-80 md:h-96" style={{ backgroundColor: '#08284E' }} />
            )}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2">
                <div className="max-w-[75%] rounded-tr-2xl bg-[#08284E] px-4 py-3 sm:px-5 sm:py-4">
                    <p className="text-white text-xs font-bold tracking-[0.15em] mb-1">{serie.nome}</p>
                    <p className="text-[10px] text-white/70 tracking-[0.18em] sm:tracking-widest">
                        {totalObras} {totalObras === 1 ? 'OBRA' : 'OBRAS'}
                    </p>
                </div>
                {slides.length > 0 && (
                    <button
                        onClick={onVerMais}
                        className="mb-3 mr-3 shrink-0 rounded-full bg-blue-700/50 border border-white/30 px-3 py-1 text-[10px] tracking-[0.16em] text-white transition-colors hover:bg-white/30 sm:mb-4 sm:mr-4 sm:px-4 sm:tracking-widest"
                    >
                        VER MAIS
                    </button>
                )}
            </div>
        </div>
    )
}

export default function Colecao() {
    const [modalSerie, setModalSerie] = useState<Serie | null>(null)

    return (
        <section id='colecoes' style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-10 sm:px-6 sm:py-0">
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
                        <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— Explorar a coleção —</h2>
                    </div>
                </div>

                {/* Grid 4 cards */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
                    {series.map((serie) => (
                        <CardObra key={serie.nome} serie={serie} onVerMais={() => setModalSerie(serie)} />
                    ))}
                </div>

            </div>

            {/* Modal Slideshow */}
            {modalSerie !== null && (
                <SlideshowModal
                    serie={modalSerie}
                    onClose={() => setModalSerie(null)}
                />
            )}
        </section>
    )
}
