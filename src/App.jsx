import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'

const ARShowcase = lazy(() => import('./components/ARShowcase'))
const StudioShowcase = lazy(() => import('./components/StudioShowcase'))
const Screenshots = lazy(() => import('./components/Screenshots'))
const Architecture = lazy(() => import('./components/Architecture'))
const TechStack = lazy(() => import('./components/TechStack'))
const GetStarted = lazy(() => import('./components/GetStarted'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Suspense fallback={<SectionFallback />}>
          <ARShowcase />
          <StudioShowcase />
          <Screenshots />
          <Architecture />
          <TechStack />
          <GetStarted />
          <Footer />
        </Suspense>
      </main>
    </>
  )
}

export default App

function SectionFallback() {
  return <div style={{ minHeight: '8rem' }} aria-hidden="true" />
}
