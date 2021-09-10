import React from 'react'
import { DivInfo, IconContainer } from '../../Styles/Global.js/Global'
import SmartphoneIcon from '@material-ui/icons/Smartphone'
import ScheduleIcon from '@material-ui/icons/Schedule'
import SettingsIcon from '@material-ui/icons/Settings'

function DigitalCountBennefits({ type }) {
  const renderBennefits = () => {
    switch (type) {
      case 'onlineAccount':
        return (
          <DivInfo>
            <IconContainer>
              <SmartphoneIcon style={{ fontSize: 40 }} />
            </IconContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Tudo na palma da sua mão</h4>
              <p>Conta digital. Você resolve tudo pelo App. Tudo.</p>
            </div>
          </DivInfo>
        )

      case '2':
        return (
          <DivInfo>
            <IconContainer>
              <ScheduleIcon style={{ fontSize: 40 }} />
            </IconContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Sem filas ou burocracias</h4>
              <p>Investimos no melhor suporte pra isso. Não tem filas. Economia de tempo.</p>
            </div>
          </DivInfo>
        )
      case '3':
        return (
          <DivInfo>
            <IconContainer>
              <SettingsIcon style={{ fontSize: 40 }} />
            </IconContainer>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h4>Configure tudo no app</h4>
              <p>Toda a configuração e acesso aos novos recursos a um clique de distância.</p>
            </div>
          </DivInfo>
        )
      default:
    }
  }
  return <div>{renderBennefits()}</div>
}

export default DigitalCountBennefits
