import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreateTripPage = () => {
    const navigate = useNavigate()
    const goToAdminHomePage = () => navigate(-1)

    return(
        <div>
        <h1>Create</h1>

        <input />
        <input />
        <input />
        <input />
        <input />
        <br/>

        <button onClick={goToAdminHomePage}>Voltar</button>

        </div>
    );
}

export default CreateTripPage;