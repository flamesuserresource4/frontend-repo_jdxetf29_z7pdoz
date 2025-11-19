function Events() {
  const events = [
    { title: 'Didgori Night', date: 'Every Friday', desc: 'Live folk music, fire-grilled specials, and mead flights.' },
    { title: 'Warrior’s Trivia', date: 'Wednesdays', desc: 'History quiz night with prizes and special pours.' },
    { title: 'Feast of St. George', date: 'Seasonal', desc: 'Grand banquet with traditional dances and toasts.' },
  ]

  return (
    <section id="events" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(245,158,11,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-100">Events</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <div key={e.title} className="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6">
              <p className="text-amber-400 text-sm">{e.date}</p>
              <h3 className="text-xl font-semibold text-amber-100 mt-1">{e.title}</h3>
              <p className="text-amber-100/80 mt-2">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
