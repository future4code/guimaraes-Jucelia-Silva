import React from "react";
import axios from "axios"

export default class TelaCadastro extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  handleNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  criaUsuario = async () => {
    try {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
      const body = {
          name: this.state.nome,
          email: this.state.email
      }
      const headers = {
          headers: {
              Authorization: "jucelia-xavier-guimaraes"
          }
      }
  
      const response = await axios.post(url, body,headers) 
      this.setState({lista: response.data})
        alert("usuario criado com sucesso")
    } catch(error) {
      console.log(error.response.data.message)
    } 

   

  };

  render() {
    return (
      <div>
        <button onClick={this.props.irParaLista}>Ir para Lista</button>
        <p>TelaCadastro</p>
        <input
          placeholder="nome"
          value={this.state.nome}
          onChange={this.handleNome}
        />
        <input
          placeholder="email"
          value={this.state.email}
          onChange={this.handleEmail}
        />
        <button onClick={this.criaUsuario}>Criar usuário</button>
      </div>
    );
  }
}