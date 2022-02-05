import React from 'react'
import styled from 'styled-components'
import './App.css';

const Body = styled.div`
margin: 0;
padding: 0;
background-color: #282c34;
min-height: 100vh;
color: white;
`

const Form = styled.form`
  display: grid;
  grid-template-columns: 3fr 6fr 1fr;
  position: fixed;
  bottom: 0;
`

const Input = styled.input`
  font-family: Arial;
`

const Button = styled.button`
  color: #282c34;
`

export class Whatslab extends React.Component {

  state ={
    valorUser: '',
    valorMsg: '',
  }

  onChangeUser = (e) => {
    this.setState({valorUser: e.target.value})
  }

  onChangeMsg = (e) => {
    this.setState({valorMsg: e.target.value})
  }

  onClickBotao = () => {
    console.log('você clicou em enviar');
  }

render() {
  return (
    <Body>
      <Form>
        <Input user=''placeholder='Usuário'/>
        <Input placeholder='Digite aqui sua mensagem'/>
        <Button onClick={this.onClickBotao}>Enviar</Button>
      </Form>

    </Body>
  );
}
}

export default App;