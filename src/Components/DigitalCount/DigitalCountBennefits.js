import React from 'react'

import SmartphoneIcon from '@material-ui/icons/Smartphone'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SettingsIcon from '@material-ui/icons/Settings'
import { DivInfoBennefits, IconDigitalCount } from '../../Styles/Componets/DigitalCount/DigitalCountBennefitsStyle'

function DigitalCountBennefits({ type }) {
  const renderBennefits = () => {
    switch (type) {
      case 'onlineAccount':
        return (
          <DivInfoBennefits style={{ width: '100%' }}>
            <IconDigitalCount>
              <SmartphoneIcon style={{ fontSize: 40 }} />
            </IconDigitalCount>
            <div style={{ display: 'flex', flexDirection: 'column', width: '60%' }}>
              <h4>Tudo na palma da sua mão</h4>
              <p>Conta digital. Você resolve tudo pelo App. Tudo.</p>
            </div>
          </DivInfoBennefits>
        )

      case '2':
        return (
          <DivInfoBennefits>
            <IconDigitalCount>
              <ScheduleIcon style={{ fontSize: 40 }} />
            </IconDigitalCount>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Sem filas ou burocracias</h4>
              <p>Investimos no melhor suporte pra isso. Não tem filas. Economia de tempo.</p>
            </div>
          </DivInfoBennefits>
        )
      case '3':
        return (
          <DivInfoBennefits>
            <IconDigitalCount>
              <SettingsIcon style={{ fontSize: 40 }} />
            </IconDigitalCount>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Configure tudo no app</h4>
              <p>Toda a configuração e acesso aos novos recursos a um clique de distância.</p>
            </div>
          </DivInfoBennefits>
        )
      default:
    }
  }
  return <div>{renderBennefits()}</div>
}

export default DigitalCountBennefits
