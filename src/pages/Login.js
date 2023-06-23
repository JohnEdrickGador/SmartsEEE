import React, { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import {db} from '../firebase';
import { doc, serverTimestamp, setDoc, collection } from 'firebase/firestore';

export default function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    async function addToLogs(email, timestamp) {
        const logInData = {
            Email: email,
            TimeStamp: timestamp,
            id: uuidv4(),
        }

        try {
            const collectionRef = collection(db, 'login-history');
            const logInDataRef = doc(collectionRef, logInData.id);
            await setDoc(logInDataRef, logInData);
        } catch (err) {
            console.log(err.message);
        }
    }

    const loginHandler = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
            console.log(userCredentials.user.email);
            const email = userCredentials.user.email;
            const time = serverTimestamp();
            addToLogs(email, time);
            navigate("/");
        })
        .catch((error) => {
            alert(error.message);
        })
    }

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-cover">
                    <h1 className="login-logo">SmartsEEE</h1>
                    <p>Smart Security and Monitoring System</p>
                </div>
                <div className="login-fields">
                    <h1 className="login-title">Log in with an admin account</h1>
                    <form className="login-form" onSubmit={ loginHandler }>
                        <input type = "text" name = "email" id = "email" placeholder = "Email Address" value = {email} onChange={emailHandler}></input>
                        <input type = "password" name = "password" id = "password" placeholder = "Password" value = {password} onChange={passwordHandler}></input>
                        <button type = "submit" className = "login-btn" onClick={ loginHandler }>Login</button>
                        <a href = "#" className = "account-apply">No account yet? Apply here</a>
                    </form>
                </div>
            </div>
        </div>
    )
}
