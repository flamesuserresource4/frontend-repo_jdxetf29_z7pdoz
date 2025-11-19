import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Story from './components/Story'
import Menu from './components/Menu'
import Events from './components/Events'
import Reserve from './components/Reserve'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-amber-100">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-20 pointer-events-none" />
      <Navbar />
      <main className="relative pt-28">
        <Hero />
        <Story />
        <Menu />
        <Events />
        <Reserve />
        <footer className="border-t border-amber-500/20 py-10">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-amber-200/80">© {new Date().getFullYear()} Didgori • Crafted in Tbilisi</p>
            <a href="/test" className="text-amber-300/80 hover:text-amber-200">System status</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
