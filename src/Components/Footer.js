import React from 'react'
import { FooterContainer, SocialMidias } from '../Styles/Componets/FooterStyle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FacebookIcon from '@material-ui/icons/Facebook'
import YouTubeIcon from '@material-ui/icons/YouTube'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

function Footer() {
  return (
    <FooterContainer>
      <div>
        <p style={{ color: 'black', cursor: 'none' }}> Nao tem nada aqui haha</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <p>Feito pelo Brabo do murilo</p>
        <FavoriteIcon />
      </div>
      <SocialMidias>
        <a href="https://www.facebook.com/murilo.duarte.98">
          <FacebookIcon style={{ fontSize: 40, cursor: 'pointer' }} />
        </a>
        <a href="https://www.youtube.com/watch?v=HwlZOeB60CQ">
          <YouTubeIcon style={{ fontSize: 40, cursor: 'pointer' }} />
        </a>
        <a href="https://www.instagram.com/muriloduarte700/">
          <InstagramIcon style={{ fontSize: 40, cursor: 'pointer' }} />
        </a>
        <a href="https://twitter.com/nubank">
          <TwitterIcon style={{ fontSize: 40, cursor: 'pointer' }} />
        </a>
      </SocialMidias>
    </FooterContainer>
  )
}

export default Footer
