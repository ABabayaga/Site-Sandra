import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { entregas } from '../data/entregas'

export default function Entregas() {
    const capa = entregas[0].imagens[0]

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

                {/* CTA: abre a página de entregas em uma nova aba */}
                <Link
                    to="/entregas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative mx-auto flex h-56 w-full max-w-2xl cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl shadow-sm sm:h-64"
                    style={{
                        backgroundImage: `url('${capa.imagem}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: capa.posicao,
                        backgroundColor: '#e7ddcf',
                    }}
                >
                    <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />
                    <div className="relative z-10 flex flex-col items-center gap-3 text-white">
                        <FaMapMarkerAlt size={22} />
                        <p className="text-lg font-bold">Entregas Realizadas</p>
                        <span className="mt-2 rounded-full border-2 border-white/40 bg-black/30 px-5 py-2 text-xs tracking-[0.16em] backdrop-blur-[10px] transition-colors group-hover:bg-white/20">
                            VER GALERIA DE ENTREGAS
                        </span>
                    </div>
                </Link>

            </div>
        </section>
    )
}
