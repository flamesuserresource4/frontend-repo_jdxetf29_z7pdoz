import { useState } from 'react'

function Reserve() {
  const [form, setForm] = useState({ name: '', date: '', time: '', guests: 2 })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/reserve`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) setStatus('Reservation requested. We will confirm shortly!')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus('Could not reach server')
    }
  }

  return (
    <section id="reserve" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(245,158,11,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-4">
        <div className="bg-stone-900/60 border border-amber-500/20 rounded-2xl p-6 md:p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-100">Reserve</h2>
          <p className="mt-2 text-amber-100/80">Request a table and we will confirm with a herald’s reply.</p>

          <form onSubmit={handleSubmit} className="mt-6 grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-amber-200 mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-stone-800 text-amber-100 border border-amber-500/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-amber-2 00 mb-1">Guests</label>
              <input name="guests" type="number" min="1" value={form.guests} onChange={handleChange} required className="w-full bg-stone-800 text-amber-100 border border-amber-500/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-amber-200 mb-1">Date</label>
              <input name="date" type="date" value={form.date} onChange={handleChange} required className="w-full bg-stone-800 text-amber-100 border border-amber-500/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label className="block text-amber-200 mb-1">Time</label>
              <input name="time" type="time" value={form.time} onChange={handleChange} required className="w-full bg-stone-800 text-amber-100 border border-amber-500/30 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div className="md:col-span-2 flex items-center gap-3">
              <button className="px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-amber-50 font-semibold border border-amber-400/30">Request Table</button>
              {status && <p className="text-amber-200">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Reserve
