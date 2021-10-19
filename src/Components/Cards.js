import React from 'react'
import { BodyCards, CardLeft, CardRight, IconCards, RowContainer } from '../Styles/Componets/CardStyle'
import { DivInfo } from '../Styles/Global.js/Global'
import RssFeedRoundedIcon from '@material-ui/icons/RssFeedRounded'
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded'
import Card from '../Images/FrenteVersoCard.png'

function Cards() {
  return (
    <BodyCards>
      <CardLeft>
        <h5>Seu Roxinho</h5>
        <h2>Crédito e débito.</h2>
        <p>
          Pode chamar ele de roxinho. Além disso, pode chamar ele de moderno, gratuito e prático também. Facilidade e
          segurança para você em mais de 30 milhões de estabelecimentos, além dos benefícios Mastercard.
        </p>

        <RowContainer>
          <DivInfo>
            <IconCards>
              <RssFeedRoundedIcon style={{ fontSize: 40 }} />
            </IconCards>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
              <h4>Tecnologia Contactless</h4>
              <p>Tecnologia de pagamento por aproximação. Mais agilidade no dia a dia.</p>
            </div>
          </DivInfo>
        </RowContainer>

        <RowContainer>
          <DivInfo>
            <IconCards>
              <CreditCardRoundedIcon style={{ fontSize: 40 }} />
            </IconCards>
            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '2vw' }}>
              <h4>Cartão virtual</h4>
              <p>Você pode gerar cartões virtuais no app para suas compras online. Mais segurança.</p>
            </div>
          </DivInfo>
        </RowContainer>
      </CardLeft>
      <CardRight>
        <img src={Card} alt="Cards" />
      </CardRight>
    </BodyCards>
  )
}

export default Cards
