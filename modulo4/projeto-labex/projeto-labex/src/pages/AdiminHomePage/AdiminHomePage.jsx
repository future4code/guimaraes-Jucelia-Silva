import React from 'react';
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()
    const goToHomePage = () => navigate(-2) 
    const createTrip = () => navigate('createTrip')



    return(
        <div>
        <h1>AdiminHomePage</h1>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={createTrip}>Criar uma viagem</button>
        <button onClick={goToHomePage}>Logout</button>
        </div>
    );
}

export default LoginPage;