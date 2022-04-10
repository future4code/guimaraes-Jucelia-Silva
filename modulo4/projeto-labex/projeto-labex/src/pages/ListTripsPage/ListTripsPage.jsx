import React from 'react';
import { useNavigate } from 'react-router-dom';
import { url } from "../../App";
import useRequest from "../../Hooks/UseRequest";


const LisTripsPage = () => {
    const [listTrips] = useRequest(`${url}/trips`)

    const navigate = useNavigate()
    const goToHomePage = () => navigate(-1)
    const goToApplicationFormPage = () => navigate('/trips/application')

    return(
        <div>
        <h1>Lista</h1>
        {listTrips?.trips.map((trip) => {
            return (
                <div>
                    <div>
                    <p key={trip.id}> <div> Nome: </div> {trip.name}</p>
                <p> <div> Descrição: </div> {trip.description} </p>
                <p> <div> Planeta: </div> {trip.planet} </p>
                <p> <div> Quantos Dias de Viagem:</div> {trip.durationInDays}</p>
                <p> <div> Data:</div> {trip.date}</p>
                
                    </div>


                </div>
            )
        })};

        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={goToApplicationFormPage}>Inscrição</button>


        </div>
    );
}

export default LisTripsPage