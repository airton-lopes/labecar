import React from 'react'
import axios from 'axios'
import {ConteudoInfoVenda, BotaoComprar, ConteudoInfo, Vender, ConfirmaPostado, ConfirmaNaoPostado, LabeCar, Labe, Car} from '../PaginaVender/style'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"

class PaginaVender extends React.Component {
    state = {
        name: "",
        description: "",
        price: "",
        paymentMethod: "Card",
        shipping: 5,
        alertaPostado: false,
        alertaNaoPostado: false
    }

    createCars = () => {
        const body = {
        name: this.state.name,
        description: this.state.description,
        price: this.state.price,
        paymentMethod: this.state.paymentMethod,
        shipping: this.state.shipping
        }

        axios.post(baseUrl, body).then(() => {
        this.setState({name: "", description: "", price: "", paymentMethod: "Card", shipping: 5})
        this.setState({alertaPostado: !this.state.alertaPostado})
        
        }).catch(error => {
        this.setState({alertaNaoPostado: !this.state.alertaNaoPostado})
        })
      }

    onChangeCarro = (event) => {
        this.setState({name: event.target.value})
    }
    
    onChangeDescription = (event) => {
    this.setState({description: event.target.value})
    }
    
    onChangePrice = (event) => {
    this.setState({price: event.target.value})
    }
    
    onClickPostado = (event) => {
    this.setState({alertaPostado: !this.state.alertaPostado})
    }

    onClickNaoPostado = (event) => {
    this.setState({alertaNaoPostado: !this.state.alertaNaoPostado})
    }
    

    render() {

        const mostraAlertaPostado = () => {
            if (this.state.alertaPostado === true) {
              return <ConfirmaPostado onClick={this.onClickPostado}><h1>Parabéns!</h1><h2>Seu anúncio foi postado com sucesso!</h2></ConfirmaPostado>
            } else return ""
          }

        const mostraAlertaNaoPostado = () => {
            if (this.state.alertaNaoPostado === true) {
              return <ConfirmaNaoPostado onClick={this.onClickNaoPostado}><h1>Atenção! Seu anúncio não foi postado!</h1><h2>Verifique as informações e tente novamente!</h2></ConfirmaNaoPostado>
            } else return ""
          }

        return (
            <ConteudoInfoVenda>
                {mostraAlertaPostado()}
                {mostraAlertaNaoPostado()}
                <LabeCar>
                    <Labe onClick={this.props.mudaHome}>Labe</Labe><Car onClick={this.props.mudaHome}>Car</Car>
                    <BotaoComprar onClick={this.props.mudaComprar}>Quero comprar</BotaoComprar>
                </LabeCar>
                <ConteudoInfo>
                    <h1>Venda seu carro</h1>
                    <h3>Informe os seguintes dados sobre seu carro:</h3>
                    <label>Carro:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder="Marca, modelo e ano" value={this.state.carro} onChange={this.onChangeCarro} /></label>
                    <label>Descrição: &nbsp;&nbsp;&nbsp;<input type="text" placeholder="Cor, estado, opcionais" value={this.state.description} onChange={this.onChangeDescription}  /></label>
                    <label>Valor: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Preço do carro" value={this.state.price} onChange={this.onChangePrice}  /></label>
                    <h3>E agora sobre você:</h3>
                    <label>Nome: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" placeholder="Seu nome" /></label>
                    <label>Email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" placeholder="Seu email" /></label>
                    <Vender onClick={() => this.createCars()}>Vender</Vender>
                </ConteudoInfo>
            </ConteudoInfoVenda>
        )
    }
}

export default PaginaVender
