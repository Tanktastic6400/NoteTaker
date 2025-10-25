import React from "react";
import "../CSS/Login.css";

function Login() {

    function handleSubmit(event){
        event.preventDefault();

        console.log("sign in!!!");

    };

    function handleSignUp(event){
        event.preventDefault();

        console.log("sign up!!>???");

    };




    return (
        <div className="loginForm">
            <div className="loginText">
                <label htmlFor="usernameBox">Username:</label>
                <input type="text" id="usernameBox" className="usernameBox" />
                <label htmlFor="passwordBox">Password: </label>
                <input type="text" id="passwordBox" className="passwordBox" />

            </div>
                <button className="signUpButton" onClick={handleSubmit}>Sign In</button>
                <button className="submitButton" onClick= {handleSignUp}>Sign Up</button>
        </div>

    )


}

export default Login;