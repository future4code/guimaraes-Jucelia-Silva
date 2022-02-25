import React from "react";
import axios from "axios";

export default class Lista extends React.Component {
    state = {
        usuarioLista: []
    };



    getAllUsers = () => {
        axios
          .get(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            {
              headers: {
                Authorization: "Jucelia-Xavier-guimaraes",
              },
            }
          )



          .then((res) => {
            this.setState({ usuarioLista: res.data });
          })


          .catch((err) => {
            alert("erro na tela");
          });
      };



    render() {
        const Lista = this.state.usuarioLista.map((user) => {
            return (
                <div>
                <li> {user.nome} </li>
                <button>Apagar</button>
            </div>
            );

        });
        return <div>{Lista}</div>

    }
}