import React from "react";
import axios from "axios";
import styled from "styled-components";

const CardUsuario = styled.div`
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

export default class TelaLista extends React.Component {
  state = {
    lista: [],
  };

  componentDidMount() {
    this.pegaUsuarios();
  }

  pegaUsuarios = async () => {
      try {
        const url =
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
      const headers = {
        headers: {
          Authorization: "jucelia-xavier-guimaraes",
        },
      };

      const response = await axios.get(url, headers)
      this.setState({lista: response.data})
      } catch(error){
        console.log(error.response.data.message)

      }
  
  };

  deleteUsuario = async (id) => {
      try {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id} `;
        const headers = {
          headers: {
            Authorization: "jucelia-xavier-guimaraes",
          },
        };
        await axios.delete(url, headers)
        alert("usuário deletado")
        this.pegaUsuarios()
      } catch (err) {
        alert(err.response.data.message)
      }
  
  
  };

  render() {
    const listaUsuarios = this.state.lista.map((user) => {
      return (
        <CardUsuario key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => this.deleteUsuario(user.id)}>X</button>
        </CardUsuario>
      );
    });

    return (
      <div>
        <p>TelaLista</p>
        <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
        {listaUsuarios}
      </div>
    );
  }
}