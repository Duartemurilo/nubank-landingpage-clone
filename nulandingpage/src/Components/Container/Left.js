import React from 'react'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Benefits from '../Benefits'
import {  ContainerBenefits, ContainerLeftDIV } from '../../Styles/Componets/Conteiners/ContenerLeftStyle';
import { BottomBorder , ButtonBenefits,DivButtomBenfits} from '../../Styles/Global.js/Global'


function Left() {
  return (
    <ContainerLeftDIV>
      <h2 style = {{color:'#9400d3' , fontSize:'18px',marginBottom:10}}>PARA TODOS</h2>
      <h1  style = {{fontSize:'4vw',marginBottom:0,marginTop:0}}>Completo.</h1>
      <p style = {{fontSize:'15px',color: '#767576'}}>Resolva seu dia a dia pelo celular. Sem filas, sem anuidade, sem tarifas abusivas. Cuide do seu dinheiro de um jeito simples. Somos eficientes para você usar seu dinheiro com o que realmente importa, sem tarifas de manutenção.</p>
      
      <ContainerBenefits>

        <Benefits title ='100% gratuito.' text = 'Isso mesmo, você não paga nada para abrir sua conta.'/>
        <Benefits title ='Sem taxas ou cobranças.' text = 'Não se preocupe com taxas adicionais ou anuidades.'/>
        <Benefits title ='O melhor suporte de todos.' text ='Segundo pesquisas, temos o melhor suporte pra você'/>

      </ContainerBenefits>
      <DivButtomBenfits>
      
        <ArrowForwardIcon/>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <ButtonBenefits>Confira os beneficios</ButtonBenefits>
        <BottomBorder></BottomBorder>
        </div>
      </DivButtomBenfits>
      </ContainerLeftDIV>

  )
}

export default Left
