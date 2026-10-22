import { useState } from 'react'
import type { NavState } from './types'
import Home from './pages/Home'
import PlanetPage from './pages/Planet'
import ProductPage from './pages/Product'
import ResultsPage from './pages/Results'
import AllPlanetsPage from './pages/AllPlanets'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'
import AIAssistant from './components/AIAssistant'

export default function App() {
  const [state, setState] = useState<NavState>({ page: 'home' })
  const navigate = (page: NavState['page'], params?: Partial<Omit<NavState, 'page'>>) => {
    setState({ page, ...params })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (state.page === 'planet') return <PlanetPage planet={state.planet ?? 'Venus'} navigate={navigate} />
  if (state.page === 'product') return <ProductPage productId={state.productId ?? '1'} navigate={navigate} />
  if (state.page === 'results') return <ResultsPage navigate={navigate} />
  if (state.page === 'allPlanets') return <AllPlanetsPage navigate={navigate} />
  if (state.page === 'about') return <AboutPage navigate={navigate} />
  if (state.page === 'contact') return <ContactPage navigate={navigate} />

  return (
  <>
    <Home navigate={navigate} />
    <AIAssistant />
  </>
  )
}