import React from 'react';
import axios from 'axios';
import Playlists from './Playlists';
import styled from 'styled-components';
import { Divplay, Divplay2 } from './Login';

// const Div = styled.div`
//   display: flex;
//   margin: 0 auto;
//   justify-items: center;
//   text-align: center;
//   font-weight: bold;
// `;
const InputCriar = styled.input`
 margin: auto;
  display: flex;
  flex-direction: column;

`;

const H2 = styled.h2`
  padding: 1rem;
  background: black;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  display: table;
  display: flex;
  flex-direction: column;
  color: #7CFC00;
 
`;
const ButtonDeletar= styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  width: 10vh;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh auto 0;
  border-radius: 1px;
  background-color: #7CFC00;
  color: white;
 
`;
const ButtonCreate = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  width: 10vh;
  border-radius: 1px;
  background-color: #7CFC00;
  color: white;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2vh auto 0;
`;
const DivCreate = styled.div`
 flex-direction: column;
  color: #7CFC00;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  font-size: larger;
  padding: 1rem;
  background: black;
  display: flex;
  
`;

export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "jucelia-xavier-guimaraes",
  },
};

export default class CriarPlayList extends React.Component {
  state = {
    nome: "",
    playlists: [],
    detalhe: false,
    selecaoPlaylist: "",
  };

  renderDetalhe = (mostraPlaylist) => {
    this.setState({ detalhe: true, selecaoPlaylist: mostraPlaylist });
  };

  renderPagina = () => {
    this.setState({ detalhe: false });
  };

  componentDidMount() {
    this.getPlaylist();
  }

  componentDidUpdate() {
    this.getPlaylist();
  }

  createPlaylist = () => {
    const body = {
      name: this.state.nome,
    };
    axios
      .post(URL, body, headers)
      .then((res) => {
        alert("Sua playlist foi criada!");
        this.setState({ nome: "" });
      })
      .catch((err) => {
        alert("Houve um erro, tente outro nome");
      });
  };

  getNomePlaylist = (e) => {
    this.setState({ nome: e.target.value });
  };

  getPlaylist = () => {
    axios
      .get(URL, headers)
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        console.log("erro!");
      });
  };

  deletarPlaylist = (idPlaylist) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`,
        headers
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
  };

  render() {
    if (this.state.detalhe) {
      return (
        <Playlists
          renderPagina={this.renderPagina}
          selecaoPlaylist={this.state.selecaoPlaylist}
        />
      );
    }

    const playlistsRenderizadas = this.state.playlists.map((playlist, i) => {
      return (
        <playDiv>
          <DivCreate
            key={playlist.id}
            onClick={() => this.renderDetalhe(playlist)}
          >
            {playlist.name}
          </DivCreate>

          <ButtonDeletar onClick={() => this.deletarPlaylist(playlist.id)}>
            deletar
          </ButtonDeletar>
         
        </playDiv>
      );
    });

    return (
      <div>
        <H2>Labefy</H2>

        <InputCriar
          type="text"
          placeholder="Nome da Playlist"
          value={this.state.nome}
          onChange={this.getNomePlaylist}
        />

        <ButtonCreate onClick={this.createPlaylist}>criar</ButtonCreate>
        <br />

        {playlistsRenderizadas}
      </div>
      
    );
  }
}