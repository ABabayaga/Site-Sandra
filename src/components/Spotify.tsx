export default function Spotify() {
    return (
        <section style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-12 sm:px-6 sm:py-16">
            <div className="max-w-6xl mx-auto text-center mb-4">
                <p className="font-serif italic text-[#2d3a5e] text-lg">
                    O som da Contemplação — ouça a série enquanto navega
                </p>
            </div>
            <div className="max-w-6xl mx-auto flex justify-center">
                <iframe data-testid="embed-iframe" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/5Z0jXU6Jues4cOMIsbcS47?utm_source=generator&si=34f1fd1905054186" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
        </section>
    )
}
