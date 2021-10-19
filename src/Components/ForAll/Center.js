import React from 'react'
import { ContainerCenter } from '../../Styles/Componets/Conteiners/ContainerCenter'
import people1 from '../../Images/People1.jpeg'

function Center() {
  return (
    <ContainerCenter>
      <img id="image1" src={people1} alt="imagem " />
    </ContainerCenter>
  )
}

export default Center
