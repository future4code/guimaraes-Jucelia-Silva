import React, { Component } from 'react';
import CriarPlayList from './componentes/CriarPlayList';
import Login from './componentes/Login';
import styled from 'styled-components';


export const div1 = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  // background: black;
  display: grid;
  color: white;
`;

export default class App extends Component {
  state = {
    tela: "login",
  };

 

  escolheTela = () => {
    switch (this.state.tela) {
      case "login":
        return <Login irParaPlaylists={this.irParaPlaylists} />;
      case "playlists":
        return <CriarPlayList />;
      default:
        return <p>erro</p>;
    }
  };

  irParaPlaylists = () => {
    this.setState({ tela: "playlists" });
  };


  render() {
    return <div1>{this.escolheTela()}</div1>;
  }
}

