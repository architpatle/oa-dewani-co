import React from 'react'
import AboutHero from '../components/About/AboutHero/AboutHero'
import CompanyOverview from '../components/About/CompanyOverview/CompanyOverview'
import WorkingProcess from '../components/About/WorkingProcess/WorkingProcess'
import WhyOAD from '../components/About/WhyOAD/WhyOAD'
import StatsSection from '../components/About/StatsSection/StatsSection'
import ContactCTA from '../components/Home/ContactCTA/ContactCTA'


const About = () => {
  return (
    <>
      <AboutHero />
      <CompanyOverview />
      <WhyOAD />
      <StatsSection />
      <WorkingProcess />
      <ContactCTA />
    </>
  )
}

export default About
