import type { NavigateFn } from '../types'
import StarField from '../components/StarField'

export default function ProfilePage({ navigate }: { navigate: NavigateFn }) {
  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>My Chart</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>
      <main className="relative z-10 max-w-2xl mx-auto px-8 py-20 text-center">
        <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#D4AF37' }}>✦ Your Profile</div>
        <h1 className="font-display mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F5F5F7' }}>My Cosmic Chart</h1>
        <p className="text-sm mb-12" style={{ color: '#888' }}>Sign in to save your natal chart and track your scent journey.</p>
        <div className="rounded-2xl p-8" style={{ background: 'rgba(26, 27, 46, 0.6)', border: '1px solid rgba(212,175,55,0.2)' }}>
          <div className="text-6xl mb-4"></div>
          <div className="font-display text-lg mb-2" style={{ color: '#F5F5F7' }}>Coming Soon</div>
          <div className="text-sm" style={{ color: '#888' }}>Profile features will be available in the next update.</div>
          <button onClick={() => navigate('form')} className="mt-6 px-8 py-3 font-display text-xs tracking-[0.25em] uppercase" style={{ background: '#D4AF37', color: '#0B0C15' }}>
            Calculate Your Chart
          </button>
        </div>
      </main>
    </div>
  )
}