import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import DashboardScreen from '../components/DashboardScreen';

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
                navigate('/login');
            }
        });
    }, []);
   
    
    if (user) {
        return (
            <DashboardScreen/>
        );
    }

}
