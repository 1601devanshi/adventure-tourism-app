export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div>

          <h1 className="text-5xl font-extrabold text-white md:text-7xl lg:text-8xl">
            Your Adventure Awaits
          </h1>

          <p className="mt-6 text-xl text-white md:text-2xl">
            Where Will Your Curiosity Take You?
          </p>

          <button className="mt-8 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-red-700">
            Explore Adventures
          </button>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
        ↓
      </div>

    </section>
  );
}