import React from 'react'
import {Pagina, BemVindo, Labe, Car, ImagemLogo, BotaoComprar, BotaoVender, Copyright, LabeCar, ContainerButtons, Global} from './styles'

class PaginaHome extends React.Component {
    render() {
        return (
          <Global>   
            <Pagina>
              <BemVindo>Bem-vindo à</BemVindo>
              <LabeCar>
                <Labe>Labe</Labe><Car>Car</Car>
              </LabeCar>
              <ContainerButtons>
                <BotaoComprar onClick={this.props.mudaComprar} mudaHome={this.mudaEstadoHome}>Quero comprar</BotaoComprar>
                <BotaoVender onClick={this.props.mudaVender} mudaHome={this.mudaEstadoHome}>Quero vender</BotaoVender>
              </ContainerButtons>
              <Copyright>©	Copyright	2020	Todos	os	direitos	reservados</Copyright>
            </Pagina>
          </Global>           
        )
    }
}

export default PaginaHome
