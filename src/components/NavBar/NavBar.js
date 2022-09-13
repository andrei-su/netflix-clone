import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
// Congig
import { AVATAR_URL, NETFLIX_LOGO_URL } from '../../config'
// Styles
import './NavBar.css'

export default function NavBar() {
    const [show, handleShow] = useState(false)
    const history = useHistory();

    const transitionNavBar = () => {
        if (window.scrollY > 300) {
            handleShow(true)
        } else {
            handleShow(false)
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, [])

    return (
        <div className={`nav_bar ${show && "nav_black"}`}>
            <img
                onClick={() => history.push('/')}
                src={NETFLIX_LOGO_URL}
                alt="Netflix Logo"
                className="nav_logo"
            />
            <img
                onClick={() => history.push('/profile')}
                src={AVATAR_URL}
                alt="Avatar"
                className="nav_avatar"
            />
        </div>
    )
}
