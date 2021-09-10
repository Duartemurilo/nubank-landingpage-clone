import React from 'react'

import CheckIcon from '@material-ui/icons/Check'
import { BenefitsDiv, CheckCircle } from '../../Styles/Componets/BenfitsStyles'

function Benefits({ title, text }) {
  return (
    <BenefitsDiv>
      <CheckCircle>
        <CheckIcon />
      </CheckCircle>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>{title}</p>
        <p style={{ color: '#767576', marginTop: 2 }}>{text}</p>
      </div>
    </BenefitsDiv>
  )
}

export default Benefits
