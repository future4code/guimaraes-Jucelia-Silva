import React from "react";
import Post from "./components/Post/Post";
import styled from "styled-components";

const arrayPosts = [
  {
    nomeUsuario: "Lucilia",
    fotoUsuario: "https://picsum.photos/50/50",
    fotoPost: "https://picsum.photos/200/150"
  },
  {
    nomeUsuario: "Samuel",
    fotoUsuario: "https://picsum.photos/50/51",
    fotoPost: "https://picsum.photos/200/151"
  },
  {
    nomeUsuario: "Erica",
    fotoUsuario: "https://picsum.photos/50/52",
    fotoPost: "https://picsum.photos/200/152"
  }
];

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: red;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 180px;
  width: 240px;
  border: 1px solid gray;
  margin: 20px;
  padding: 30px;
`;

class App extends React.Component {
  state = {
    posts: arrayPosts,
    userName: "",
    userPhoto: "",
    postPhoto: ""
  };

  changeUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  changeUserPhoto = (event) => {
    this.setState({ userPhoto: event.target.value });
  };

  changePostPhoto = (event) => {
    this.setState({ postPhoto: event.target.value });
  };

  addNewPost = () => {
    const newPost = {
      nomeUsuario: this.state.userName,
      fotoUsuario: this.state.userPhoto,
      fotoPost: this.state.postPhoto
    };

    this.setState({
      posts: [...this.state.posts, newPost],
      userName: "",
      userPhoto: "",
      postPhoto: ""
    });
  };

  render() {
    const componentesPost = this.state.posts.map((p) => {
      return (
        <Post
          nomeUsuario={p.nomeUsuario}
          fotoUsuario={p.fotoUsuario}
          fotoPost={p.fotoPost}
        />
      );
    });

    return (
      <AppContainer>
        <FormContainer>
          <input
            placeholder={"Nome do Usuário"}
            value={this.state.userName}
            onChange={this.changeUserName}
          />
          <input
            placeholder={"Foto do Usuário"}
            value={this.state.userPhoto}
            onChange={this.changeUserPhoto}
          />
          <input
            placeholder={"Foto do Post"}
            value={this.state.postPhoto}
            onChange={this.changePostPhoto}
          />
          <button onClick={this.addNewPost}>Criar Post</button>
        </FormContainer>
        {componentesPost}
      </AppContainer>
    );
  }
}

export default App;
