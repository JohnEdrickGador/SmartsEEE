import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('signed in');
                return (
                    <div>
                        <h1>Dashboard</h1>
                        <button onClick={ logOutHandler }>Logout</button>
                    </div>
                );
            }
            else {
                console.log('user signed out');
                navigate("/login");

            }
        });
    }, []);

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
}
