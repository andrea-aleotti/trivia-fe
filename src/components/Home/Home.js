import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Home.module.css';
import Loading from '../../assets/Loading';
import Navbar from '../../assets/Navbar';
import apiCaller from '../../services/apiCaller';

const Home = () => {

    const username = localStorage.getItem("username")

    const navigate = useNavigate();

    return (
        <div className={`main ${style.main}`}>

            <div className={style.modalita_ctn}>

                <h4 className={style.modalita_text}>Ciao {username}</h4>
                <span className={style.modalita_text}>Seleziona una modalità</span>

                <div className={style.modalita} onClick={() => navigate("/battle-royale")}>
                    <span>Battle Royale</span>
                </div>

                <div className={style.modalita} onClick={() => navigate("/1vs1")}>
                    <span>1 VS 1</span>
                </div>

                <div className={style.modalita} onClick={() => navigate("/lobby-privata")}>
                    <span>Lobby Privata</span>
                </div>
            </div>

            <Navbar />
        </div>
    );
}

export default Home;