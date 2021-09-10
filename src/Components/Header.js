import React from 'react'
import { ButtonLogin, HeaderContainer, HeaderLeft, HeaderRight, NavLinks } from '../Styles/Componets/HeaderStyles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { LinkButton } from '../Styles/Global.js/Global'

function Header({ currentBackground }) {
  return (
    <>
      {currentBackground ? (
        <HeaderContainer style={{ backgroundColor: 'white', boxShadow: '0px 28px 50px -30px #9400D3' }}>
          <HeaderLeft>
            <NavLinks>Nubank </NavLinks> <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
            <NavLinks>Conta Digital</NavLinks>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginRight: '-10px' }} />
            <NavLinks>Para Você</NavLinks>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
          </HeaderLeft>
          <HeaderRight>
            <LinkButton>Quero ser um Nubank</LinkButton>
            <ButtonLogin>Login</ButtonLogin>
          </HeaderRight>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderLeft>
            <NavLinks>Nubank </NavLinks> <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
            <NavLinks>Conta Digital</NavLinks>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginRight: '-10px' }} />
            <NavLinks>Para Você</NavLinks>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
          </HeaderLeft>
          <HeaderRight>
            <LinkButton>Quero ser um Nubank</LinkButton>
            <ButtonLogin>Login</ButtonLogin>
          </HeaderRight>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
