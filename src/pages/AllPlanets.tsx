import type { NavigateFn } from '../types'
import { PLANETS } from '../data'
import StarField from '../components/StarField'

export default function AllPlanetsPage({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>All Planets</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>
      <header className="relative z-10 text-center px-8 pt-16 pb-14">
        <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#D4AF37' }}>✦ Celestial Catalog</div>
        <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#F5F5F7' }}>All Planets</h1>
        <p className="text-sm" style={{ color: '#888' }}>Explore fragrances aligned with each celestial body</p>
      </header>
      <main className="relative z-10 px-8 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLANETS.map((planet) => (
            <button
              key={planet.id}
              onClick={() => navigate('planet', { planet: planet.name })}
              className="group rounded-2xl p-8 text-left transition-all hover:-translate-y-1"
              style={{ background: '#1A1B2E', border: `1px solid ${planet.color}30` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${planet.color}80`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = `${planet.color}30`)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full" style={{ background: planet.gradient, boxShadow: `0 0 30px ${planet.glowColor}` }} />
                <div>
                  <div className="font-display text-2xl" style={{ color: '#F5F5F7' }}>{planet.name}</div>
                  <div className="text-xs uppercase tracking-widest" style={{ color: planet.color }}>{planet.tagline}</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{planet.description}</p>
              <div className="mt-4 text-xs uppercase tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>Explore Scents →</div>
            </button>
          ))}
        </div>
      </main>
      <footer className="relative z-10 text-center py-10 px-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="font-display text-sm tracking-[0.3em] mb-5" style={{ color: '#D4AF37' }}>CELESTIA</div>
        <div className="flex justify-center gap-8 text-xs" style={{ color: '#888' }}>
          <button className="uppercase tracking-widest" onClick={() => navigate('home')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Home</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('allPlanets')} style={{ color: '#D4AF37' }}>All Planets</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('about')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>About</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('contact')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Contact</button>
        </div>
        <div className="text-xs mt-4" style={{ color: 'rgba(136,136,136,0.35)' }}>© 2026 Celestia. The stars guide, you decide.</div>
      </footer>
    </div>
  )
}