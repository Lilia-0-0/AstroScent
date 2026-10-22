export type Page = 'home' | 'planet' | 'product' | 'results' | 'form' | 'allPlanets' | 'about' | 'contact'

export interface NavState {
  page: Page
  planet?: string
  productId?: string
  birthData?: { 
    date: string
    time: string
    city: string
    sunSign?: string // <-- Добавили это
  }
}

export type NavigateFn = (page: Page, params?: Partial<Omit<NavState, 'page'>>) => void

export interface Perfume {
  id: string
  name: string
  brand: string
  price: number
  samplePrice: number
  size: string
  planet: string
  imageUrl: string
  thumbnails: string[]
  notes: { top: string[]; heart: string[]; base: string[] }
  description: string
  zodiacMatch: string[]
  moonMatch: string
  matchPercent: number
  categories: string[]
}

export interface Planet {
  id: string
  name: string
  symbol: string
  tagline: string
  color: string
  glowColor: string
  gradient: string
  description: string
  accentColor: string
}