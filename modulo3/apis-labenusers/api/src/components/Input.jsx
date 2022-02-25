import React from "react";
import axios from "axios";


export default class Input extends React.Component {
    state = {
        inputNome: "",
        inputEmail: "",
    };

    addNome = (e) => {
        this.setState({ inputNome: e.target.value });
    };

    addEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
    };

    novoUser = () => {
        const body = {
            nome: this.state.inputNome,
            email: this.state.inputEmail

        };

        axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "Jucelia-Xavier-guimaraes",
          },
        }
      )
      .then((res) => {
        alert(" Novo usuário criado com sucesso!");
      })
      .catch((err) => {
        alert("Erro ao criar o novo usuário!");
      }); 

    };


    render() {
        return (
            <div>
                <p>Criar Usuário</p>
                <div>
                    <input 
                    placeholder="nome"
                    value={this.state.inputNome}
                    onChange={this.addNome}
                    />
                     <input 
                    placeholder="email"
                    value={this.state.inputEmail}
                    onChange={this.addEmail}
                    />
                    <button onClick={this.novoUser}> Novo </button>
                </div>

            </div>
        );
    }
}