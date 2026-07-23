const posts = [
    { imagem: '/ins1.png' },
    { imagem: '/ins2.png' },
    { imagem: '/ins3.png' },
    { imagem: '/ins10.png' },
    { imagem: '/ins5.png' },
    { imagem: '/ins6.png' },
    { imagem: '/ins7.png' },
]

const INSTAGRAM_URL = 'https://www.instagram.com/galeriasandranovas/'

function PostImage({ post, className, delay }: { post: { imagem: string }; className: string; delay: string }) {
    return (
        <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`group animate-float-up absolute block aspect-square overflow-hidden rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 ${className}`}
            style={{ animationDelay: delay }}
        >
            <img
                src={post.imagem}
                alt="Publicação no Instagram da Galeria Sandra Novas"
                className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <img
                    src="/insta.png"
                    alt=""
                    className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
        </a>
    )
}

export default function Instagram() {
    return (
        <section id="instagram" style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-10 sm:px-6 sm:py-0 sm:pb-14">
            <div className="max-w-6xl mx-auto">

                {/* Topo: título + handle */}
                <div className="mb-10 flex flex-col items-center gap-3 sm:mb-2">
                    <h2 className="text-2xl font-serif text-[#1a1a1a] sm:text-3xl">— No Instagram —</h2>
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#08284E]/70 hover:text-[#C9A96E] transition-colors"
                    >
                        <img src="/insta.png" alt="Instagram" className="h-4 w-4" />
                        <span className="text-xs tracking-[0.15em]">@galeriasandranovas</span>
                    </a>
                </div>

                {/* Grid de posts — mobile */}
                <div className="grid grid-cols-2 gap-3 sm:hidden">
                    {posts.map((post, i) => (
                        <a
                            key={i}
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block aspect-square overflow-hidden rounded-xl shadow-sm"
                        >
                            <img
                                src={post.imagem}
                                alt="Publicação no Instagram da Galeria Sandra Novas"
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                                <img
                                    src="/insta.png"
                                    alt=""
                                    className="h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Collage flutuante — tablet/desktop */}
                <div className="relative hidden h-[460px] sm:block sm:h-[480px] md:h-[560px] lg:h-[400px]">
                    {/* Central */}
                    <PostImage post={posts[0]} className="left-1/2 top-1/2 z-20 w-40 -translate-x-1/2 -translate-y-1/2 sm:w-48 md:w-64 lg:w-72" delay="0s" />
                    {/* Superior esquerda */}
                    <PostImage post={posts[1]} className="left-[20%] top-[10%] z-10 w-28 sm:w-32 md:w-44 lg:w-52" delay="-1.2s" />
                    {/* Superior direita */}
                    <PostImage post={posts[2]} className="right-[22%] top-[6%] z-10 w-24 sm:w-28 md:w-40 lg:w-48" delay="-2.5s" />
                    {/* Inferior direita */}
                    <PostImage post={posts[3]} className="right-[18%] bottom-[10%] z-30 w-32 sm:w-36 md:w-48 lg:w-56" delay="-3.5s" />
                    {/* Extremo direito */}
                    <PostImage post={posts[4]} className="right-[2%] top-1/2 z-10 w-24 -translate-y-[55%] sm:w-28 md:w-40 lg:w-48" delay="-4.8s" />
                    {/* Inferior esquerda */}
                    <PostImage post={posts[5]} className="left-[16%] bottom-[6%] z-30 w-28 sm:w-32 md:w-44 lg:w-52" delay="-5.2s" />
                    {/* Extremo esquerdo */}
                    <PostImage post={posts[6]} className="left-[3%] top-[28%] z-10 w-24 sm:w-28 md:w-40 lg:w-48" delay="-6s" />
                </div>

                {/* CTA */}
                <div className="mt-10 flex justify-center sm:mt-2">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-lg bg-[#08284E] px-6 py-3 text-[10px] font-bold tracking-[0.15em] text-white transition-colors hover:bg-[#0d3a6b]"
                    >
                        SEGUIR NO INSTAGRAM
                    </a>
                </div>

            </div>
        </section>
    )
}
