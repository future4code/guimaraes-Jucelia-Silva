import React from "react";
import axios from "axios";

export default class Lista extends React.Component {
    render() {
     return (
      <div>
        <h1>Listando...</h1>
        <button onClick={this.props.onClickInput}>Trocar tela</button>
      </div>
    );
  }
}