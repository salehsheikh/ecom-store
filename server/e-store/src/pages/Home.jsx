import React from 'react'
import Carousel from '../components/Carousel'
import HeroSection from '../components/HeroSection'

import CustomerTest from '../components/CustomerTest'
import FeatureProducts from '../components/FeaturedProducts'
const Home = () => {
  return (
    <div>
      <Carousel/>
      <HeroSection/>
      <FeatureProducts/>
      <CustomerTest/>
    </div>
  )
}

export default Home;
