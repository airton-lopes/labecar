import styled from 'styled-components'

export const Global = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0px 7vw 10vh 7.5vw;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(74,111,199,1) 0%, rgba(74,111,199,1) 35%, rgba(255,255,255,1) 100%);
`
export const Pagina = styled.div`
  text-align: center;
  padding: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const HeaderCompras = styled.div`
  width: 100vw;
`
export const Titulo = styled.h1`
  position: relative;
  top: 12vh;
  font-size: 2.5em;
  color: white;
  text-shadow: black 1px 0 16px; 
`
export const LabeCar = styled.div`
  cursor: pointer;
  position: relative;
  top: -10vh;
  right: 35vw;
`
export const Labe = styled.span`
  font-size: 72px;
  font-weight: bold;
  color: white;
  text-shadow: black 1px 0 32px;
`
export const Car = styled.span`
  font-size: 72px;
  font-weight: bold;
  color: #C7AE71;
  text-shadow: black 1px 0 32px;
`
export const BotaoVender = styled.button`
  height: 50px;
  width: 120px;
  border-radius: 20px;
  border: none;
  background-color: #C7AE71;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  position: relative;
  top: -18vh;
  left: 35vw;
  :hover{
      background-color: #C5B58D
  }
  :active{
      background-color: #C7AE71
  }
`
export const FiltrarMinimo = styled.input`
  width: 150px;
  height: 35px;
  display: inline-block;
  margin-left: 2vw;
  border: none;
  outline: none;
  background: #ecf0f3;
  color: #555;
  border-radius: 25px;
  padding: 10px 5px 10px 20px;
  box-shadow: inset 5px 5px 5px #cbced1,
                        inset -5px -5px 5px #ffffff;
                        :hover {
                          background: #FFFFFF;
                              }
`
export const FiltrarMaximo = styled.input`
  width: 150px;
  height: 35px;
  display: inline-block;
  margin-left: 1vw;
  border: none;
  outline: none;
  background: #ecf0f3;
  color: #555;
  border-radius: 25px;
  padding: 10px 5px 10px 20px;
  box-shadow: inset 5px 5px 5px #cbced1,
                        inset -5px -5px 5px #ffffff;
                        :hover {
                          background: #FFFFFF;
                              }
`
export const Buscar = styled.input`
  width: 250px;
  height: 35px;
  display: inline-block;
  margin-right: 2vw;
  border: none;
  outline: none;
  background: #ecf0f3;
  color: #555;
  border-radius: 25px;
  padding: 10px 5px 10px 20px;
  box-shadow: inset 5px 5px 5px #cbced1,
                        inset -5px -5px 5px #ffffff;
                        :hover {
                          background: #FFFFFF;
                              }
`
export const Ordenar = styled.select`
  width: 250px;
  height: 35px;
  display: inline-block;
  margin-right: 2vw;
  border: none;
  outline: none;
  background: #ecf0f3;
  color: #555;
  border-radius: 25px;
  padding: 10px 5px 10px 5px;
  box-shadow: inset 5px 5px 5px #cbced1,
                        inset -5px -5px 5px #ffffff;
                        :hover {
                          background: #FFFFFF;
                              }
`
export const FiltroEOrdenar = styled.div`
  width: 88vw;
  display: flex;
  justify-content: space-between;
`
export const GridCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
export const MinMax = styled.div`
    display: flex;
    flex-direction: flex-start;
`
export const BuscaSelect = styled.div`
    display: flex;
    flex-direction: flex-end;
`