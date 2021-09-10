import React, { useState } from 'react'
import {
  BorderBottomYiel,
  Text,
  TotalValue,
  YieldLeft,
  YieldRight,
  YieldValues,
} from '../Styles/Componets/ YieldStyles'

import { Body } from '../Styles/Global.js/Global'
import CardYield from './CardYield'

function Yield() {
  const [inicialValue, setInicialValue] = useState(500)
  const [monthValue, setMonthValue] = useState(100)
  const [year, setYearValue] = useState(1)

  const Iv = inicialValue

  const i = year * 12

  const logica =
    monthValue === 0 ? Iv * (1 + 0.325) : Iv === 0 ? monthValue * i * (1 + 0.25) : monthValue * i + Iv * (1 + 2.301)

  const format = logica.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const handleInicialValue = (operator, value) => {
    if (operator === '-') {
      setInicialValue(value - 100)
      if (value <= 0) {
        setInicialValue(0)
      }
    } else {
      setInicialValue(value + 100)
    }
  }
  const handleMonthValue = (operator, value) => {
    if (operator === '-') {
      setMonthValue(value - 100)
      if (value <= 0) {
        setMonthValue(0)
      }
    } else {
      setMonthValue(value + 100)
    }
  }
  const handleYearValue = (operator, value) => {
    if (operator === '-') {
      setYearValue(value - 1)
      if (value <= 1) {
        setYearValue(1)
      }
    } else {
      setYearValue(value + 1)
    }
  }

  return (
    <Body>
      <YieldLeft>
        <h5>DINHEIRO</h5>
        <h2>Seu dinheiro pode virar mais dinheiro.</h2>
        <p>
          Na conta do Nubank, seu dinheiro tem rendimento a 100% do CDI e fica disponível para ser usado a qualquer
          momento.
        </p>
        <CardYield title="Depósito inicial" value={inicialValue} handleValueChange={handleInicialValue} />
        <CardYield title="Todo mês depositando" value={monthValue} handleValueChange={handleMonthValue} />
        <CardYield title="Resgate em" time={year} handleValueChange={handleYearValue} />
      </YieldLeft>
      <YieldRight>
        <YieldValues>
          {year === 1 ? <h5>Em {year} ano você teria</h5> : <h5>Em {year} anos você teria</h5>}
          <TotalValue>{format}</TotalValue>
          <BorderBottomYiel></BorderBottomYiel>
          <Text>
            Esses valores não são uma garantia de rentabilidade futura, mas uma estimativa projetada na taxa do CDI de
            hoje para todo o período em que seu depósito permanecer na Conta do Nubank.
          </Text>
        </YieldValues>
      </YieldRight>
    </Body>
  )
}

export default Yield
