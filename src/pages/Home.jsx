import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeBestSellers from '../components/HomeBestSellers';
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
    const labels = ["Sandals", "Sneakers", "Boots"];
  return (
    <div>
      <HomeHeader labels={labels} />
      <HomeBestSellers />
      <UpcomingEvents />
    </div>
  )
}

export default Home
