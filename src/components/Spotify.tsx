export default function Spotify() {
    return (
        <section style={{ backgroundColor: '#F9F2EC' }} className="px-4 py-12 sm:px-6 sm:py-16">
            <div className="max-w-6xl mx-auto flex justify-center">
                <iframe
                    style={{ borderRadius: '12px', border: 'none' }}
                    src="https://open.spotify.com/embed/playlist/3Z8S6U6xhyXHYuK7II5UcH?utm_source=generator&theme=0&autoplay=1"
                    width="80%"
                    height="152"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </section>
    )
}
