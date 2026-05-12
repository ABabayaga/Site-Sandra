import TiltedCard from './TiltedCard'

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

function CardObra({ serie, titulo, dimensoes, imagem }: typeof obras[0]) {
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
                <button className="rounded-full border border-white/40 px-3 py-1 text-[10px] tracking-[0.16em] text-white transition-colors hover:bg-white/10 sm:px-4 sm:tracking-widest">
                    VER MAIS
                </button>
            </div>
        </div>
    )
}

export default function Colecao() {
    return (
        <section id='colecoes' style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-16 sm:px-6 sm:py-20">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="mb-10 flex flex-col items-center gap-4 sm:mb-14">
                <div className="text-center">
                        <img src="/logo2.png" alt="SN Logo" className="mx-auto mb-3 h-28 sm:mb-4 sm:h-44" />
                        <div className="flex items-center justify-center gap-3 sm:gap-4">
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                            <p className="text-[10px] tracking-[0.16em] text-[#6e4c0d] sm:text-xs sm:tracking-[0.2em]">GALERIA SANDRA NOVAS</p>
                            <div className="h-px w-10 bg-[#4b3102] opacity-60 sm:w-48" />
                        </div>
                    </div>
                    <div className="rounded-2xl px-4 py-2 text-center sm:px-10 sm:py-3">
                        <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">Explorar a coleção</h2>
                    </div>
                </div>

                {/* Grid 3x2 */}
                <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 sm:mb-14">
                    {obras.map((obra) => (
                        <CardObra key={obra.serie} {...obra} />
                    ))}
                </div>

                {/* Última linha: imagem grande + card texto */}
                <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
                    <TiltedCard
                        imageSrc="/IMAGE 6.png"
                        altText="Cocar"
                        rotateAmplitude={13}
                        scaleOnHover={1.2}
                        containerWidth="100%"
                        containerHeight="400px"
                        imageWidth="100%"
                        imageHeight="400px"
                        showMobileWarning={false}
                        showTooltip={false}
                        displayOverlayContent={false}
                    />

                    <div className="flex flex-col justify-center gap-5 rounded-2xl bg-white p-6 shadow-sm sm:gap-6 sm:p-10">
                        <div>
                            <p className="text-[#08284E] text-xl font-bold tracking-widest mb-2">COCAR</p>
                            <p className="text-gray-400 text-sm">uga buga uga buga</p>
                        </div>
                        <button className="w-full rounded-lg bg-[#08284E] py-3 text-[11px] font-bold tracking-[0.18em] text-white transition-colors hover:bg-[#0a3566] sm:py-4 sm:text-xs sm:tracking-[0.2em]">
                            VER MAIS
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
