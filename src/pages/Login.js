import React from "react";

function Login() {
    return (
        <div className="login-page">
            <div className="login-container">
            <h1 className="login-title">Log in with an admin account</h1>
                <input type="text" name="email" id="email" placeholder="Email Address"></input>
                <input type = "password" name="password" id="password" placeholder="Password"></input>
                <button className="login-btn">Login</button>
                <a href="#" className="account-apply">No account yet? Apply here</a>
            </div>
        </div>
    )
}

export default Login