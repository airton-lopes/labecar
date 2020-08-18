import styled from 'styled-components'

export const Card = styled.div`
  width: 300px;
  height: 370px;
  border-radius: 0 0px 0 20px;
  margin: 15px 15px 30px 15px;
  background-color: white;
  box-shadow: 8px 8px 8px #525E7A;  
  padding: 0 10px 10px 10px;
`
export const FotoCarro = styled.img`
  width: 280px;
  padding-top: 10px;
  height: 185px;
  transition: transform .5s;
  cursor: pointer;
  :hover{
      transform: scale(1.4);
  }
`
export const Titulo = styled.h2`
  margin: 0 0 -5px 0;  
`
export const Descricao = styled.p`
  margin: -5px 0 0 0;    
`
export const Preco = styled.h2`
  margin: 5px 0 0 0;
  font-size: 30px;  
`
export const BotaoComprar = styled.button`
  margin: 7px 0 9px 0;
  border-radius: 20px;
  border: none;
  background-color: #4A6FC7;
  width: 105px;
  height: 40px;
  color: white;
  font-weight: bold;
  font-size: 17px;
  outline: none;
  background-position: center;
  transition: background .8s;
  cursor: pointer;
  :hover{
    background: #7388C7 radial-gradient(circle, transparent 1%, #7388C7 1%) center/15000%;
  }
  :active{
    background-color: #4A6FC7;
    background-size: 100%;
    transition: background 0s;

  }
`
export const Prazo = styled.p`
  margin: 0px;
  font-size: 12px;  
`
