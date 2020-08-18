import React from 'react'
import {Global, Pagina, Titulo, BotaoVender, HeaderCompras, FiltrarMinimo, FiltrarMaximo, Buscar, Ordenar, FiltroEOrdenar, LabeCar, Labe, Car, GridCards, MinMax, BuscaSelect} from './styles'
import CardCarro from '../CardsCarros/CardCarro'
import axios from 'axios'

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/futureCarOne/cars"

class PaginaComprar extends React.Component {
    state = {
        listaCarros: [],
        valorMinimo: "",
        valorMaximo: "",
        buscar: "",
        inputOrdenar: "Crescente"
    }

    onChangeMinimo = (event) => {
      this.setState({ valorMinimo: event.target.value })
    }
  
    onChangeMaximo = (event) => {
      this.setState({ valorMaximo: event.target.value })
    }
  
    funcaoBuscar = (event) => {
      this.setState({ buscar: event.target.value })
    }

    onChangeOrdenar = (event) => {
        this.setState({inputOrdenar: event.target.value})
    }
    
    componentDidMount = () => {
        this.mostraCarros()
    }

    mostraCarros = () => {
        axios.get(baseUrl).then(response => {
            this.setState({listaCarros: response.data.cars})
        }).catch(e => {
            console.log(e.message)  
        })
    }

    render() {
        let lista = this.state.listaCarros || []
        
        switch (this.state.inputOrdenar) {
            case 'Crescente':
                  lista = this.state.listaCarros.sort(function(a, b) {
                      return a.price - b.price
              })
              break;
            case 'Decrescente':
                  lista = this.state.listaCarros.sort(function(a, b) {
                      return b.price - a.price
              })
              break;
            case 'Titulo':
                  lista = this.state.listaCarros.sort(function (a, b) {
                      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
              })
              break;
            default:
              lista = this.state.listaCarros
          }

        let itensFiltrados = this.state.listaCarros
            if(this.state.valorMinimo !== "") {
            itensFiltrados = itensFiltrados.filter((elemento) => {
                return parseFloat(elemento.price) >= this.state.valorMinimo ? true : false
            })
            }
            if(this.state.valorMaximo !== "") {
            itensFiltrados = itensFiltrados.filter((elemento) => {
                return parseFloat(elemento.price) <= this.state.valorMaximo ? true : false
            })
            }
            if(this.state.buscar !== "") {
                itensFiltrados = itensFiltrados.filter((elemento) => {
                return (elemento.name.toLowerCase().includes(this.state.buscar.toLowerCase()) ? true : false) || (elemento.description.toLowerCase().includes(this.state.buscar.toLowerCase()) ? true : false)
                })
            }    

        console.log(this.state.listaCarros)
        return (
        <Global>
            <Pagina>
                <HeaderCompras>
                    <Titulo>ENCONTRE SEU CARRO NOVO</Titulo>
                    <LabeCar onClick={this.props.mudaHome}>
                        <Labe>Labe</Labe><Car>Car</Car>
                    </LabeCar>
                    <BotaoVender onClick={this.props.mudaVender}>Quero vender</BotaoVender>
                </HeaderCompras>
                <FiltroEOrdenar>
                    <MinMax>
                    <FiltrarMinimo type="text" value={this.state.valorMinimo} placeholder="Valor minimo" onChange={this.onChangeMinimo}/>
                    <FiltrarMaximo type="text" value={this.state.valorMaximo} placeholder="Valor maximo"  onChange={this.onChangeMaximo}/>
                    </MinMax>
                    <BuscaSelect>
                    <Buscar type="text" value={this.state.buscar} placeholder="Buscar produto"  onChange={this.funcaoBuscar}/>
                    <Ordenar value={this.state.inputOrdenar} onChange={this.onChangeOrdenar}>
                        <option value="Titulo">Ordenar: Titulo</option>
                        <option value="Crescente">Ordenar: Preco crescente</option>
                        <option value="Decrescente">Ordenar: Preco decrescente</option>
                    </Ordenar>
                    </BuscaSelect>
                </FiltroEOrdenar>
                <GridCards>
                {itensFiltrados.map((car) => {
                    return <CardCarro 
                    nameCar = {car.name}
                    description = {car.description}
                    price = {car.price}
                    />
                })}
                </GridCards>
            </Pagina>
        </Global> 
        )
    }
}

export default PaginaComprar