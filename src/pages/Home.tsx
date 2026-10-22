import type { NavigateFn } from '../types'
import { PLANETS, PERFUMES } from '../data'
import StarField from '../components/StarField'

export default function Home({ navigate }: { navigate: NavigateFn }) {
  const featured = PERFUMES[0]

  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />

      {/* Nav */}
      <nav
        className="relative z-10 flex items-center justify-between px-8 py-5"
        style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}
      >
        <button
          onClick={() => navigate('home')}
          className="font-display text-xl tracking-[0.25em] transition-opacity hover:opacity-80"
          style={{ color: '#D4AF37' }}
        >
          CELESTIA
        </button>
        <div className="hidden md:flex gap-8 text-sm" style={{ color: '#888' }}>
          {PLANETS.slice(0, 4).map(p => (
            <button
              key={p.id}
              onClick={() => navigate('planet', { planet: p.name })}
              className="hover:text-snow transition-colors"
              style={{ color: '#888' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F7')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888')}
            >
              {p.name}
            </button>
          ))}
        </div>
        <button
          onClick={() => navigate('results')}
          className="text-xs tracking-widest uppercase px-5 py-2 transition-all hover:opacity-90"
          style={{
            border: '1px solid rgba(212,175,55,0.5)',
            color: '#D4AF37',
            fontFamily: 'Cinzel, serif',
          }}
        >
          My Chart
        </button>
      </nav>

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center text-center px-6 pt-20 pb-28">
        <div
          className="text-xs tracking-[0.55em] uppercase mb-6"
          style={{ color: '#D4AF37', letterSpacing: '0.5em' }}
        >
          Astrology & Fragrance
        </div>

        <h1 className="font-display mb-6 leading-tight" style={{ fontSize: 'clamp(3rem, 9vw, 7rem)', color: '#F5F5F7' }}>
          Your Cosmic<br />
          <span style={{ color: '#D4AF37' }}>Scent Awaits</span>
        </h1>

        <p className="text-lg leading-relaxed mb-12 max-w-md" style={{ color: '#888' }}>
          Discover perfumes chosen by the stars themselves.<br />
          Your natal chart reveals the fragrance you were born to wear.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={() => navigate('form')}
            className="gold-glow px-10 py-4 font-display text-xs tracking-[0.25em] uppercase font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
            style={{ background: '#D4AF37', color: '#0B0C15', letterSpacing: '0.2em' }}
          >
            Find Your Signature Scent
          </button>
          <button
            onClick={() => navigate('planet', { planet: 'Venus' })}
            className="px-8 py-4 text-xs tracking-[0.2em] uppercase transition-all hover:bg-gold/10"
            style={{
              border: '1px solid rgba(212,175,55,0.45)',
              color: '#D4AF37',
              fontFamily: 'Cinzel, serif',
              letterSpacing: '0.2em',
            }}
          >
            Explore by Planet
          </button>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2" style={{ color: 'rgba(136,136,136,0.5)' }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)' }}
          />
        </div>
      </section>

      {/* Planet Cards */}
      <section className="relative z-10 px-6 pb-24">
        <h2
          className="font-display text-xs tracking-[0.45em] uppercase text-center mb-12"
          style={{ color: 'rgba(212,175,55,0.55)' }}
        >
          Explore by Planetary Energy
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {PLANETS.map(planet => (
            <button
              key={planet.id}
              onClick={() => navigate('planet', { planet: planet.name })}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid transparent' }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${planet.color}40`
                e.currentTarget.style.background = 'rgba(26,27,46,0.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid transparent'
                e.currentTarget.style.background = ''
              }}
            >
              <div
                className="w-14 h-14 rounded-full transition-all duration-300 group-hover:scale-110"
                style={{
                  background: planet.gradient,
                  boxShadow: `0 0 18px ${planet.glowColor}, inset -6px -6px 16px rgba(0,0,0,0.35)`,
                }}
              />
              <div className="font-display text-xs tracking-widest" style={{ color: '#F5F5F7' }}>
                {planet.name}
              </div>
              <div className="text-xs text-center leading-tight" style={{ color: '#888' }}>
                {planet.tagline}
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Featured Perfume */}
      <section className="relative z-10 px-6 pb-28">
        <h2
          className="font-display text-xs tracking-[0.45em] uppercase text-center mb-10"
          style={{ color: 'rgba(212,175,55,0.55)' }}
        >
          ✦ Today's Celestial Selection
        </h2>

        <div
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden grid md:grid-cols-2"
          style={{
            background: '#1A1B2E',
            border: '1px solid rgba(212,175,55,0.2)',
          }}
        >
          <div
            className="relative overflow-hidden"
            style={{ minHeight: '420px', background: '#0F1020' }}
          >
            <img
              src={featured.imageUrl}
              alt={featured.name}
              className="w-full h-full object-cover"
              style={{ minHeight: '420px' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(105deg, transparent 50%, #1A1B2E)',
              }}
            />
          </div>

          <div className="flex flex-col justify-center p-10 gap-4">
            <div className="text-xs tracking-[0.4em] uppercase" style={{ color: '#D4AF37' }}>
              ✦ Perfume of the Day
            </div>
            <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>
              {featured.brand}
            </div>
            <h3 className="font-display text-3xl" style={{ color: '#F5F5F7' }}>
              {featured.name}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#888' }}>
              {featured.description}
            </p>
            <p
              className="text-sm leading-relaxed border-l-2 pl-4"
              style={{ color: '#D4AF37', borderColor: '#D4AF37', fontStyle: 'italic' }}
            >
              "Venus transits Libra today — a moment of heightened beauty and romance. This scent perfectly channels this transit's magnetic energy."
            </p>
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => navigate('product', { productId: featured.id })}
                className="px-7 py-3 text-xs tracking-widest uppercase font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: '#D4AF37',
                  color: '#0B0C15',
                  fontFamily: 'Cinzel, serif',
                }}
              >
                Shop Now
              </button>
              <div className="font-display text-xl" style={{ color: '#D4AF37' }}>
                {featured.price.toLocaleString('ru-RU')} ₽
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 px-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
  <div className="font-display text-sm tracking-[0.3em] mb-5" style={{ color: '#D4AF37' }}>CELESTIA</div>
  <div className="flex justify-center gap-8 text-xs" style={{ color: '#888' }}>
    <button className="uppercase tracking-widest" onClick={() => navigate('home')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Home</button>
    <button className="uppercase tracking-widest" onClick={() => navigate('allPlanets')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>All Planets</button>
    <button className="uppercase tracking-widest" onClick={() => navigate('about')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>About</button>
    <button className="uppercase tracking-widest" onClick={() => navigate('contact')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Contact</button>
  </div>
  <div className="text-xs mt-4" style={{ color: 'rgba(136,136,136,0.35)' }}>© 2026 Celestia. The stars guide, you decide.</div>
</footer>
    </div>
  )
}
