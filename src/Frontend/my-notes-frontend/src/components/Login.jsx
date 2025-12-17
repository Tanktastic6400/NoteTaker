import React from "react";
import "../CSS/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        navigate("/select");

    };

    function handleSignUp(event) {
        event.preventDefault();

        console.log("sign up!!>???");

    };




    return (
        <div className="loginForm">
            <div className="loginContainer">
                <div className="loginText">
                    <label htmlFor="usernameBox" className="fieldLables">Username:</label>
                    <input type="text" id="usernameBox" className="textFields" autoFocus="true"/>
                    <label htmlFor="passwordBox" className="fieldLables">Password: </label>
                    <input type="password" id="passwordBox" className="textFields"  />

                </div>
                <button key="submitButton" className="formButtons" onClick={handleSubmit}>Sign In</button>
                <button key="submitButton" className="formButtons" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )


}

export default Login;