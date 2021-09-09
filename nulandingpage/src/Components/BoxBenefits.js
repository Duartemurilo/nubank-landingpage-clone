import React from 'react'
import { IconBenefits } from '../Styles/Componets/RowBenefitsStyle'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import CachedIcon from '@material-ui/icons/Cached'
import CreditCardIcon from '@material-ui/icons/CreditCard'
import HeadsetIcon from '@material-ui/icons/Headset'

function BoxBenefits({ type }) {
  const teste = () => {
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

  return <div>{teste()}</div>
}

export default BoxBenefits
