import React from 'react'
import { ContainerCenter, Image2Center, ImageCenter } from '../../Styles/Componets/Conteiners/ContainerCenter'
import people1 from '../../Images/People1.jpeg'
import people2 from '../../Images/people2.jpeg'

function Center({ currentImage }) {
  return (
    <ContainerCenter>
      {currentImage ? <ImageCenter src={people1} alt="imagem " /> : <Image2Center src={people2} alt="imagem " />}
    </ContainerCenter>
  )
}

export default Center
