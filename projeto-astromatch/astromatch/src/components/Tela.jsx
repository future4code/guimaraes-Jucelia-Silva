import React from "react";
import {useState, useEffect } from "react";
import axios from "axios";
// import styledComponents from "./styledComponents";



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
            <h1>astromatch</h1>

            <div>
                <imge src={perfil.photo} />
            </div>

            <div>
                {perfil.name}, {perfil.age}
            </div>

            <div>
                {perfil.bio}
            </div>

            <div>
                <button onClick={chosePerson}></button>

                <button onClick={deslikePerson}></button>

                <button onClick={props.onChangeTelaMatches}>Ver matches </button>
            </div>
        </div>
    );
}

export default Tela;