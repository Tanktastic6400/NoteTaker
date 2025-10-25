import React from "react";
import Login from "./Login";
import "../CSS/Login.css";


function Login() {
    return (
        <div className="loginForm">
            <div className="loginText">
                <label htmlFor="usernameBox">Username:</label>
                <input type="text" id="usernameBox" className="usernameBox" />
                <label htmlFor="passwordBox">Password: </label>
                <input type="text" id="passwordBox" className="passwordBox" />

            </div>
                <button className="signUpButton">Sign Up</button>
                <button className="submitButton">Sign In</button>
        </div>

    )


}

export default Login;