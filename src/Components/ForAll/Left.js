import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { ContainerBenefits, ContainerResume, ForAllLeftDIV } from '../../Styles/Componets/Conteiners/ForAllLeftStyle'
import { BottomBorder, ButtonBenefits, DivButtomBenfits } from '../../Styles/Global.js/Global'
import Benefits from '../BennefitsComponents/Benefits'

function Left() {
  return (
    <ForAllLeftDIV>
      <ContainerResume>
        <h2>PARA TODOS</h2>
        <h1>Completo.</h1>
        <p>
          Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem tarifas abusivas. Cuide do seu dinheiro de um
          jeito simples. Somos eficientes para você usar seu dinheiro com o que realmente importa, sem tarifas de
          manutenção.
        </p>
      </ContainerResume>

      <ContainerBenefits>
        <Benefits title="100% gratuito." text="Isso mesmo, você não paga nada para abrir sua conta." />
        <Benefits title="Sem taxas ou cobranças." text="Não se preocupe com taxas adicionais ou anuidades." />
        <Benefits title="O melhor suporte de todos." text="Segundo pesquisas, temos o melhor suporte pra você" />
      </ContainerBenefits>

      <DivButtomBenfits id="DivButtomBenfits">
        <ArrowForwardIcon />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <ButtonBenefits>Confira os beneficios</ButtonBenefits>
          <BottomBorder></BottomBorder>
        </div>
      </DivButtomBenfits>
    </ForAllLeftDIV>
  )
}

export default Left
