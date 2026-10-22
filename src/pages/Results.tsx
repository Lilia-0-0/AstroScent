import type { NavigateFn } from '../types'
import { PLANETS, PERFUMES } from '../data'
import StarField from '../components/StarField'

function CircleProgress({ percent, color }: { percent: number; color: string }) {
  const r = 22
  const circ = 2 * Math.PI * r
  const dash = (percent / 100) * circ
  return (
    <svg width="56" height="56" viewBox="0 0 56 56">
      <circle cx="28" cy="28" r={r} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="3" />
      <circle cx="28" cy="28" r={r} fill="none" stroke={color} strokeWidth="3" strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" transform="rotate(-90 28 28)" />
      <text x="28" y="33" textAnchor="middle" fontSize="10" fill={color} fontFamily="Cinzel, serif" fontWeight="600">{percent}%</text>
    </svg>
  )
}

export default function ResultsPage({ navigate, birthData }: { 
  navigate: NavigateFn
  birthData?: { date: string; time: string; city: string; sunSign?: string } 
}) {
  const userSign = birthData?.sunSign || 'Leo ♌'
  
  const signDescriptions: Record<string, { desc: string; gradient: string; border: string; planet: any }> = {
    'Aries ': { desc: 'Bold, energetic, and pioneering. You need spicy, dynamic scents with pepper and cedar.', gradient: 'linear-gradient(135deg, rgba(255,155,33,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(255,155,33,0.3)', planet: PLANETS[0] },
    'Taurus ♉': { desc: 'You appreciate luxury and deep sensuality. Rich earthy fragrances with rose and vanilla.', gradient: 'linear-gradient(135deg, rgba(232,160,191,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(232,160,191,0.3)', planet: PLANETS[2] },
    'Gemini ♊': { desc: 'Intellectual, airy, and versatile. Light citrus and fresh florals keep your mind stimulated.', gradient: 'linear-gradient(135deg, rgba(176,184,212,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(176,184,212,0.3)', planet: PLANETS[1] },
    'Cancer ': { desc: 'Emotionally intuitive and deeply dreamy. You crave ethereal, aquatic scents.', gradient: 'linear-gradient(135deg, rgba(176,184,212,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(176,184,212,0.3)', planet: PLANETS[1] },
    'Leo ♌': { desc: 'You radiate confidence and warmth. Bold, regal scents with amber and oud.', gradient: 'linear-gradient(135deg, rgba(255,155,33,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(255,155,33,0.3)', planet: PLANETS[0] },
    'Virgo ': { desc: 'Practical, clean, and elegant. You prefer subtle, sophisticated scents.', gradient: 'linear-gradient(135deg, rgba(200,184,112,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(200,184,112,0.3)', planet: PLANETS[5] },
    'Libra ♎': { desc: 'Harmonious, romantic, and aesthetic. Balanced floral bouquets.', gradient: 'linear-gradient(135deg, rgba(232,160,191,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(232,160,191,0.3)', planet: PLANETS[2] },
    'Scorpio ♏': { desc: 'Mysterious, intense, and magnetic. Dark, sensual fragrances.', gradient: 'linear-gradient(135deg, rgba(224,80,64,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(224,80,64,0.3)', planet: PLANETS[3] },
    'Sagittarius ': { desc: 'Adventurous, optimistic, and free. Exotic, warm, and spicy scents.', gradient: 'linear-gradient(135deg, rgba(212,160,80,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(212,160,80,0.3)', planet: PLANETS[4] },
    'Capricorn ♑': { desc: 'Ambitious, disciplined, and classic. Timeless, structured fragrances.', gradient: 'linear-gradient(135deg, rgba(200,184,112,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(200,184,112,0.3)', planet: PLANETS[5] },
    'Aquarius ♒': { desc: 'Innovative, independent, and unconventional. Unique, futuristic scents.', gradient: 'linear-gradient(135deg, rgba(176,184,212,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(176,184,212,0.3)', planet: PLANETS[1] },
    'Pisces ♓': { desc: 'Compassionate, artistic, and dreamy. Ethereal, aquatic, and soft amber.', gradient: 'linear-gradient(135deg, rgba(176,184,212,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(176,184,212,0.3)', planet: PLANETS[1] },
  }

  const currentSignData = signDescriptions[userSign] || signDescriptions['Leo ♌']
  
  const recommendedPerfumes = PERFUMES.filter(p => 
    p.zodiacMatch.some(match => match.includes(userSign.split(' ')[0]))
  ).slice(0, 3)
  
  const finalRecommended = recommendedPerfumes.length > 0 ? recommendedPerfumes : PERFUMES.slice(0, 3)

  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      
      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>Your Cosmic Profile</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>

      {/* Header */}
      <header className="relative z-10 text-center px-8 pt-16 pb-14">
        <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#D4AF37' }}>✦ Natal Chart Analysis</div>
        <h1 className="font-display mb-4" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: '#F5F5F7' }}>Your Cosmic Scent Profile</h1>
        <p className="text-sm" style={{ color: '#888' }}>
          Based on your natal chart calculated for {birthData?.date || 'September 26, 2024'} · {birthData?.time || '12:00'} · {birthData?.city || 'Moscow, Russia'}
        </p>
        <p className="text-sm mt-2" style={{ color: '#D4AF37' }}>Your Sun Sign: <strong>{userSign}</strong></p>
      </header>

      {/* Planet Cards */}
      <section className="relative z-10 px-8 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: currentSignData.gradient, border: `1px solid ${currentSignData.border}` }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: currentSignData.planet.gradient, boxShadow: `0 0 16px ${currentSignData.planet.glowColor}` }} />
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: currentSignData.planet.color, fontFamily: 'Cinzel, serif' }}>Sun</div>
                <div className="font-display text-base" style={{ color: '#F5F5F7' }}>in {userSign}</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#888' }}>{currentSignData.desc}</p>
          </div>

          <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: 'linear-gradient(135deg, rgba(176,184,212,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(176,184,212,0.3)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: PLANETS[1].gradient, boxShadow: `0 0 16px ${PLANETS[1].glowColor}` }} />
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: PLANETS[1].color, fontFamily: 'Cinzel, serif' }}>Moon</div>
                <div className="font-display text-base" style={{ color: '#F5F5F7' }}>in Water Sign</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#888' }}>Your emotional core seeks comfort, intuition, and deep sensory experiences.</p>
          </div>

          <div className="rounded-2xl p-6 flex flex-col gap-4" style={{ background: 'linear-gradient(135deg, rgba(232,160,191,0.18) 0%, rgba(26,27,46,0) 80%)', border: 'rgba(232,160,191,0.3)' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ background: PLANETS[2].gradient, boxShadow: `0 0 16px ${PLANETS[2].glowColor}` }} />
              <div>
                <div className="text-xs uppercase tracking-widest" style={{ color: PLANETS[2].color, fontFamily: 'Cinzel, serif' }}>Venus</div>
                <div className="font-display text-base" style={{ color: '#F5F5F7' }}>in Earth Sign</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#888' }}>You are drawn to tangible luxury, high-quality ingredients, and lasting elegance.</p>
          </div>
        </div>
      </section>

      {/* Recommended Perfumes */}
      <section className="relative z-10 px-8 pb-16">
        <h2 className="font-display text-xs tracking-[0.45em] uppercase text-center mb-10" style={{ color: 'rgba(212,175,55,0.55)' }}>✦ Your Celestial Recommendations</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {finalRecommended.map((perfume) => (
            <div key={perfume.id} className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ background: '#1A1B2E', border: '1px solid rgba(212,175,55,0.15)' }}>
              <div className="relative overflow-hidden" style={{ height: '240px', background: '#0F1020' }}>
                <img src={perfume.imageUrl} alt={perfume.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #1A1B2E 0%, transparent 55%)' }} />
                <div className="absolute bottom-3 left-3">
                  <div className="text-xs px-3 py-1 rounded-full" style={{ background: 'rgba(212,175,55,0.15)', border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>
                    Matches {userSign}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: '#888' }}>{perfume.brand}</div>
                <div className="font-display text-base mb-2" style={{ color: '#F5F5F7' }}>{perfume.name}</div>
                <div className="flex gap-1 mb-3 flex-wrap">
                  {[...perfume.notes.top.slice(0,1), ...perfume.notes.heart.slice(0,1), ...perfume.notes.base.slice(0,1)].map(n => (
                    <span key={n} className="text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)', color: '#888', border: '1px solid rgba(255,255,255,0.07)' }}>{n}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-display text-base" style={{ color: '#D4AF37' }}>{perfume.price.toLocaleString('ru-RU')} ₽</div>
                  <CircleProgress percent={perfume.matchPercent} color="#D4AF37" />
                </div>
                <div className="grid grid-cols-2 gap-2 mt-3">
                  <button className="py-2 text-xs font-semibold transition-all hover:opacity-85" style={{ background: '#D4AF37', color: '#0B0C15', fontFamily: 'Cinzel, serif' }} onClick={() => alert('Sample added!')}>Buy Sample</button>
                  <button onClick={() => navigate('product', { productId: perfume.id })} className="py-2 text-xs transition-all hover:bg-white/5" style={{ border: '1px solid rgba(212,175,55,0.4)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 px-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="font-display text-sm tracking-[0.3em] mb-5" style={{ color: '#D4AF37' }}>CELESTIA</div>
        <div className="flex justify-center gap-8 text-xs" style={{ color: '#888' }}>
          {['Home', 'All Planets', 'About', 'Contact'].map(link => (
            <button key={link} className="uppercase tracking-widest" onClick={() => link === 'Home' && navigate('home')} style={{ color: '#888' }} onMouseEnter={e => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={e => (e.currentTarget.style.color = '#888')}>{link}</button>
          ))}
        </div>
        <div className="text-xs mt-4" style={{ color: 'rgba(136,136,136,0.35)' }}>© 2026 Celestia. The stars guide, you decide.</div>
      </footer>
    </div>
  )
}