import React from 'react'
import { ButtonLogin, HeaderContainer, HeaderLeft, HeaderRight, NavLinks } from '../Styles/Componets/HeaderStyles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { LinkButton } from '../Styles/Global.js/Global'
import { Color } from '../Constants/color'

function Header({ currentBackground }) {
  return (
    <>
      {currentBackground ? (
        <HeaderContainer style={{ backgroundColor: 'white', boxShadow: '0px 28px 50px -30px #9400D3' }}>
          <HeaderLeft>
            <div style={{ display: 'flex' }}>
              <NavLinks>Conta Digital</NavLinks>
              <KeyboardArrowDownIcon style={{ color: { Color }, cursor: 'pointer', marginLeft: -10 }} />
            </div>
            <div style={{ display: 'flex' }}>
              <NavLinks>Para Você</NavLinks>
              <KeyboardArrowDownIcon style={{ color: { Color }, cursor: 'pointer' }} />
            </div>
          </HeaderLeft>
          <HeaderRight>
            <LinkButton>Quero ser um Nubank</LinkButton>
            <ButtonLogin>Login</ButtonLogin>
          </HeaderRight>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderLeft>
            <NavLinks>Nubank </NavLinks>{' '}
            <KeyboardArrowDownIcon style={{ color: { Color }, cursor: 'pointer', marginRight: '-10px' }} />
            <NavLinks>Conta Digital</NavLinks>
            <KeyboardArrowDownIcon style={{ color: { Color }, cursor: 'pointer' }} />
            <NavLinks>Para Você</NavLinks>
            <KeyboardArrowDownIcon style={{ color: { Color }, cursor: 'pointer' }} />
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
