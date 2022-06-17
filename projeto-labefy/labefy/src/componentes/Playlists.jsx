import React from 'react';
import axios from 'axios';
import CriarPlayList from './CriarPlayList';
import styled from 'styled-components';

const H2 = styled.h2`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  color: #7CFC00;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
  display: table;
`;

const InputAdd = styled.input`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const ButtonAdd = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  width: 10vh;
  border-radius: 1px;
  background-color: #7CFC00 ;
  color: white;
  border: 1px solid rgb(107, 107, 107);
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1vh auto 0;
`;
const Adicionar = styled.div`
  margin: 0 auto;
  display: table;
  padding: 1rem;
  font-weight: bold;
`;
const Audio = styled.audio`
  margin: 0 0;
  text-align: center;
  cursor: pointer;

  height: 4vh;
`;
const ButtonVoltar = styled.button`
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
  margin: 1vh auto 0;
  
`;
const InputDiv = styled.div`
  display: flex;
  place-content: center;
  padding: 2vh 0;
  color: #7CFC00;
  font-weight: bold;
  font-size: 3vh;
`;
export const URL =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

export const headers = {
  headers: {
    Authorization: "jucelia-xavier-guimaraes",
  },
};

export default class Playlists extends React.Component {
  state = {
    exibir: [],
    name: "",
    artist: "",
    url: "",
  };

  nomeMusica = (event) => {
    this.setState({ name: event.target.value });
  };
  artistaMusica = (event) => {
    this.setState({ artist: event.target.value });
  };
  urlMusica = (event) => {
    this.setState({ url: event.target.value });
  };

  abrirPlaylist = () => {
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecaoPlaylist.id}/tracks`,
      headers
        
      )
      .then((res) => {
        this.setState({ exibir: res.data.result.tracks });
      })
      .catch((err) => {});
  };

  addMusica = () => {
    const body = {
      name: this.state.name,
      artist: this.state.artist,
      url: this.state.url,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.selecaoPlaylist.id}/tracks`,
        body,
        headers
      )
      .then((res) => {
        this.setState({ name: "", artist: "", url: "" });
        this.abrePlaylist();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.abrirPlaylist();
  };

  

  render() {
    const playlistRender = this.state.exibir.map((musica, i) => {
      return (
        <InputDiv>
          <div key={musica.id}>
            <div>{musica.name}</div>
            <div>{musica.artist}</div>
            <Audio controls>
              <Audio src={musica.url} type={"audio/mp3"}></Audio>
            </Audio>
          </div>
        </InputDiv>
      );
    });
    return (
      <div>
        <H2>Labefy</H2>
        <Adicionar>
          Adicionar Música
          <br />
        </Adicionar>
        <InputAdd
          type="text"
          placeholder="música"
          value={this.state.name}
          onChange={this.nomeMusica}
        />
        <br />
        <InputAdd
          type="text"
          placeholder="artista/banda"
          value={this.state.artist}
          onChange={this.artistaMusica}
        />
        <br />

        <InputAdd
          type="text"
          placeholder="link"
          value={this.state.url}
          onChange={this.urlMusica}
        />
        <br />

        <ButtonAdd onClick={this.addMusica}>Adicionar</ButtonAdd>
        <br />
        <br />

        {playlistRender}
        <ButtonVoltar onClick={this.props.renderPagina}>Voltar</ButtonVoltar>
      </div>
    );
  }
}