import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import img from "../../Img/Astronauta-PNG.png";
// import {StyledImg, H1, ButtonAdminContent, ButtonAdmin, TripButtonContent, TripButton} from "./StyledHomePage";




const Styled = styled.body`
   height: 100vh;
  background-image: url(${img});
  background-size: cover;
  text-align: center;
  margin: 0 auto;
`;

const H1 = styled.h1`
color: blue;
font-weight: 1000;
display: block;
text-align: center;
`;

const ButtonAdminContent = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 15px;
margin-top: -120px;
font-size: 8em;
 margin: 20vh 0;
`;

const ButtonAdmin = styled.button`
padding: 20px;
margin-top: 15px;
border-radius: 50px;
`;

const TripButtonContent = styled.button`
width: fit-content;
    display: flex;
    margin: 3vh auto 0;
    color: #b399ff;
    cursor: pointer;
`;











const HomePage = () => {
    const navigate = useNavigate();

     const goToLoginPage = () => {
         navigate("/login");
     const token= localStorage.getItem("token");
     if (token === null) {
        navigate("/login");
     }
     else {
        navigate("/admin/trips/list");
     };
    };



    const goToListTripsPage = () => navigate("/trips/list"); 



    return(
        <Styled>

        <H1>Labex</H1>
        <ButtonAdminContent>
            <ButtonAdmin onClick={goToLoginPage}>Adimin</ButtonAdmin>
        </ButtonAdminContent>
        <TripButtonContent>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
        </TripButtonContent>

        </Styled>
    );
}

export default HomePage;