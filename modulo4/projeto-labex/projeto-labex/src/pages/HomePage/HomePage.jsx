import React from 'react';
import { useNavigate } from "react-router-dom";
// import {StyledImg, H1, ButtonAdminContent, ButtonAdimn, TripButtonContent, TripButton} from "../pages/HomePage/HomePage/StyledHomePage";

const HomePage = () => {
    const navigate = useNavigate();
    const goToLogin = () => navigate("/login");
    const goToListTripsPage = () => navigate("listTrips"); 



    return(
        <>

        <h1>Labex</h1>
        <button>
            <button onClick={goToLogin}>Adimin</button>
        </button>
        <button>
            <button onClick={goToListTripsPage}>Ver Viagens</button>
        </button>

        </>
    );
}

export default HomePage;