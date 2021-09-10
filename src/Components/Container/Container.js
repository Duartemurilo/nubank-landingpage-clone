import React, { useState } from 'react'
import { Body } from '../../Styles/Global.js/Global'
import Center from './Center'
import Left from './Left'
import Right from './Right'

function Container() {
  const [currentImage, setCurrentImage] = useState(true)
  const [currentImageRight, setCurrentImageRight] = useState(false)
  const [currentImage2Righ, setCurrentImage2Righ] = useState(false)

  setTimeout(function () {
    setCurrentImageRight(!currentImageRight)
  }, 8000)

  setTimeout(function () {
    setCurrentImage(!currentImage)
  }, 6000)
  setTimeout(function () {
    setCurrentImage2Righ(!currentImage2Righ)
  }, 7000)

  return (
    <Body>
      <Left />
      <Center currentImage={currentImage} />
      <Right currentImageRight={currentImageRight} currentImage2Right={currentImage2Righ} />
    </Body>
  )
}

export default Container
