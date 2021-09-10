import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import { HomePageContainer } from '../Styles/Pages/HomePageStyles'
import Container from '../Components/Container/Container.js'
import RowBenifits from '../Components/BennefitsComponents/RowBeniits'
import DigitalCount from '../Components/DigitalCount/DigitalCount'
import Cards from '../Components/Cards'

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
      <Header currentBackground={whiteBackground} />
      <Banner />
      <Container />
      <RowBenifits />
      <DigitalCount />
      <Cards />
    </HomePageContainer>
  )
}

export default HomePage
