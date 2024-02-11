import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import HomeIcon from './icons/home.svg';
import RankingIcon from './icons/ranking.svg';
import ProfileIcon from './icons/profile.svg';

function Navbar() {

    const navigate = useNavigate();

    return (
        <div className={style.navbar}>
            <div onClick={() => navigate("/home")}>
                <img className={style.svg} src={HomeIcon} alt='Home' />
            </div>
            <div onClick={() => navigate("/ranking")}>
                <img className={style.svg} src={RankingIcon} alt='Ranking' />
            </div>
            <div onClick={() => navigate("/profile")}>
                <img className={style.svg} src={ProfileIcon} alt='Profile' />
            </div>
        </div>
    )
}

export default Navbar;
