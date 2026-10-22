import { useState } from 'react'
import type { NavigateFn } from '../types'
import StarField from '../components/StarField'

const CITIES = [
  'Moscow, Russia', 'Saint Petersburg, Russia', 'Novosibirsk, Russia',
  'Kazan, Russia', 'Yekaterinburg, Russia', 'Nizhny Novgorod, Russia',
]

export default function FormPage({ navigate }: { navigate: NavigateFn }) {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [city, setCity] = useState('')
  const [unknownTime, setUnknownTime] = useState(false)
  const [errors, setErrors] = useState<{ date?: string; time?: string; city?: string }>({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors: typeof errors = {}
    if (!date) newErrors.date = 'Please enter your birth date'
    if (!unknownTime && !time) newErrors.time = 'Please enter birth time'
    if (!city) newErrors.city = 'Please enter your birth city'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  const getZodiacSign = (dateString: string) => {
  const date = new Date(dateString)
  const day = date.getDate()
  const month = date.getMonth() + 1

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Aries ♈'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Taurus '
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gemini ♊'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Cancer ♋'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leo ♌'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgo ♍'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra ♎'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Scorpio ♏'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagittarius ♐'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricorn ♑'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquarius ♒'
  return 'Pisces '
}
  const handleSubmit = () => {
    if (!validate()) return
    setLoading(true)
    setTimeout(() => {
      navigate('results', { birthData: { date, time: unknownTime ? '12:00' : time, city } })
    }, 2000)
  }

  return (
    <div className="relative min-h-screen" style={{ background: '#0B0C15' }}>
      <StarField />
      <nav className="relative z-10 flex items-center justify-between px-8 py-5" style={{ borderBottom: '1px solid rgba(212,175,55,0.12)' }}>
        <button onClick={() => navigate('home')} className="font-display text-xl tracking-[0.25em]" style={{ color: '#D4AF37' }}>CELESTIA</button>
        <div className="text-xs uppercase tracking-widest" style={{ color: '#888' }}>Natal Chart Calculation</div>
        <button onClick={() => navigate('home')} className="text-xs tracking-widest uppercase px-5 py-2" style={{ border: '1px solid rgba(212,175,55,0.5)', color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>← Back</button>
      </nav>
      <main className="relative z-10 flex flex-col items-center px-6 py-16">
        <div className="text-xs tracking-[0.5em] uppercase mb-4" style={{ color: '#D4AF37' }}>✦ Step 1 of 2</div>
        <h1 className="font-display mb-4 text-center" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#F5F5F7' }}>Calculate Your Scent Destiny</h1>
        <p className="text-sm mb-12 text-center max-w-md" style={{ color: '#888' }}>Enter your birth details to reveal the fragrance the stars chose for you.</p>
        <div className="w-full max-w-md rounded-2xl p-8 flex flex-col gap-6" style={{ background: 'rgba(26, 27, 46, 0.6)', backdropFilter: 'blur(12px)', border: '1px solid rgba(212,175,55,0.2)' }}>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>Date of Birth *</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${errors.date ? '#E05040' : 'rgba(212,175,55,0.3)'}`, color: '#F5F5F7' }} />
            {errors.date && <span className="text-xs" style={{ color: '#E05040' }}>{errors.date}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>Time of Birth *</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} disabled={unknownTime} className="w-full px-4 py-3 rounded-lg text-sm outline-none disabled:opacity-50" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${errors.time ? '#E05040' : 'rgba(212,175,55,0.3)'}`, color: '#F5F5F7' }} />
            <label className="flex items-center gap-2 text-xs cursor-pointer" style={{ color: '#888' }}>
              <input type="checkbox" checked={unknownTime} onChange={(e) => { setUnknownTime(e.target.checked); if (e.target.checked) setErrors((prev) => ({ ...prev, time: undefined })) }} />
              I don't know the exact time
            </label>
            {errors.time && <span className="text-xs" style={{ color: '#E05040' }}>{errors.time}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase tracking-widest" style={{ color: '#D4AF37', fontFamily: 'Cinzel, serif' }}>City of Birth *</label>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="w-full px-4 py-3 rounded-lg text-sm outline-none cursor-pointer" style={{ background: 'rgba(0,0,0,0.3)', border: `1px solid ${errors.city ? '#E05040' : 'rgba(212,175,55,0.3)'}`, color: city ? '#F5F5F7' : '#888' }}>
              <option value="" disabled>Select your city</option>
              {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.city && <span className="text-xs" style={{ color: '#E05040' }}>{errors.city}</span>}
          </div>
          <button onClick={handleSubmit} disabled={loading} className="w-full py-4 font-display text-xs tracking-[0.25em] uppercase font-semibold" style={{ background: '#D4AF37', color: '#0B0C15', letterSpacing: '0.2em' }}>
            {loading ? '✦ Calculating...' : 'Calculate My Scent'}
          </button>
        </div>
      </main>
    </div>
  )
}