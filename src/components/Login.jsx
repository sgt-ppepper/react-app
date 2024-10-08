import React from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const username = formData.username;
        const password = formData.password;
        const credentials = `${username}:${password}`;
        const encodedCredentials = btoa(credentials);

        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: `Basic ${encodedCredentials}`
            }
        };

        

        try {
            const response = await axios.get('http://localhost:5000/api/v1/user/login', config);
            sessionStorage.setItem('Authorization', `Basic ${encodedCredentials}`);
            alert('You successfully signed in');
            window.location.href = './';
        } catch (error) {
            alert('Invalid username or password');
        }
    }


    return (
        <div className='register-body' data-testid="login">
            <div className="container">
                <div className="wrapper">
                    <div className="title"><span>Login Form</span></div>
                    <form action="!#">
                        <div className="row">
                            <i className="fas fa-user"></i>
                            <input name="username" id="username" type="text" placeholder="Email or Phone" required onChange={handleInputChange} />
                        </div>
                        <div className="row">
                            <i className="fas fa-lock"></i>
                            <input name="password" id="password" type="password" placeholder="Password" required onChange={handleInputChange} />
                        </div>
                        <div className="pass"><a href="!#">Forgot password?</a></div>
                        <div className="row button">
                            <input name="login-button" id="login-button" type="submit" value="Login" onClick={handleSubmit} />
                        </div>
                        <div className="signup-link">Not a member? <Link to="/register">Signup now</Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;