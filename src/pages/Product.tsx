import { useState } from 'react'
import type { NavigateFn } from '../types'
import { PERFUMES } from '../data'
import StarField from '../components/StarField'

function CircleProgress({
  percent,
  color,
}: {
  percent: number
  color: string
}) {
  const r = 20
  const circ = 2 * Math.PI * r
  const dash = (percent / 100) * circ
  return (
    <svg width="52" height="52" viewBox="0 0 52 52">
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.08)"
        strokeWidth="3"
      />
      <circle
        cx="26"
        cy="26"
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        transform="rotate(-90 26 26)"
      />
      <text
        x="26"
        y="30"
        textAnchor="middle"
        fontSize="9"
        fill={color}
        fontFamily="Cinzel, serif"
      >
        {percent}%
      </text>
    </svg>
  )
}

function Accordion({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        className="w-full flex items-center justify-between py-4 text-sm transition-colors text-left"
        style={{
          color: open ? '#D4AF37' : '#888',
          fontFamily: 'Cinzel, serif',
          letterSpacing: '0.1em',
        }}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="uppercase tracking-widest text-xs">{title}</span>
        <span className="text-lg" style={{ color: '#D4AF37' }}>
          {open ? '−' : '+'}
        </span>
      </button>
      {open && (
        <div className="pb-4 text-sm leading-relaxed" style={{ color: '#888' }}>
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductPage({
  productId,
  navigate,
}: {
  productId: string
  navigate: NavigateFn
}) {
  const perfume = PERFUMES.find((p) => p.id === productId) ?? PERFUMES[0]
  const related = PERFUMES.filter((p) => p.id !== perfume.id).slice(0, 4)
  const [activeThumb, setActiveThumb] = useState(0)

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
          <button
            onClick={() => navigate('home')}
            style={{ color: '#888' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
          >
            Home
          </button>
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>›</span>
          <button
            onClick={() => navigate('planet', { planet: perfume.planet })}
            style={{ color: '#888' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
          >
            {perfume.planet}
          </button>
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>›</span>
          <span style={{ color: '#F5F5F7' }}>{perfume.name}</span>
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

      {/* Main Product */}
      <main className="relative z-10 max-w-6xl mx-auto px-8 py-14 grid md:grid-cols-[3fr_2fr] gap-12">
        {/* LEFT: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div
            className="relative overflow-hidden rounded-2xl"
            style={{ background: '#0F1020', height: '520px' }}
          >
            <img
              src={perfume.thumbnails[activeThumb].replace(
                '140&h=140',
                '500&h=700'
              )}
              alt={perfume.name}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(11,12,21,0.5) 0%, transparent 50%)',
              }}
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {perfume.thumbnails.map((thumb, i) => (
              <button
                key={i}
                onClick={() => setActiveThumb(i)}
                className="rounded-xl overflow-hidden transition-all"
                style={{
                  height: '80px',
                  border:
                    activeThumb === i
                      ? '2px solid #D4AF37'
                      : '2px solid transparent',
                  opacity: activeThumb === i ? 1 : 0.5,
                }}
              >
                <img src={thumb} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Details */}
        <div className="flex flex-col gap-5">
          <div
            className="text-xs uppercase tracking-[0.3em]"
            style={{ color: '#888' }}
          >
            {perfume.brand}
          </div>
          <h1
            className="font-display leading-tight"
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              color: '#F5F5F7',
            }}
          >
            {perfume.name}
          </h1>
          <div>
            <div
              className="font-display text-3xl"
              style={{ color: '#D4AF37' }}
            >
              {perfume.price.toLocaleString('ru-RU')} ₽
            </div>
            <div className="text-xs mt-1" style={{ color: '#888' }}>
              {perfume.size}
            </div>
          </div>

          {/* Astro Compatibility */}
          <div
            className="rounded-xl p-5"
            style={{
              border: '1px solid rgba(212,175,55,0.3)',
              background: 'rgba(212,175,55,0.04)',
            }}
          >
            <div
              className="font-display text-xs tracking-widest uppercase mb-3"
              style={{ color: '#D4AF37' }}
            >
              ✨ Perfect For
            </div>
            <ul className="space-y-1.5">
              {perfume.zodiacMatch.map((z) => (
                <li
                  key={z}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: '#F5F5F7' }}
                >
                  <span style={{ color: '#D4AF37' }}>◈</span> {z}
                </li>
              ))}
            </ul>
            <div
              className="text-xs mt-3"
              style={{ color: '#888', fontStyle: 'italic' }}
            >
              {perfume.moonMatch}
            </div>
          </div>

          {/* Fragrance Pyramid */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {[
              {
                label: 'Top Notes',
                notes: perfume.notes.top,
                icon: '🌸',
                color: 'rgba(232,160,191,0.12)',
              },
              {
                label: 'Heart Notes',
                notes: perfume.notes.heart,
                icon: '💛',
                color: 'rgba(212,175,55,0.08)',
              },
              {
                label: 'Base Notes',
                notes: perfume.notes.base,
                icon: '',
                color: 'rgba(106,76,147,0.12)',
              },
            ].map(({ label, notes, icon, color }) => (
              <div
                key={label}
                className="flex items-start gap-4 px-5 py-4"
                style={{
                  background: color,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span className="mt-0.5">{icon}</span>
                <div>
                  <div
                    className="text-xs uppercase tracking-widest mb-1"
                    style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}
                  >
                    {label}
                  </div>
                  <div className="text-sm" style={{ color: '#F5F5F7' }}>
                    {notes.join(' · ')}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed"
            style={{ color: '#888', lineHeight: 1.8 }}
          >
            {perfume.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mt-1">
            <button
              className="w-full py-4 font-display text-xs tracking-widest uppercase font-semibold transition-all hover:opacity-90"
              style={{ background: '#D4AF37', color: '#0B0C15' }}
              onClick={() => alert('Sample added to cart!')}
            >
              Buy Sample 2ml — {perfume.samplePrice.toLocaleString('ru-RU')} ₽
            </button>
            <button
              className="w-full py-4 font-display text-xs tracking-widest uppercase transition-all hover:bg-white/5"
              style={{
                border: '1px solid rgba(212,175,55,0.5)',
                color: '#D4AF37',
              }}
              onClick={() => alert('Full size added to cart!')}
            >
              Buy Full Size {perfume.size.split(' ')[0]}
            </button>
            <div className="text-xs text-center" style={{ color: '#888' }}>
              Free shipping on orders over 5 000 ₽
            </div>
          </div>

          {/* Accordions */}
          <div
            className="mt-2"
            style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
          >
            <Accordion title="Shipping & Returns">
              Orders ship within 1–3 business days. Free shipping on orders over
              5 000 ₽. Returns accepted within 14 days for unopened items.
              Samples are non-returnable.
            </Accordion>
            <Accordion title="Ingredients">
              Full INCI list available upon request. All fragrances comply with
              IFRA standards. Alcohol Denat., Parfum (Fragrance), Aqua, Benzyl
              Benzoate, Linalool, Limonene, Citronellol.
            </Accordion>
            <Accordion title="How to Choose">
              Apply to pulse points: wrists, neck, and behind the ears. Layer
              with unscented moisturiser for longer-lasting wear. Order a sample
              before committing to a full bottle.
            </Accordion>
          </div>
        </div>
      </main>

      {/* More from Planet */}
      <section className="relative z-10 px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="font-display text-xs tracking-[0.4em] uppercase"
              style={{ color: '#D4AF37' }}
            >
              ✦ More from {perfume.planet}
            </h2>
            <button
              onClick={() => navigate('planet', { planet: perfume.planet })}
              className="text-xs uppercase tracking-widest transition-colors"
              style={{ color: '#888' }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = '#D4AF37')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = '#888')
              }
            >
              View All →
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <button
                key={p.id}
                onClick={() => navigate('product', { productId: p.id })}
                className="group rounded-xl overflow-hidden text-left transition-all hover:-translate-y-1"
                style={{
                  background: '#1A1B2E',
                  border: '1px solid rgba(212,175,55,0.1)',
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ height: '140px', background: '#0F1020' }}
                >
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <div className="text-xs" style={{ color: '#888' }}>
                    {p.brand.split(' ')[0]}
                  </div>
                  <div
                    className="font-display text-sm line-clamp-2"
                    style={{ color: '#F5F5F7' }}
                  >
                    {p.name}
                  </div>
                  <div className="text-xs mt-1" style={{ color: '#D4AF37' }}>
                    {p.price.toLocaleString('ru-RU')} ₽
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Astrological Match */}
      <section className="relative z-10 px-8 pb-24">
        <div
          className="max-w-6xl mx-auto rounded-2xl p-8 grid md:grid-cols-2 gap-8 items-center"
          style={{
            background: '#1A1B2E',
            border: '1px solid rgba(212,175,55,0.18)',
          }}
        >
          <div>
            <div
              className="font-display text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: '#D4AF37' }}
            >
              Your Astrological Match
            </div>
            <p
              className="leading-relaxed text-sm mb-4"
              style={{ color: '#888' }}
            >
              Based on your natal chart, this perfume resonates deeply with your
              Venus placement and Moon energy.
            </p>
            <div className="flex items-center gap-4">
              <CircleProgress percent={perfume.matchPercent} color="#D4AF37" />
              <div>
                <div
                  className="font-display text-2xl"
                  style={{ color: '#D4AF37' }}
                >
                  {perfume.matchPercent}%
                </div>
                <div
                  className="text-xs uppercase tracking-widest"
                  style={{ color: '#888' }}
                >
                  Compatibility
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {['Venus', 'Moon', 'Ascendant'].map((body, i) => (
              <div key={body} className="flex items-center gap-3">
                <div
                  className="text-sm font-display w-24 flex-shrink-0"
                  style={{ color: '#888' }}
                >
                  {body}
                </div>
                <div
                  className="flex-1 rounded-full overflow-hidden"
                  style={{ height: '4px', background: 'rgba(255,255,255,0.07)' }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${[94, 88, 76][i]}%`,
                      background:
                        'linear-gradient(to right, #D4AF37, #E8A0BF)',
                    }}
                  />
                </div>
                <div
                  className="text-xs w-10 text-right"
                  style={{ color: '#D4AF37' }}
                >
                  {[94, 88, 76][i]}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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