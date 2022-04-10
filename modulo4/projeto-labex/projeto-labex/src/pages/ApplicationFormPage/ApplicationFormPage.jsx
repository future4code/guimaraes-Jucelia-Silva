import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/UseFormApp';
import { pais } from '../../Destinos/país';
import useRequest from '../../Hooks/UseRequest';
import { url } from '../../App';




const ApplicationFormPage = () => {
  
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const [listTrips] = useRequest(`${url}/trips`)

  const { form, onChange, forms } = useForm({
    tripId: '',
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: ''
  });

  const applyToTrip = (event) => {
    event.preventDefault();

    const body = {
      name: form.name,
      age: Number(form.age),
      applicationText: form.applicationText,
      profession: form.profession,
      country: form.country,
    };
    axios
    .post(`${url}/trips/${form.tripId}/apply`, body)
    .then((res) => {
        alert('Sucesso!')
      })
    .catch((err) => err.response)

    forms();
  };



  return (
    <div>
      <h1>Inscreva-se para uma Viagem</h1>
      <div>
        <div onSubmit={applyToTrip}>
          <select
            value={form.tripId}
            required
            name={'tripId'}
            onChange={onChange}
          >
            <option value={''}>Selecione a viagem:</option>
            {listTrips?.trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name} {trip.planet}
                </option>
              );
            })}
          </select>
          <input
            name='name'
            value={form.name}
            onChange={onChange}
            placeholder={'Nome'}
            required
          />
          <input
            name='age'
            value={form.age}
            onChange={onChange}
            placeholder={'Idade'}
            required
            type={'number'}
            min={18}
          />
          <input
            name='applicationText'
            value={form.applicationText}
            onChange={onChange}
            placeholder={'Texto de Candidatura'}
            required
            pattern={'^.{10,}'}
            title={'Sua texto de candidatura deve ter ao menos 10 caracteres'}
          />
          <input
            name='profession'
            value={form.profession}
            onChange={onChange}
            placeholder={'Profissão'}
            required
            pattern={'^.{4,}'}
            title={'Sua profissão deve ter no mínimo 4 caracteres'}
          />
          <select
            value={form.country}
            required
            name={'country'}
            onChange={onChange}
          >
            <option value={''}>País de origem:</option>
            {pais.map((country) => {
              return (
                <option value={country} key={country}>
                  {country}
                </option>
              );
            })}
          </select>
          <br/>
          <button>Enviar</button>

        </div>
      </div>

      <button onClick={goBack} >Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;