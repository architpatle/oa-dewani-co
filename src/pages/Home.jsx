import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import AboutSection from '../components/Home/About/AboutSection'
import ServicesSection from '../components/Home/ServicesSection/ServicesSection'
import WhyTrustUs from '../components/Home/WhyTrustUs/WhyTrustUs'
import IndustriesSection from '../components/Home/IndustriesSection/IndustriesSection'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyTrustUs />
      <IndustriesSection />
    </>
  )
}

export default Home
