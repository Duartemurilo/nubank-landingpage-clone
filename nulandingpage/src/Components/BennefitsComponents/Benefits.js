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
        <p style={{ marginLeft: '16px', marginTop: 0, marginBottom: 0 }}>{title}</p>
        <p style={{ marginLeft: '16px', color: '#767576', marginTop: 2, marginBottom: 0 }}>{text}</p>
      </div>
    </BenefitsDiv>
  )
}

export default Benefits
