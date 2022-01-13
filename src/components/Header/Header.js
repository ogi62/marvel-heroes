import React from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <div className='header__image'>
                <img src={Logo} alt="marvel" />
            </div>
        </div>
    )
}

export default Header
