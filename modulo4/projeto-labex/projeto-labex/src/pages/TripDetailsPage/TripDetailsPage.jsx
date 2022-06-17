import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { url } from '../../App';
import { useState, useEffect } from 'react';

const TripDetailsPage = () => {

  const navigate = useNavigate();

  const params = useParams()

  const [tripDetail, setTripDetail] = useState([]);

  const headers = {
    headers: {
      auth: localStorage.getItem('token')
    },
  };

  const tripId = params.tripId

  const getTripDetail = () => {


    axios.get(`${url}/trip/${params.tripId}`, headers)
      .then((response) => {
        setTripDetail(response.data.trip);
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
  }

  useEffect(() => {
    getTripDetail();
  });


  const aproveApplier = (candidate) => {

    const body = { approve: true };
    axios.put(`${url}/trips/${params.tripId}/candidates/${candidate.id}/decide`, body, headers)
      .then((res) => {
        alert(`Você aprovou o candidato ${candidate.name}!`);
        getTripDetail();
      })
      .catch((err) => {
        console.log(err.response.data);
      })
  };

  const reproveApplier = (candidate) => {

    const body = { approve: false };
    axios
      .put(`${url}/trips/${params.tripId}/candidates/${candidate.id}/decide`, body, headers)
      .then((res) => {
        alert(`Você reprovou o candidato ${candidate.name}!`);
        getTripDetail();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
  };

  const goBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <h1>Lista De Viagens</h1>

      <h1 title={tripDetail.name}> </h1>
      <div>
        <p>Nome: {tripDetail.name}</p>
        <p>Descrição: {tripDetail.description}</p>
        <p>Planeta: {tripDetail.planet}</p>
        <p>Duração: {tripDetail.durationInDays} dias</p>
        <p>Data de partida: {tripDetail.date}</p>
      </div>



      <button onClick={goBack}>Voltar</button>

      <h2>Candidatos Pendentes</h2>
      {tripDetail.candidates?.map((candidate) => {
        return (
          <div key={candidate.id}>
            <p>Candidato: {candidate.name}</p>
            <p>Idade: {candidate.age} anos</p>
            <p>País de origem: {candidate.country}</p>
            <p>Profissão: {candidate.profession}</p>
            <p>Motivação: {candidate.applicationText}</p>
            <div>
              <button onClick={() => aproveApplier(candidate)}>APROVAR</button>
              <button onClick={() => reproveApplier(candidate)}>REPROVAR</button>
            </div>
          </div>
        )
      })}

      <h2>Candidatos aprovados</h2>
      <div>
        {tripDetail.approved?.map((candidate) => {
          return (
            <div key={candidate.id}>
              <ul>
                <li>{candidate.name}, {candidate.age} anos, {candidate.country}</li>
              </ul>
            </div>


          );
        })}
      </div>
    </div >
  )
}

export default TripDetailsPage;