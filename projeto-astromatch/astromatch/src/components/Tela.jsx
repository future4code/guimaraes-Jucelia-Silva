import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";



const Header = styled.header`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
align-self: center;
color: brown;
border-bottom: 3px solid #fdfd4f;
padding-bottom: 2px;
background: linear-gradient(262deg, #ff7854);
letter-spacing: 0.5px;
height: 80px;
box-shadow: 0 1px 8px rgb(0 20 20 / 20%);
align-items: center;
padding: 0 25px;
`;


const Img = styled.img`
width: 100px;
`;

const Info = styled.div`
display: flex;
font-size: 32px;
font-weight: 700;
letter-spacing: 0.5px;
position: absolute;
bottom: 0px;
left: 20px;
text-shadow: 1px 1px 5px black;
padding-left: 25vh;
top: 60vh;
`;

const Bio = styled.div`
color: color;
text-shadow: 1px 2px 5px;
font-size: x-large;

`;

const BotoesInt = styled.div`
text-align: center;
margin: 0 auto;
font-size: 1rem;
text-align: center;
display: flex;
justify-content: space-around;
margin: 10px;
border-radius: 50%;
color: #11e29888;
font-size: 32px;
`;

const Botoes = styled.div`
     text-align: center;
     margin: 0 auto;
     font-size: 1rem;
     text-align: center;
     justify-content: center;
`;





function Tela (props) {
    const [perfil, setPerfil] = useState({});


    useEffect(() => {
        getProfiles();
    }, []);

    const getProfiles = () => {
        axios
        .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juceliaxavier/person"
            )
        .then((res) => {
            setPerfil(res.data.profile);
        })
        .catch((error) => {
            console.log(error.response);
        });

    };


    const chosePerson = () => {
        const body = {
            id: perfil.id,
            choice: true,
        };

        axios
            .post(
             "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucelia-xavier-guimaraes/choose-person",
            body
          )
          .then((res) => {
              getProfiles();
          })
          .catch((error) => {
              console.log(error.response)
          });

    };



    const deslikePerson = () => {
        const body = {
            id: perfil.id,
            choice: false,
        };

        axios
             .post(
               "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucelia-xavier-guimaraes/choose-person",
               body  
             )
             .then((res) => {
                 getProfiles();
             })
             .catch((error) => {
                  console.log(error.response)     
             });
    };



    return (
        <div>
            <Header>
            <h1>astromatch</h1>
            </Header>

            <main>
                <Img src={perfil.photo} /> 
                <br />
            </main>
        

            <Info>
                {perfil.name} <br />
                 {perfil.age} anos
            </Info>

            <Bio>{perfil.bio}</Bio>

            <Botoes>
                <BotoesInt onClick={chosePerson}>&#128293;</BotoesInt>

                <BotoesInt onClick={deslikePerson}>&#128078;</BotoesInt>
                <br />
                <br />
      
                <button onClick={props.onChangeTelaMatches}>Ver matches</button>
            </Botoes>
        </div>
    );
}

export default Tela;
