import React from 'react';
import {useState} from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        const XHR = new XMLHttpRequest();
        event.preventDefault();
        const data = Object.fromEntries(Object.entries(formData).filter(([, v]) => v !== ''));
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
        } else {
            delete data.confirmPassword;
            console.log(data);
            const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            }
            };
            try{
                const response = await axios.post('http://localhost:5000/api/v1/user', data, config);
                alert('User successfully created');
                //window.location.href = './account';
            } catch (error){
                console.log(error.response.data);
            }
        }
    };



    return (
        <div className="register-body">
            <div className="wrapper">
                <h2>Registration</h2>
                <form id="register-form">
                    <div className="input-box">
                        <label htmlFor='firstname'>Enter your first name</label>
                        <input id="firstname" name="firstname" type="text" label="Enter your first name" placeholder="Enter your first name" required onChange={handleInputChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor='lastname'>Enter your last name</label>
                        <input id="lastname" name="lastname" type="text" placeholder="Enter your last name" required onChange={handleInputChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor='email'>Enter your email</label>
                        <input id="email" name="email" type="text" placeholder="Enter your email" required onChange={handleInputChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor='password'>Create password</label>
                        <input name="password" id="password" type="password" placeholder="Create password" required onChange={handleInputChange} />
                    </div>
                    <div className="input-box">
                        <label htmlFor='confirmPassword'>Confirm password</label>
                        <input name="confirmPassword" id="confirmPassword" type="password" placeholder="Confirm password" required onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="role">Select your role:</label>
                        <select id="role" name="role" required onChange={handleInputChange}>
                            <option value="" data-testid="select-option">Please select a role</option>
                            <option value="customuser" name="customuser">Customuser</option>
                            <option value="admin" name="admin">Admin</option>
                        </select>
                    </div>
                    <div className="policy">
                        <input type="checkbox" />
                        <h3>I accept all terms & condition</h3>
                    </div>
                    <div className="input-box button" >
                        <input type="submit" value="Register Now" id="register-button" onClick={handleSubmit} />
                    </div>
                    <div className="text">
                        <h3>Already have an account? <a href="!#">Login now</a></h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;