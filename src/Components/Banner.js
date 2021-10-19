import React from 'react'
import { BodyBanner, BodyBannerLeft, BodyBannerRight, CardImage, TextoBanner } from '../Styles/Componets/BannerStyle'

import AppleIcon from '@material-ui/icons/Apple'
import ShopIcon from '@material-ui/icons/Shop'
import { LinkButton } from '../Styles/Global.js/Global'

function Banner() {
  return (
    <BodyBanner>
      <BodyBannerLeft>
        <div>
          <h1 style={{ marginTop: '0' }}>Ser Nubank é reinventar sua vida financeira </h1>
        </div>

        <TextoBanner>
          <p>
            Conta com rendimento acima da poupança, cartão de crédito sem anuidade e o melhor: resolva tudo pelo app.
          </p>
        </TextoBanner>
        <div style={{ display: 'flex', alignItems: 'center', color: '#9400d3' }}>
          <LinkButton>Quero ser Nubank</LinkButton>
          <AppleIcon style={{ marginLeft: '2vw', fontSize: '50', cursor: 'pointer' }} />
          <ShopIcon style={{ marginLeft: '2vw', fontSize: '50', cursor: 'pointer' }} />
        </div>
      </BodyBannerLeft>

      <BodyBannerRight>
        <CardImage src="https://fdr.com.br/wp-content/uploads/2020/04/catao.png" alt="seila" />
      </BodyBannerRight>
    </BodyBanner>
  )
}

export default Banner
