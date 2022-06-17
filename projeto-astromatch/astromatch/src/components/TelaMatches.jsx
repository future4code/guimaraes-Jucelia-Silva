import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const DivConteiner = styled.div`
margin: 1vh auto;
padding: 5vh 1vh;
width: 20vw;
height: 8vh

`;

const DivMatch = styled.div`
display: flex;
margin: 0 auto;
font-size: 26px;

`;

const Photo = styled.img`
width: 150px;
border-radius: 10px;
`;

const Name = styled.p`
margin: auto 1vh
`;

const DivAge = styled.p`
color: red;
`;


function TelaMatches(props) {
    const [listaMatches, setListaMatches] = useState([]);

    const getMatches = () => {
        axios
           .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jucelia-xavier-guimaraes/matches"
           )
           .then((res) => setListaMatches(res.data.matches))
               
            .catch((error) => console.log(error));

    };
    
    useEffect(() => getMatches(), []);

    return(
        <div>
            {listaMatches.map((match) => {
                return (
                  <h2>
                    <DivConteiner>
                        <DivMatch>
                          <Photo src={match.photo}/>
                          <Name>{match.name}</Name>
                          <DivAge>{match.age}</DivAge>
                        </DivMatch>
                    </DivConteiner>
                    </h2>
                );
            })}
            <br />

               <div>
                <button onClick={props.onChangeTela}>Voltar</button>
              </div>
        </div>
    );
             
}


export default TelaMatches;