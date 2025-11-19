function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-950/80 to-stone-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(245,158,11,0.25),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-200 px-3 py-1 rounded-full text-sm mb-6">
            <span>Anno 1121 • Battle of Didgori</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-amber-100 leading-tight tracking-tight">
            Feast like warriors of King David IV
          </h1>
          <p className="mt-6 text-lg md:text-xl text-amber-100/80 max-w-2xl">
            A medieval restaurant-bar honoring the Georgian victory at Didgori. Rustic recipes, smoky grills, and mead flowing like legends.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#reserve" className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-amber-50 font-semibold shadow-lg shadow-amber-900/30 border border-amber-400/30">Reserve a Table</a>
            <a href="#menu" className="px-6 py-3 rounded-xl bg-stone-800/60 hover:bg-stone-800 text-amber-100 font-semibold border border-amber-400/20">View the Feast</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
