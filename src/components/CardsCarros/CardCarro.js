import React from 'react'
import {Card, FotoCarro, Titulo, Descricao, Preco, BotaoComprar, Prazo} from './styles'

class CardCarro extends React.Component {
    render() {
        return (
        <div>
            <Card>
                <FotoCarro src="https://picsum.photos/280/185"></FotoCarro>
                <Titulo> {this.props.nameCar}</Titulo>
                <hr />
                <Descricao>{this.props.description}</Descricao>
                <Preco>R${this.props.price}</Preco>
                <BotaoComprar>Comprar</BotaoComprar>
                <Prazo>Prazo de entrega: 1 semana</Prazo>
            </Card>
        </div>     
        )
    }
}

export default CardCarro