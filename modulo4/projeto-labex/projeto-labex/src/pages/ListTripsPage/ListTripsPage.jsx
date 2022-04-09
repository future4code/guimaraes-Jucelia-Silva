import React from 'react';
import { useNavigate } from 'react-router-dom';

const LisTripsPage = () => {
    const navigate = useNavigate()
    const goToHomePage = () => navigate(-1)
    const applicationToTrip = () => navigate('applicationToTrip')

    return(
        <div>
        <h1>Lista</h1>

        <div>
            <p>Viagem</p>
        </div>

        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={applicationToTrip}>Inscrição</button>


        </div>
    );
}

export default LisTripsPage