import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import ARShowcase from './components/ARShowcase'
import StudioShowcase from './components/StudioShowcase'
import Screenshots from './components/Screenshots'
import Architecture from './components/Architecture'
import TechStack from './components/TechStack'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ARShowcase />
        <StudioShowcase />
        <Screenshots />
        <Architecture />
        <TechStack />
        <GetStarted />
      </main>
      <Footer />
    </>
  )
}

export default App
