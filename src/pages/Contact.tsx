import { useState } from 'react'
import type { NavigateFn } from '../types'
import StarField from '../components/StarField'

export default function ContactPage({ navigate }: { navigate: NavigateFn }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = () => {
    if (name && email && message) {
      setSent(true)
      setTimeout(() => setSent(false), 3000)
      setName(''); setEmail(''); setMessage('')
    }
  }

  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>Contact Us</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>
      <main className="relative z-10 max-w-2xl mx-auto px-8 py-20">
        <div className="text-xs tracking-[0.5em] uppercase mb-4 text-center" style={{ color: '#D4AF37' }}>✦ Get in Touch</div>
        <h1 className="font-display mb-4 text-center" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#F5F5F7' }}>Contact Us</h1>
        <p className="text-sm mb-12 text-center" style={{ color: '#888' }}>Have questions about your scent profile? We'd love to hear from you.</p>
        <div className="rounded-2xl p-8 flex flex-col gap-6" style={{ background: 'rgba(26, 27, 46, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.2)' }}>
          <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.3)', color: '#F5F5F7' }} />
          <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.3)', color: '#F5F5F7' }} />
          <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full px-4 py-3 rounded-lg text-sm outline-none resize-none" style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(212,175,55,0.3)', color: '#F5F5F7' }} />
          <button onClick={handleSubmit} className="w-full py-4 font-display text-xs tracking-[0.25em] uppercase font-semibold" style={{ background: '#D4AF37', color: '#0B0C15' }}>
            {sent ? '✓ Message Sent!' : 'Send Message'}
          </button>
        </div>
      </main>
      <footer className="relative z-10 text-center py-10 px-8" style={{ borderTop: '1px solid rgba(212,175,55,0.12)' }}>
        <div className="font-display text-sm tracking-[0.3em] mb-5" style={{ color: '#D4AF37' }}>CELESTIA</div>
        <div className="flex justify-center gap-8 text-xs" style={{ color: '#888' }}>
          <button className="uppercase tracking-widest" onClick={() => navigate('home')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>Home</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('allPlanets')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>All Planets</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('about')} style={{ color: '#888' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F7')} onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}>About</button>
          <button className="uppercase tracking-widest" onClick={() => navigate('contact')} style={{ color: '#D4AF37' }}>Contact</button>
        </div>
        <div className="text-xs mt-4" style={{ color: 'rgba(136,136,136,0.35)' }}>© 2026 Celestia. The stars guide, you decide.</div>
      </footer>
    </div>
  )
}