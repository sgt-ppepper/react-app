import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";

function Tickets() {
    const [userData, setUserData] = useState({});
    const handleGetInfo = async () => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem('Authorization'),
            },
        };

        try {
            const response = await axios.get(
                'http://localhost:5000/api/v1/user/self',
                config
            );
            setUserData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        handleGetInfo();
    }, []);


    const [formData, setFormData] = useState({
        schelude_id: '',
        user_id: '',
        film_id: ''
    });
    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const data = Object.fromEntries(Object.entries(formData).filter(([, v]) => v !== ''));
        data.user_id = userData.id;
        const newdata = JSON.stringify(data);





        var baseUrl = "http://localhost:5000/api/v1/schedule_sale/";
        baseUrl += data.user_id + "/" + data.schelude_id + "/" + data.film_id;

        fetch(baseUrl, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => {
            alert("You have succsefully bought a ticket!");
            window.location.href = './';
        })
            .catch(error => {
                alert("Log in to buy a ticket!!!");
                window.location.href = './login';
            });

        console.log(newdata)

    }


    return (
        <div className="tickets-body">
            <div className="info-box">
                <h2>Buy Tickets</h2>

                <form action="!#" method="post">
                    <div className="tickets-form-group">
                        <label htmlFor="movie">Select a movie:</label>
                        <select id="film_id" name="film_id" required onChange={handleInputChange}>
                            <option value="">Please select a movie</option>
                            <option value="1">Blade Runner</option>
                            <option value="3">Forest Gump</option>
                            <option value="4">Dead Poets Society</option>
                        </select>
                    </div>

                    <div className="tickets-form-group">
                        <label htmlFor="date">Select a date:</label>
                        <input type="date" id="date" name="date" required />
                    </div>

                    <div className="tickets-form-group">
                        <label htmlFor="schelude_id">Select a time:</label>
                        <select id="schelude_id" name="schelude_id" required onChange={handleInputChange}>
                            <option value="">Please select a time</option>
                            <option value="1">10:00am</option>
                            <option value="2">1:00pm</option>
                            <option value="3">4:00pm</option>
                        </select>
                    </div>

                    <div className="tickets-form-group">
                        <button type="submit" onClick={handleSubmit}>Buy Tickets</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Tickets