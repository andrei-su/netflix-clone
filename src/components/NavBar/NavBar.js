import React, { useEffect, useState } from 'react'
// Congig
import { AVATAR_URL, NETFLIX_LOGO_URL } from '../../config'
// Styles
import './NavBar.css'

export default function NavBar() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 300) {
                handleShow(true)
            } else {
                handleShow(false)
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav_bar ${show && "nav_black"}`}>
            <img
                src={NETFLIX_LOGO_URL}
                alt="Netflix Logo"
                className="nav_logo"
            />
            <img
                src={AVATAR_URL}
                alt="Avatar"
                className="nav_avatar"
            />
        </div>
    )
}
