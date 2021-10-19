import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Header from '../Components/Header'
import { HomePageContainer } from '../Styles/Pages/HomePageStyles'
import ForAll from '../Components/ForAll/ForAll.js'
import RowBenifits from '../Components/BennefitsComponents/RowBeniits'
import DigitalCount from '../Components/DigitalCount/DigitalCount'
import Cards from '../Components/Cards'
import Yield from '../Components/ Yield'
import Footer from '../Components/Footer'

function HomePage() {
  const [whiteBackground, setBackground] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 9) {
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
      <ForAll />
      <RowBenifits />
      <DigitalCount />
      <Cards />
      <Yield />
      <Footer />
    </HomePageContainer>
  )
}

export default HomePage
