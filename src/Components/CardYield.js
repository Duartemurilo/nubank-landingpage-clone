import React from 'react'
import { ButtomYield, ContainerValue, DepositContainer } from '../Styles/Componets/ YieldStyles'

function CardYield({ title, value, time, handleValueChange }) {
  const timeDisplay = time > 1 ? `${time} anos` : `${time} ano`
  const valueToDisplay = value >= 0 ? `R$ ${value}` : timeDisplay
  const teste = valueToDisplay === `R$ ${value}` ? value : time

  return (
    <div>
      <DepositContainer>
        <h5>{title}</h5>
        <ContainerValue>
          <p>{valueToDisplay}</p>
          <div style={{ display: 'flex' }}>
            {value <= 0 || time === 1 ? (
              <>
                <ButtomYield
                  style={{ backgroundColor: 'rgba(17, 17, 17, 0.2)', cursor: 'not-allowed' }}
                  onClick={() => handleValueChange('-', teste)}
                >
                  -
                </ButtomYield>
                <ButtomYield onClick={() => handleValueChange('+', teste)}>+</ButtomYield>
              </>
            ) : (
              <>
                <ButtomYield onClick={() => handleValueChange('-', teste)}>-</ButtomYield>
                <ButtomYield onClick={() => handleValueChange('+', teste)}>+</ButtomYield>
              </>
            )}
          </div>
        </ContainerValue>
      </DepositContainer>
    </div>
  )
}

export default CardYield
