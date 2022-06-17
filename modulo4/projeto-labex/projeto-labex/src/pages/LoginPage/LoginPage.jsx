import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { url } from '../../App';



const LoginPage = () => {

    const navigate = useNavigate()
    const goToHomePage = () => navigate(-1)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)



    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios
            .post(`${url}/login`, body)
            .then(res => {
                localStorage.setItem('token' , res.data.token)
                navigate('adminHomePage')
            })
             .catch((error) => error.response)
    }

    return(
        <div>
        <h1>Login</h1>
        <input type={'email'} placeholder={'Nome'} value={'email'} onChange={handleEmail} />
        <input type={'password'} placeholder={'Senha'} value={'password'} onChange={handlePassword} />
        <br/>
        <br/>
        <button onClick={goToHomePage}>Voltar</button>
        <button onClick={login}>Login</button>

        
        </div>
    );
}

export default LoginPage;