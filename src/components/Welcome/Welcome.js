import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Welcome.module.css';
import Loading from '../../assets/Loading';
import apiCaller from '../../services/apiCaller';

const Welcome = () => {



    const [showLogin, setShowLogin] = useState(false);
    const [showSignup, setShowSignup] = useState(false);
    const [showLoading, setShowLoading] = useState(false)
    const [showError, setShowError] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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

        setShowLoading(true);


        const apiUrl = showLogin ? 'user/login' : 'user/signup';

        const data = await apiCaller(apiUrl, "POST", { "username": username, "password": password })
        console.log(data)

        if (data.success === "ok") {
            localStorage.setItem("_id", data._id);
            localStorage.setItem("username", data.username);

            navigate("/home");
        } else {
            setError(data.error_msg);
            setShowError(true);

            setShowLoading(false);
            setShowLogin(false);
            setShowSignup(false);

            setTimeout(() => {
                setShowError(false);
                setError("");
            }, 3000)
        }
    };

    const navigate = useNavigate();

    // checka se l'utente è già loggato
    useEffect(() => {
        function checkSession() {
            if (localStorage.getItem('_id') !== "" && localStorage.getItem('username') !== "") {
                navigate("/home");
            }
        }

        checkSession();
    }, [navigate]);


    return (
        <div className={`main ${style.main}`}>

            {showError && (<div className='error'>{error}</div>)}

            {(!showLoading && (!showLogin && !showSignup)) && (
                <div className={style.button_ctn}>
                    <div className={style.button} onClick={handleLoginClick}>Login</div>
                    <div className={style.button} onClick={handleSignupClick}>Signup</div>
                </div>
            )}

            {showLogin && (
                <div className={style.button_ctn}>
                    <input className={style.custom_input} type='text' placeholder='Username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className={style.custom_input} type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className={style.button} onClick={handleLoginOrSignup}>Login</div>
                    <span className={style.change_action} onClick={handleSignupClick}>Signup</span>
                </div>
            )}

            {showSignup && (
                <div className={style.button_ctn}>
                    <input className={style.custom_input} type='text' placeholder='Username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <input className={style.custom_input} type='password' placeholder='Password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className={style.button} onClick={handleLoginOrSignup}>Signup</div>
                    <span className={style.change_action} onClick={handleLoginClick}>Login</span>
                </div>
            )}

            {showLoading && (
                <div className={style.button_ctn}>
                    <Loading />
                </div>
            )}
        </div>
    );
};


export default Welcome;
