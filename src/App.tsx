import { MotionConfig } from 'framer-motion'
import { AcquisitionProcess } from './components/AcquisitionProcess'
import { Audience } from './components/Audience'
import { BrandStory } from './components/BrandStory'
import { Comparables } from './components/Comparables'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HomepageConcepts } from './components/HomepageConcepts'
import { MarketContext } from './components/MarketContext'
import { Navbar } from './components/Navbar'
import { Possibilities } from './components/Possibilities'
import { PriceAnchor } from './components/PriceAnchor'
import { ProductConcept } from './components/ProductConcept'
import { WhyICodeGPT } from './components/WhyICodeGPT'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main id="main">
        <Hero />
        <Possibilities />
        <ProductConcept />
        <WhyICodeGPT />
        <MarketContext />
        <Comparables />
        <PriceAnchor />
        <Audience />
        <BrandStory />
        <HomepageConcepts />
        <AcquisitionProcess />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </MotionConfig>
  )
}
