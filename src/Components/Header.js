import React from 'react'
import { HeaderContainer, HeaderLeft, HeaderRight } from '../Styles/Componets/HeaderStyles'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { LinkButton } from '../Styles/Global.js/Global'

function Header({ currentBackground }) {
  return (
    <>
      {currentBackground ? (
        <HeaderContainer style={{ backgroundColor: 'white', boxShadow: '0px 28px 50px -30px #9400D3' }}>
          <HeaderLeft>
            <a href="/">Nubank </a> <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
            <a href="Digital ">Conta Digital</a>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginRight: '-10px' }} />
            <a href="#forYou">Para Você</a>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
          </HeaderLeft>
          <HeaderRight>
            <LinkButton>Quero ser um Nubank</LinkButton>
            <p>Login</p>
          </HeaderRight>
        </HeaderContainer>
      ) : (
        <HeaderContainer>
          <HeaderLeft>
            <a href="id">Nubank </a> <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
            <a href="id">Conta Digital</a>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer', marginRight: '-10px' }} />
            <a href="id">Para Você</a>
            <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} />
          </HeaderLeft>
          <HeaderRight>
            <LinkButton>Quero ser um Nubank</LinkButton>
            <p>Login</p>
          </HeaderRight>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
