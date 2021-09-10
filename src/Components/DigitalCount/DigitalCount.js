import React from 'react'
import {
  DigitalCountLeft,
  DigitalCountRight,
  DigitalCountRightTop,
  InfoDigitalCount,
} from '../../Styles/Componets/DigitalCountsStyle'
import Smartphone from '../../Images/imageedit_1_7339400014.png'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { Body, BottomBorder, ButtonBenefits, DivButtomBenfits } from '../../Styles/Global.js/Global'
import DigitalCountBennefits from './DigitalCountBennefits'

function DigitalCount() {
  return (
    <Body style={{ justifyContent: 'center' }}>
      <DigitalCountLeft>
        <img src={Smartphone} alt="celular" />
      </DigitalCountLeft>
      <DigitalCountRight>
        <DigitalCountRightTop>
          <h5>CONTA DIGITAL</h5>
          <p
            style={{
              marginBottom: 0,
              marginTop: '1px',
              fontSize: '48px',
              color: '#232224',
              fontFamily: 'Sora, sans-serif',
            }}
          >
            Tudo pelo App.
          </p>
          <p>
            Nossa conta digital com mais de 20 milhões de clientes em todo o Brasil. Pague suas contas, ajuste seu
            limite, bloqueie e desbloqueie o cartão quando quiser e acompanhe cada movimentação em tempo real. Tudo pelo
            aplicativo.
          </p>
        </DigitalCountRightTop>
        <InfoDigitalCount>
          <DigitalCountBennefits type="onlineAccount" />
          <DigitalCountBennefits type="2" />
          <DigitalCountBennefits type="3" />
          <DigitalCountBennefits type="4" />
        </InfoDigitalCount>
        <DivButtomBenfits>
          <ArrowForwardIcon />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <ButtonBenefits>Confira os beneficios</ButtonBenefits>
            <BottomBorder></BottomBorder>
          </div>
        </DivButtomBenfits>
      </DigitalCountRight>
    </Body>
  )
}

export default DigitalCount
