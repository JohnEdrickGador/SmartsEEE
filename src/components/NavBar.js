import React, { useState }from 'react'
import { auth } from '../firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();
    const logOutHandler = () => {
        signOut(auth)
        .then(() => {
            console.log('signed out');
            navigate('/login', {replace: true});
        })

        .catch((error) => {
            alert(error.message);
        })
    }

    //to change classess
    const [burgerClass, setBurgerClass] = useState("burger-bar unclicked"); 
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    //toggle burger menu change
    const updateMenu = (e) => {
        e.preventDefault();
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible");
        }
        else {
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
        }
        setIsMenuClicked(!isMenuClicked);

    }
    return (
        <div className = "nav-container">
            <nav>
                <div className = "burger-menu" onClick={updateMenu}>
                    <div className = {burgerClass}></div>
                    <div className = {burgerClass}></div>
                    <div className = {burgerClass}></div>
                </div>
                <h1 className='app-logo'>SmartsEEE</h1>
                <button className='logout-btn' onClick={logOutHandler}>Log Out</button>
            </nav>
            <div className = {menuClass}>
                <div className='directory'>
                    <a href='/dashboard'>Dashboard</a>
                    <a href='/graphs'>Graphs</a>
                    <a onClick={logOutHandler}>Log Out</a>
                </div>
            </div>
        </div>
    )
}
