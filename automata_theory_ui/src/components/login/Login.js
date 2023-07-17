import React, { useState } from "react";
import axios from "axios";
import AuthService from "../../services/AuthService";

import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn
} from 'mdb-react-ui-kit';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.preventDefault())
        try {
            const response = await AuthService.login(username, password);
            console.log(response)
            if (response.data.access) {
                localStorage.setItem('access_token', response.data.access);
                alert('Успешная авторизация!')
            }
        } catch (error) {
            console.log(error)
            alert('Ошибка')
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="login-container font-bauman-2">
                <MDBInput
                    className='mb-4'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label='Логин'
                />

                <MDBInput
                    className='mb-4'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Пароль'
                />

                <MDBRow className='mb-4'>
                    <MDBCol className='d-flex justify-content-center'>
                        <MDBCheckbox id='form1Example3' label='Запомнить?' defaultChecked />
                    </MDBCol>
                    <MDBCol>
                        <a href='#!'>Забыли пароль?</a>
                    </MDBCol>
                </MDBRow>

                <MDBBtn type='submit' block>
                    Войти
                </MDBBtn>
            </form >
        </div>
    )
};



export default Login;