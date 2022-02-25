import React from "react";
import axios from "axios";
import Input from "./components/Input";
import Lista from "./components/Lista";




export default class App extends React.Component {
  state = {
    page: true,
  };

  novaPage = () => {
    this.setState({ page: !this.state.page });
  };
  



 render() {
  return (
    <>
    <h2>Labenuser</h2>
    <button onClick={this.novaPage}>Lista com o nome do usuário</button>
    <Input />
    <Lista />
    </>
   );
 }
}