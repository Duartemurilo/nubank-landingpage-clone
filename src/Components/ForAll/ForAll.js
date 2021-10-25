import React from 'react'
import { BodyForAll } from '../../Styles/Componets/Conteiners/ForAllStyle'
import Center from './Center'
import Left from './Left'
import Right from './Right'
import useMediaQuery from '@material-ui/core/useMediaQuery'

function Container() {
  const matches = useMediaQuery('(min-width:600px)')

  return (
    <>
      {matches ? (
        <BodyForAll id="forYou">
          <Left />
          <Center />
          <Right />
        </BodyForAll>
      ) : (
        <BodyForAll id="forYou">
          <Left />
        </BodyForAll>
      )}{' '}
    </>
  )
}

export default Container
