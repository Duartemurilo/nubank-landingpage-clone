import React from 'react'

import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import CachedIcon from '@material-ui/icons/Cached'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import HeadsetIcon from '@material-ui/icons/Headset'
import { IconBenefits } from '../../Styles/Componets/RowBenefitsStyle'

function BoxBenefits({ type }) {
  const renderBennefits = () => {
    switch (type) {
      case '1':
        return (
          <IconBenefits>
            <AttachMoneyIcon style={{ fontSize: 40 }} />
          </IconBenefits>
        )

      case '2':
        return (
          <IconBenefits>
            <CachedIcon style={{ fontSize: 40 }} />
          </IconBenefits>
        )
      case '3':
        return (
          <IconBenefits>
            <CreditCardIcon style={{ fontSize: 40 }} />
          </IconBenefits>
        )
      case '4':
        return (
          <IconBenefits>
            <HeadsetIcon style={{ fontSize: 40 }} />
          </IconBenefits>
        )
      default:
        console.log(`n deu nd `)
    }
  }

  return <div>{renderBennefits()}</div>
}

export default BoxBenefits
