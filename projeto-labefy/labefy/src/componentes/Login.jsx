import React from "react";
import styled from "styled-components";
import labeLogo from '../assets/logo-labefy.png'

export const Divplay = styled.div`
  width: 100vw;
  display: grid;
  justify-self: center;
  align-self: center;
`;
export const Divplay2 = styled.div`
  display: flex;
  margin: 0 auto;
  justify-items: center;
  text-align: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  justify-content: center;
  margin: 0 auto;
`;
export const Nome = styled.h1`
  padding: 1rem;
  background: black;
  display: flex;
  flex-direction: column;
  color: #7CFC00;
  font-weight: bold;
  font-size: 5.2vh;
  margin: 0 auto;
`;
export const Button = styled.button`
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
  width: 15%;
  border-radius: 4px;
  background-color: #7CFC00;
  color: white;
  font-size: large;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4vh auto 0;
`;

export default class Login extends React.Component {
  render() {
    return (
      <Divplay>
        <Divplay2>
          <Nome>Labefy</Nome>
          <Logo src={labeLogo} />
        </Divplay2>
        <Button onClick={this.props.irParaPlaylists}>Play!</Button>
      </Divplay>
    );
  }
}
