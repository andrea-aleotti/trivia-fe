import React, { useState } from 'react';
import './Welcome.css';
import '../../services/apiCaller';
import Loading from '../../assets/Loading';
import apiCaller from '../../services/apiCaller';

const Welcome = () => {

    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginClick = () => {
        setShowLogin(true);
        setShowSignup(false);
    }

    const handleSignupClick = () => {
        setShowLogin(false);
        setShowSignup(true);
    }

    const handleLoginOrSignup = async () => {
        setShowLogin(false)
        setShowSignup(false)

        setLoading(true);


        const apiUrl = showLogin ? 'user/login' : 'user/signup';

        let username = document.getElementById("username");
        let password = document.getElementById("password");

        const data = await apiCaller(apiUrl, "POST", { "username": username, "password": password })
        console.log(data)
    };


    return (
        <div className="welcome-page">
            {(!loading && (!showLogin && !showSignup)) && (
                <div className='button-ctn'>
                    <div className='button' onClick={handleLoginClick}>Login</div>
                    <div className='button' onClick={handleSignupClick}>Signup</div>
                </div>
            )}

            {showLogin && (
                <div className='button-ctn'>
                    <input type='text' placeholder='Username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='button' onClick={handleLoginOrSignup}>Login</div>
                    <span className='change-action' onClick={handleSignupClick}>Signup</span>
                </div>
            )}

            {showSignup && (
                <div className='button-ctn'>
                    <input type='text' placeholder='Username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className='button' onClick={handleLoginOrSignup}>Signup</div>
                    <span className='change-action' onClick={handleLoginClick}>Login</span>
                </div>
            )}

            {loading && (
                <div className='button-ctn'>
                    <Loading />
                </div>
            )}
        </div>
    );
};


export default Welcome;
