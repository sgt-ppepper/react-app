import React from "react";
import axios from "axios";
import {useEffect, useState} from 'react'

function Account(){
    const [accountData, setAccountData] = useState({});
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
            setAccountData(response.data);
            } catch (error) {
            console.log(error);
            }
      };

    const handleSignOut = async event => {
        event.preventDefault();
        sessionStorage.removeItem('Authorization');
        alert("Seccessfully signed out");
        window.location.href = './';
    }
    useEffect(() => {
        handleGetInfo();
      }, []);
    
    const handleDelete = async event => {
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                Authorization: sessionStorage.getItem('Authorization'),
            },
            };
        try {
            const response = await axios.delete('http://localhost:5000/api/v1/user/self', config);
            alert('User successfully deleted');
            sessionStorage.removeItem('Authorization');
            window.location.href = './';
        } catch (error) {
            console.log(error);
        }
    }




    return(
        <div className="account-body">
            <div className="info-box">
                <h2>User Info</h2>
                <lil >First name: {accountData.firstname}</lil>
                <lil >Last name: {accountData.lastname}</lil>
                <lil >Email: {accountData.email}</lil>
                <button onClick={handleDelete}>Delete account</button>
                <button onClick={handleSignOut}>Log out </button>
            </div>
        </div>
    )
}

export default Account;