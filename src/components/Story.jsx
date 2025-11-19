function Story() {
  return (
    <section id="story" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,158,11,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-amber-100">Legend of Didgori</h2>
            <p className="mt-4 text-amber-100/80 leading-relaxed">
              In 1121, King David IV — the Builder — led Georgian forces to a decisive victory at Didgori.
              Our house honors this triumph with fire-kissed dishes, clay oven breads, and spirits inspired by the highlands.
            </p>
            <p className="mt-4 text-amber-100/80 leading-relaxed">
              Expect candlelit tables, wrought-iron accents, and live panduri and duduk on select nights.
              Raise a horn of mead to courage and hospitality.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/20 shadow-xl shadow-stone-900/50">
              <img
                src="https://images.unsplash.com/photo-1528909890071-7ea1cbd9a585?q=80&w=1974&auto=format&fit=crop"
                alt="Medieval feast"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-stone-900/80 border border-amber-500/20 rounded-xl p-4 text-amber-200 text-sm backdrop-blur">
              "Glory to David, sword to the brave" — Georgian toast
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
