import React, { Component } from 'react'
import PaginaComprar from './PaginaComprar/PaginaComprar'
import PaginaVender from './PaginaVender/PaginaVender'
import PaginaHome from './PaginaHome/PaginaHome'

export class AppContainer extends Component {
  state = {
    home: true,
    vender: false,
    comprar: false
  }

  mudaEstadoVender = () => {
    this.setState({home: false, vender: true, comprar: false})
  }

  mudaEstadoComprar = () => {
    this.setState({home: false, vender: false, comprar: true})
  }

  mudaEstadoHome = () => {
    this.setState({home: true, vender: false, comprar: false})
  }

  render() {
    const renderizaTela = () => {
      if (this.state.vender === true) {
        return <PaginaVender mudaComprar={this.mudaEstadoComprar} mudaHome={this.mudaEstadoHome}/>
      } else if (this.state.comprar === true) {
        return <PaginaComprar mudaVender={this.mudaEstadoVender} mudaHome={this.mudaEstadoHome}/>
      } else return <PaginaHome mudaComprar={this.mudaEstadoComprar} mudaVender={this.mudaEstadoVender}/>
    }

    return (
      <div>{renderizaTela()}</div>
    )
  }
}