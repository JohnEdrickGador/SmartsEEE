import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
import GraphScreen from '../components/GraphScreen';

export default function Graphs() {
    const [user, setUser] = useState(null);

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

    if (user) {
        return (
            <GraphScreen />
        );
    }

    else {
        return (
            <Navigate replace to = "/login" />
        );
    }
}
