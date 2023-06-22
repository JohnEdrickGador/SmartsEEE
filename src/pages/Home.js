import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                console.log('signed in');
                navigate("/dashboard");
            }
            else {
                console.log('user signed out');
                navigate("/login");

            }
        });
    }, []);
  
}
