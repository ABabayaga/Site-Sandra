export default function Hero() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/video2.mp4" type="video/mp4" />
            </video>
        </section>
    )
}