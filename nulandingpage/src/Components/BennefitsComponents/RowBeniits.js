import React from 'react'
import {
  ContainerTextIcon,
  RowBenefitsContainer,
  RowBenefitsLeft,
  RowBenefitsRight,
  RowContainer,
} from '../../Styles/Componets/RowBenefitsStyle'

import { Body } from '../../Styles/Global.js/Global'
import BoxBenefits from './BoxBenefits'

function RowBenifits() {
  return (
    <Body
      style={{
        marginTop: '30vh',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: '#9400d3',
      }}
    >
      <RowBenefitsContainer>
        <RowBenefitsLeft>
          <div>
            <p style={{ fontSize: '16px' }}>O MELHOR</p>
            <h2>Por que Nubank?</h2>
          </div>
        </RowBenefitsLeft>
        <RowBenefitsRight>
          <RowContainer>
            <ContainerTextIcon>
              <BoxBenefits type="1" />
              <p>Conta rende mais que a poupança </p>
            </ContainerTextIcon>
            <ContainerTextIcon>
              <BoxBenefits type="2" />
              <p>Transferências e TEDs ilimitadas</p>
            </ContainerTextIcon>
            <ContainerTextIcon>
              <BoxBenefits type="3" />
              <p>Conta e cartão 100% gratuitos </p>
            </ContainerTextIcon>
            <ContainerTextIcon>
              <BoxBenefits type="4" />
              <p>O melhor suporte 24h do Brasil </p>
            </ContainerTextIcon>
          </RowContainer>
        </RowBenefitsRight>
      </RowBenefitsContainer>
    </Body>
  )
}

export default RowBenifits
