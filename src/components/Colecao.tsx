import TiltedCard from './TiltedCard'

const obras = [
    {
        serie: 'SÉRIE TRANSIÇÕES',
        titulo: 'ENCONTRO DE FORÇAS',
        dimensoes: '2,00 x 2,20',
        imagem: '/colecao/transicoes.jpg',
    },
    {
        serie: 'SÉRIES CICLOS',
        titulo: 'ENERGIA VITAL',
        dimensoes: '1,20 x 1,00',
        imagem: '/colecao/ciclos.jpg',
    },
    {
        serie: 'SÉRIE GOTEJAMENTO',
        titulo: 'MOVIMENTO E FLUXO',
        dimensoes: '1,00 x 1,00',
        imagem: '/colecao/gotejamento.jpg',
    },
    {
        serie: 'SÉRIE INTENSIDADE',
        titulo: 'ENERGIA INCANDESCENTE',
        dimensoes: '0,80 x 0,80',
        imagem: '/colecao/intensidade.jpg',
    },
    {
        serie: 'SÉRIE MAR',
        titulo: 'PROFUNDIDADE AZUL',
        dimensoes: '2,00 x 1,20',
        imagem: '/colecao/mar.jpg',
    },
    {
        serie: 'SÉRIE CONEXÕES',
        titulo: 'RAÍZES INVISÍVEIS',
        dimensoes: '2,00 x 1,20',
        imagem: '/colecao/conexoes.jpg',
    },
]

function CardObra({ serie, titulo, dimensoes, imagem }: typeof obras[0]) {
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-sm group cursor-pointer">
            <img
                src={imagem}
                alt={serie}
                className="w-full h-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#08284E] px-5 py-4">
                <p className="text-white text-xs font-bold tracking-[0.15em] mb-1">{serie}</p>
                <p className="text-white/70 text-[10px] tracking-widest mb-1">{titulo}</p>
                <p className="text-white/50 text-[10px] mb-3">{dimensoes}</p>
                <div className="flex justify-end">
                    <button className="text-[10px] tracking-widest text-white border border-white/40 rounded-full px-4 py-1 hover:bg-white/10 transition-colors">
                        VER MAIS
                    </button>
                </div>
            </div>
        </div>
    )
}

export default function Colecao() {
    return (
        <section style={{ backgroundColor: '#F9F2EC' }} className="py-20 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Topo: logo + título */}
                <div className="flex flex-col items-center gap-4 mb-14">
                    <div className="bg-white rounded-2xl px-16 py-5 text-center shadow-sm">
                        <img src="/logo.png" alt="SN Logo" className="h-12 mx-auto mb-2" />
                        <p className="text-xs tracking-[0.2em] text-[#C9A96E]">GALERIA SANDRA NOVAS</p>
                    </div>
                    <div className="bg-white/60 rounded-2xl px-10 py-3 text-center">
                        <h2 className="text-3xl font-serif text-[#1a1a1a]">Explorar a coleção</h2>
                    </div>
                </div>

                {/* Grid 3x2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-14">
                    {obras.map((obra) => (
                        <CardObra key={obra.serie} {...obra} />
                    ))}
                </div>

                {/* Última linha: imagem grande + card texto */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                    <div className="bg-white rounded-2xl p-10 shadow-sm flex flex-col justify-center gap-6">
                        <div>
                            <p className="text-[#08284E] text-xl font-bold tracking-widest mb-2">COCAR</p>
                            <p className="text-gray-400 text-sm">uga buga uga buga</p>
                        </div>
                        <button className="w-full bg-[#08284E] text-white text-xs font-bold tracking-[0.2em] py-4 rounded-lg hover:bg-[#0a3566] transition-colors">
                            VER MAIS
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
