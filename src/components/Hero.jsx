import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80 bg-white/10 backdrop-blur px-3 py-1 rounded-full">
          30-Day Microlearning Challenges
        </span>
        <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight text-white drop-shadow-md">
          Learn smarter in 5–10 minutes a day
        </h1>
        <p className="mt-4 max-w-2xl text-white/90 text-lg">
          Bite-sized lessons, daily tasks, and built-in gamification to keep you moving. Focused tracks in AI, design, marketing, and productivity.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#challenges" className="inline-flex justify-center rounded-md bg-white/90 hover:bg-white text-gray-900 font-semibold px-6 py-3 transition">Browse Challenges</a>
          <a href="/test" className="inline-flex justify-center rounded-md bg-black/50 hover:bg-black/60 text-white font-semibold px-6 py-3 transition">Backend Status</a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]" />
    </section>
  )
}
