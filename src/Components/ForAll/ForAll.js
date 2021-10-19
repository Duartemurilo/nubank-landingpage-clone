import React from 'react'
import { BodyForAll } from '../../Styles/Componets/Conteiners/ForAllStyle'
import Center from './Center'
import Left from './Left'
import Right from './Right'

function Container() {
  return (
    <BodyForAll id="forYou">
      <Left />
      <Center />
      <Right />
    </BodyForAll>
  )
}

export default Container
