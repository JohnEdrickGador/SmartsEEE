import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const [user, setUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('signed in');
            }
            else {
                setUser(null);
                console.log('user signed out');

            }
        });
    }, []);
  
    if (user) {
        return (
            <Navigate replace to = "/dashboard" />
        );
    }

    else {
        return (
            <Navigate replace to = "/login" />
        );
    }
}
