import React, { useEffect, useState } from "react";
import axios from "axios";


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
                    <div>
                        <div>
                          {/* <img src={match.photo} /> */}
                          <div>{match.name}</div>
                          <div>{match.age}</div>
                        </div>
                    </div>
                );
            })}

            <div>
                <button onClick={props.onChangeTela}>Voltar</button>
            </div>
        </div>
    );
             
}


export default TelaMatches;


