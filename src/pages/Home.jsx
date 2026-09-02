import React from 'react'
import Hero from '../components/Home/Hero/Hero'
import AboutSection from '../components/Home/About/AboutSection'
import ServicesSection from '../components/Home/ServicesSection/ServicesSection'
import WhyTrustUs from '../components/Home/WhyTrustUs/WhyTrustUs'
import IndustriesSection from '../components/Home/IndustriesSection/IndustriesSection'
import TestimonialsSection from '../components/Home/TestimonialsSection/TestimonialsSection'
import BlogsSection from '../components/Home/BlogsSection/BlogsSection'
import ContactCTA from '../components/Home/ContactCTA/ContactCTA'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhyTrustUs />
      <IndustriesSection />
      <BlogsSection />
      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}

export default Home
