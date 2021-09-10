import React from 'react'
import { ContainerRight, Image2Right, ImageRight } from '../../Styles/Componets/Conteiners/ContainerRightStyles'
import people3 from '../../Images/people3.jpeg'
import people4 from '../../Images/people4.jpeg'
import people5 from '../../Images/people5.jpeg'
import people6 from '../../Images/people6.jpeg'

function Right({currentImageRight , currentImage2Right}) {

  return (
    <ContainerRight>
      {currentImageRight ? <ImageRight src = {people3}/>  : <ImageRight src = {people4} /> 
      }
      {currentImage2Right ? <Image2Right  src = {people5}/> : <Image2Right  src = {people6}/> }
      
      
    </ContainerRight>
  )
}

export default Right
