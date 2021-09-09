import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import { HomePageContainer } from '../Styles/Pages/HomePageStyles'

function HomePage() {
  const [whiteBackground, setBackground] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }
    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])
  return (
    <HomePageContainer>
      <Banner />
    </HomePageContainer>
  )
}

export default HomePage
