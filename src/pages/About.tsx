import type { NavigateFn } from '../types'
import StarField from '../components/StarField'

export default function AboutPage({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>About Us</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>
      <main className="relative z-10 max-w-4xl mx-auto px-8 py-20">
        <div className="text-xs tracking-[0.5em] uppercase mb-4 text-center" style={{ color: '#D4AF37' }}>✦ Our Story</div>
        <h1 className="font-display mb-8 text-center" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#F5F5F7' }}>About Celestia</h1>
        <div className="space-y-6 text-sm leading-relaxed" style={{ color: '#888', lineHeight: 1.9 }}>
          <p>Celestia was born from the belief that fragrance is more than a scent — it's an extension of your cosmic identity. We combine the ancient wisdom of astrology with the art of perfumery to help you discover scents that truly resonate with your soul.</p>
          <p>Our team of astrologers and perfumers work together to curate fragrances that align with your natal chart. Each recommendation is based on the positions of the Sun, Moon, and Venus at the time of your birth.</p>
          <p>We believe that the right fragrance can amplify your strengths, soothe your challenges, and help you express your authentic self to the world.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: '14+ Curated Scents', desc: 'Handpicked for each planet' },
            { title: '6 Planetary Energies', desc: 'Sun, Moon, Venus, Mars, Jupiter, Saturn' },
            { title: 'Personalized Matches', desc: 'Based on your natal chart' },
          ].map((item) => (
            <div key={item.title} className="rounded-xl p-6" style={{ background: '#1A1B2E', border: '1px solid rgba(212,175,55,0.2)' }}>
              <div className="font-display text-base mb-2" style={{ color: '#D4AF37' }}>{item.title}</div>
              <div className="text-sm" style={{ color: '#888' }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </main>
      <footer className="relative z-10 text-center py-10 px-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="font-display text-sm tracking-[0.3em] mb-5" style={{ color: '#D4AF37' }}>CELESTIA</div>
        <div className="flex justify-center gap-8 text-xs" style={{ color: '#888' }}>
          <button className="uppercase tracking-widest" onClick={() => navigate('home')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Home</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('allPlanets')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>All Planets</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('about')} style={{ color: '#D4AF37' }}>About</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('contact')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Contact</button>
        </div>
        <div className="text-xs mt-4" style={{ color: 'rgba(136,136,136,0.35)' }}>© 2026 Celestia. The stars guide, you decide.</div>
      </footer>
    </div>
  )
}