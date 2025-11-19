function Menu() {
  const items = [
    { name: 'Khinkali of the Highlands', desc: 'Hand-twisted dumplings with spiced beef & herbs', price: 12 },
    { name: 'Didgori Roast', desc: 'Firewood-roasted lamb with pomegranate glaze', price: 22 },
    { name: 'Clay-Oven Shoti', desc: 'Crisp Georgian bread from a tone oven', price: 6 },
    { name: 'Warrior’s Platter', desc: 'Assortment of cured meats, cheeses, pickles, and herbs', price: 28 },
  ]

  const drinks = [
    { name: 'Mead of Kutaisi', desc: 'Honey wine, floral and bold', price: 10 },
    { name: 'Kindzmarauli', desc: 'Semi-sweet red wine, velvety finish', price: 11 },
    { name: 'Chacha Fire', desc: 'Grape brandy with a warrior’s kick', price: 9 },
  ]

  return (
    <section id="menu" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-100">The Feast</h2>
        <p className="mt-2 text-amber-100/80">A selection from our seasonal board. Full menu available on site.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          <div className="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-amber-200">Victuals</h3>
            <ul className="mt-4 space-y-4">
              {items.map((it) => (
                <li key={it.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-amber-100 font-medium">{it.name}</p>
                    <p className="text-amber-100/70 text-sm">{it.desc}</p>
                  </div>
                  <span className="text-amber-200">${it.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold text-amber-200">Ales & Spirits</h3>
            <ul className="mt-4 space-y-4">
              {drinks.map((it) => (
                <li key={it.name} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-amber-100 font-medium">{it.name}</p>
                    <p className="text-amber-100/70 text-sm">{it.desc}</p>
                  </div>
                  <span className="text-amber-200">${it.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
