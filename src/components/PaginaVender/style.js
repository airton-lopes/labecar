import styled from 'styled-components'

export const ConteudoInfoVenda = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-image: url("https://motorillustrated.com/wp-content/uploads/2019/03/2019-Lincoln-Continental-27.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    > label {
        margin: 10px;
    }
`
export const LabeCar = styled.div`
  position: fixed;
  left: 5vw;
  top: 5vh;
  cursor: pointer;
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
export const BotaoComprar = styled.button`
  height: 50px;
  width: 120px;
  border-radius: 20px;
  border: none;
  background-color: #4A6FC7;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  cursor: pointer;
  position: fixed;
  right: 10vw;
  top: 10vh;
  :hover{
      background-color: #7388C7;
  }
  :active{
      background-color: #4A6FC7;
  }
`
export const ConteudoInfo = styled.div `
    display: flex;
    border-radius: 20px;
    width: 600px;
    height: 1000px;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 8px;
    background-color: #ecf0f3;
    box-shadow: 0px 0px 10px #ffffff;
    opacity: 0.92;
    z-index: 99;
    overflow: auto;
        > label {
            font-size: 1.2em;
            font-weight: 600;
            margin: 4px 64px;
            
        > input {
            width: 250px;
            border: none;
            outline: none;
            background: none;
            color: #555;
            border-radius: 25px;
            padding: 10px 5px 10px 20px;
            box-shadow: inset 5px 5px 5px #cbced1,
                        inset -5px -5px 5px #ffffff;
                        :hover {
                          background: #FFFFFF;
                              }
                        } 
        }
`
export const Vender = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 20px;
  border: none;
  background-color: #C7AE71;
  color: white;
  box-shadow: 2px 2px 2px black;
  font-weight: bold;
  font-size: 20px;
  outline: none;
  background-position: center;
  cursor: pointer;
  text-align: center;
  margin-bottom: 2vh;
  margin-top: 5vh;
  :hover{
    background-color: #7A6E52;
    background: #7A6E52 radial-gradient(circle, transparent 1%, #7A6E52 1%) center/15000%;

  }
  :active{
    background-color: #C7AE71;
    background-size: 100%;
    transition: background 0s;
  }
`
export const ConfirmaPostado = styled.div`
  background-color: #2ecc71;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  opacity: 0.8;
  z-index: 100;
  transition: 3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    &:hover{
      opacity: 0;
      transition: 7s;
    }
    &:active{
      opacity: 0;
      transition: 7s;
    }
    > h1 {
      font-size: 3em;
      color: #ffffff;
    }
    > h2 {
      font-size: 3em;
      color: #ffffff;
    }
`
export const ConfirmaNaoPostado = styled.div`
  background-color: #e74c3c;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  opacity: 0.8;
  z-index: 100;
  transition: 3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    &:hover{
      opacity: 0;
      transition: 7s;
    }
    &:active{
      opacity: 0;
      transition: 7s;
    }
    > h1 {
      font-size: 3em;
      color: #ffffff;
    }
    > h2 {
      font-size: 3em;
      color: #ffffff;
    }
`