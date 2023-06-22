import React from 'react';
import NavBar from './NavBar';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import DataBoard from './DataBoard';

export default function DashboardScreen() {
    const navigate = useNavigate();
    const logOutHandler = () => {
        signOut(auth)
        .then(() => {
            console.log('signed out');
            navigate('/login', {replace: true});
        })

        .catch((error) => {
            alert(error.message);
        })
    }
    return (
        <div className='dashboard-screen'>
            <NavBar logOutHandler={logOutHandler}/>
            <DataBoard />
        </div>

    )
}
