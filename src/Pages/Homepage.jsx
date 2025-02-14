import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/Homecards'
import Joblisting from '../components/Joblistings'
import Viewjobs from '../components/Viewjobs'

const Homepage = () => {
  return (
    <>
    <Hero/>
    <Homecards/>
    <Joblisting isHome={true}/>
    <Viewjobs/>
    </>
  )
}

export default Homepage