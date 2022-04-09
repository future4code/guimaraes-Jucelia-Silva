import React from 'react';
import { useNavigate } from 'react-router-dom'

const ApplicationFormPage = () => {
    const navigate = useNavigate()
    const goToHomePage = () => navigate(-1)

    return(
        <div>
        <h1>Application</h1>

        <div>
            <input />
            <input />
            <input />
            <input />
            <input />

        </div>

        <buton onClick={goToHomePage}>Voltar</buton>
        <button>Enviar</button>

        
        </div>
    );
}

export default ApplicationFormPage;