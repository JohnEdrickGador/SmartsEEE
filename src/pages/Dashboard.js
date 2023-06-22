import React, { useState, useEffect } from 'react';
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
            }
            else {
                setUser(null);
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
    
    if (user) {
        return (
            <div>
               <h1>This is the dashboard page</h1>
                <button onClick={ logOutHandler }>Logout</button>
            </div>
        );
    }

    else {
        navigate("/login");
    }
}
