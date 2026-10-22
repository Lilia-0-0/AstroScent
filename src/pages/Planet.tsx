import { useState } from 'react'
import type { NavigateFn } from '../types'
import { PLANETS, PERFUMES } from '../data'
import StarField from '../components/StarField'

const FILTERS = ['All Scents', 'Floral', 'Sweet & Gourmand', 'Musky & Sensual', 'For Romance', 'For Self-Love']

export default function PlanetPage({ planet, navigate }: { planet: string; navigate: NavigateFn }) {
  const [activeFilter, setActiveFilter] = useState('All Scents')

  const planetData = PLANETS.find(p => p.name === planet) ?? PLANETS[2]
  const allPerfumes = PERFUMES.filter(p => p.planet === planet)
  const shown = activeFilter === 'All Scents'
    ? allPerfumes
    : allPerfumes.filter(p => p.categories.includes(activeFilter))

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
        <div className="flex items-center gap-3 text-xs" style={{ color: '#888' }}>
          <button onClick={() => navigate('home')} className="hover:text-snow transition-colors"
            onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F7')}
            onMouseLeave={e => (e.currentTarget.style.color = '#888')}>
            Home
          </button>
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>›</span>
          <span style={{ color: '#F5F5F7' }}>{planet}</span>
        </div>
        <button
          onClick={() => navigate('results')}
          className="text-xs tracking-widest uppercase px-5 py-2 transition-all hover:opacity-90"
          style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}
        >
          My Chart
        </button>
      </nav>

      {/* Planet Hero */}
      <header
        className="relative z-10 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, #0B0C15 0%, ${planetData.color}18 50%, #0B0C15 100%)`,
          borderBottom: `1px solid ${planetData.color}25`,
        }}
      >
        <div className="max-w-6xl mx-auto px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="font-display text-xs tracking-[0.5em] uppercase mb-4"
              style={{ color: planetData.color }}
            >
              {planetData.symbol} &nbsp; Planetary Catalog
            </div>
            <h1
              className="font-display mb-4 leading-none"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#F5F5F7' }}
            >
              {planet.toUpperCase()}
            </h1>
            <p className="text-sm tracking-widest uppercase mb-5" style={{ color: planetData.color }}>
              {planetData.tagline}
            </p>
            <p className="leading-relaxed max-w-md" style={{ color: '#888', lineHeight: 1.8 }}>
              {planetData.description} These fragrances have been chosen to resonate with {planet}'s celestial vibration and enhance the qualities this planet bestows.
            </p>
          </div>

          {/* Planet Sphere */}
          <div className="flex justify-center">
            <div className="relative float-anim">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(circle, ${planetData.color}35 0%, transparent 70%)`,
                  transform: 'scale(1.6)',
                }}
              />
              <div
                className="w-48 h-48 md:w-64 md:h-64 rounded-full relative"
                style={{
                  background: planetData.gradient,
                  boxShadow: `0 0 60px ${planetData.glowColor}, 0 0 120px ${planetData.color}22, inset -20px -20px 50px rgba(0,0,0,0.45)`,
                }}
              >
                {/* Highlight */}
                <div
                  className="absolute rounded-full"
                  style={{
                    top: '18%', left: '20%',
                    width: '30%', height: '20%',
                    background: 'rgba(255,255,255,0.22)',
                    filter: 'blur(6px)',
                    transform: 'rotate(-30deg)',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="relative z-10 px-8 py-6">
        <div className="max-w-6xl mx-auto flex gap-2 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-4 py-2 text-xs tracking-wider uppercase transition-all rounded-full"
              style={{
                background: activeFilter === f ? planetData.color : 'transparent',
                color: activeFilter === f ? '#0B0C15' : '#888',
                border: `1px solid ${activeFilter === f ? planetData.color : 'rgba(255,255,255,0.15)'}`,
                fontFamily: 'Cinzel, serif',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <main className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          {shown.length === 0 ? (
            <div className="text-center py-24 text-muted">No scents match this filter.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {shown.map(p => (
                <div
                  key={p.id}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: '#1A1B2E',
                    border: '1px solid rgba(212,175,55,0.15)',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${planetData.color}60`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)')}
                  onClick={() => navigate('product', { productId: p.id })}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ height: '260px', background: '#0F1020' }}
                  >
                    <img
                      src={p.imageUrl}
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, #1A1B2E 0%, transparent 50%)' }}
                    />
                    <div
                      className="absolute top-3 right-3 text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${planetData.color}22`,
                        border: `1px solid ${planetData.color}40`,
                        color: planetData.color,
                        fontFamily: 'Cinzel, serif',
                      }}
                    >
                      {p.matchPercent}% match
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="text-xs uppercase tracking-widest mb-1" style={{ color: '#888' }}>
                      {p.brand}
                    </div>
                    <div className="font-display text-base mb-3" style={{ color: '#F5F5F7' }}>
                      {p.name}
                    </div>

                    {/* Notes icons */}
                    <div className="flex gap-1 mb-3 flex-wrap">
                      {[...p.notes.top.slice(0,1), ...p.notes.heart.slice(0,1), ...p.notes.base.slice(0,1)].map((note, i) => (
                        <span
                          key={note}
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            background: 'rgba(255,255,255,0.06)',
                            color: '#888',
                            border: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {['🌸 ', '💛 ', '🌿 '][i]}{note}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="font-display text-lg" style={{ color: '#D4AF37' }}>
                        {p.price.toLocaleString('ru-RU')} ₽
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="px-3 py-1.5 text-xs font-semibold transition-all hover:opacity-85"
                          style={{ background: '#D4AF37', color: '#0B0C15', fontFamily: 'Cinzel, serif' }}
                          onClick={e => { e.stopPropagation(); navigate('product', { productId: p.id }) }}
                        >
                          Sample
                        </button>
                        <button
                          className="px-3 py-1.5 text-xs transition-all hover:bg-white/5"
                          style={{
                            border: '1px solid rgba(212,175,55,0.4)',
                            color: '#D4AF37',
                            fontFamily: 'Cinzel, serif',
                          }}
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Astro Tip Box */}
      <section className="relative z-10 px-8 pb-24">
        <div
          className="max-w-6xl mx-auto rounded-2xl px-8 py-8 flex gap-6 items-start"
          style={{
            background: `linear-gradient(135deg, ${planetData.color}12 0%, rgba(26,27,46,0.8) 100%)`,
            border: `1px solid ${planetData.color}30`,
          }}
        >
          <div
            className="text-2xl flex-shrink-0 mt-1"
            style={{ color: planetData.color }}
          >
            {planetData.symbol}
          </div>
          <div>
            <div className="font-display text-xs tracking-widest uppercase mb-2" style={{ color: planetData.color }}>
              Celestial Tip
            </div>
            <p className="leading-relaxed text-sm" style={{ color: '#888', fontStyle: 'italic' }}>
              {planet} in Taurus? You'll adore scents with rose, vanilla, and sandalwood —
              they resonate deeply with your earthy sensuality and love of tactile, lasting pleasure.
              For {planet} in Libra, reach for airy florals with a musky heart.
              In Pisces, dreamy aquatics and soft ambers are your celestial match.
            </p>
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
