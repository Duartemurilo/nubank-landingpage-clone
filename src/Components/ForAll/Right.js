import React from 'react'
import { ForAllRight, Image2Right, ImageRight } from '../../Styles/Componets/Conteiners/ForAllRightStyles'
import people3 from '../../Images/people3.jpeg'

import people6 from '../../Images/people6.jpeg'

function Right() {
  return (
    <ForAllRight>
      <ImageRight src={people3} />
      <Image2Right src={people6} />
    </ForAllRight>
  )
}

export default Right
