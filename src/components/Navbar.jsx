import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="text-amber-100/90 hover:text-amber-200 px-3 py-2 rounded-md transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 backdrop-blur-sm bg-stone-900/60 border border-amber-500/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-block w-9 h-9 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 border border-amber-400/40 shadow-inner flex items-center justify-center">
                <span className="text-amber-100">⚔️</span>
              </span>
              <span className="text-2xl font-bold tracking-wide text-amber-100 font-display">Didgori</span>
            </a>

            <nav className="hidden md:flex items-center gap-2 font-medium">
              {navLink('#story', 'Legend')}
              {navLink('#menu', 'Feast')}
              {navLink('#events', 'Events')}
              {navLink('#reserve', 'Reserve')}
            </nav>

            <button
              className="md:hidden text-amber-100/90 hover:text-amber-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? '✖' : '☰'}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-amber-500/20 px-4 py-2 space-y-1">
              <div className="flex flex-col">
                {navLink('#story', 'Legend')}
                {navLink('#menu', 'Feast')}
                {navLink('#events', 'Events')}
                {navLink('#reserve', 'Reserve')}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
