import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../Hooks/UseFormApp';
import { planetas } from '../../Destinos/Planetas';
import axios from 'axios';
import { url } from '../../App';




const CreatTripPage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)

  const { form, onChange, forms } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: ''
  });
  
  const creatTrip = (ev) => {
    
    ev.preventDefault();

    const headers = {
      headers: {
        auth: localStorage.getItem('token')
      },
    };

    const body = {
      name: form.name,
      planet: form.planet,
      date: form.date,
      description: form.description,
      durationInDays: form.durationInDays
    };

      axios
        .post(`${url}/trips`, body, headers)
        .then((res) => alert('Viagem criada com sucesso!'))
        .catch((err) => err)

      forms();
  };


  return (
    <div>
      <div>
        <h1> Criar Viagem</h1>
        <div>
          <form onSubmit={creatTrip}>
            <input
              name='name'
              value={form.name}
              onChange={onChange}
              placeholder={'Nome'}
              required
            />
            <select
              name='planet'
              value={form.planet}
              onChange={onChange}
              placeholder={'Escolha um Planeta'}
              required
            >
              <option value={''}>Escolha um Planeta</option>
              {planetas.map((planets) => {
                return (
                  <option value={planets} key={planets}>
                    {planets}
                  </option>
                );
              })}
            </select>
            <input
              name='date'
              value={form.date}
              onChange={onChange}
              placeholder={'Data'}
              required
              type={'date'}
            />
            <input
              name='description'
              value={form.description}
              onChange={onChange}
              placeholder={'Descrição'}
              required
              pattern={'^.{10,}'}
              title={'Texto de 10 caracteres'}
            />
            <input
              name='durationInDays'
              value={form.durationInDays}
              onChange={onChange}
              placeholder={'Duração em dias'}
              required
              type={'number'}
              min={1}
            />
            <div>
          <button>Criar</button>
          <button onClick={goBack}>Voltar</button>
          </div>
        </form>
        </div>
        
      </div>
    </div>
  );
};

export default CreatTripPage;