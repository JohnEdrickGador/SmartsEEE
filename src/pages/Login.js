import React, { useState } from "react";
import { auth } from "../firebase";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../auth";

export default function Login({ history }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailHandler = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }

    const passwordHandler = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    const loginHandler = (e) => {
        e.preventDefault();

    }

    return (
        <div className="login-page">
            <div className="login-container">
            <h1 className="login-title">Log in with an admin account</h1>
                <form className="login-form">
                    <input type = "text" name = "email" id = "email" placeholder = "Email Address" value = {email} onChange={emailHandler}></input>
                    <input type = "password" name = "password" id = "password" placeholder = "Password" value = {password} onChange={passwordHandler}></input>
                    <button type = "submit" className = "login-btn">Login</button>
                    <a href = "#" className = "account-apply">No account yet? Apply here</a>
                </form>
            </div>
        </div>
    )
}
