import React from "react";
import axios from "axios";

const urlNovoUsuario = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"


const headers = {
  headers: {
    Authorization: "Jucelia-Xavier-guimaraes"

  }
}
export default class Input extends React.Component {
    state = {
        inputNome: "",
        inputEmail: "",
    };

    addInputNome = (e) => {
        this.setState({ inputNome: e.target.value });
    };

    addInputEmail = (e) => {
        this.setState({ inputEmail: e.target.value });
    };

    novoUser = () => {
        const body = {
            nome: this.state.inputNome,
            email: this.state.inputEmail

        };

          axios
            .post(urlNovoUsuario, body, headers)
            .then((res) => {
              alert('usuario adicionado');
            })
            .catch((err) => {
              alert('Erro ao criar o novo usuário!');
            });
    };
      


    render() {
        return (
            <div>
                <p>Criar Usuário</p>
                <div>
                    <input type="text" placeholder="Nome" value={this.inputNome} onChange={this.addInputNome}
                    />
                     <input type="email" placeholder="email" value={this.inputEmail} onChange={this.addInputEmail}
                    />
                    <button onClick={this.props.onClickNovoUser} value={this.state.inputNome}>Nova tela</button>
                </div>

            </div>
        );
    }
}