import React, { useState } from 'react';

import '../css/Header.css';
import { Redirect } from 'react-router-dom';
import gsap from 'gsap';

const Header = () => {

    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        gsap.to('ul.page-transition li', {duration : .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2, onComplete: () => {
            setRedirect(true);
            gsap.to('ul.page-transition li', {duration : .5, scaleY: 0, transformOrigin: "bottom left", stagger: .2});
            setRedirect(false);
        }});
    }

    if (redirect)
        return <Redirect to="/" />
    else
        return (
        <div className="header-main-container">
            <div className="logo-container">
                myMovieDB
            </div>
            <nav className="nav-container">
                <ul>
                    <li className="nav-item" onClick={handleClick}>HOME</li>                    
                </ul>

            </nav>
        </div>
    )
}

export default Header;