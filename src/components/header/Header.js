import React, { useState, useEffect } from 'react'
import logo from './logo.png'
import { NavLink } from 'react-router-dom'
import { CSSTransition } from "react-transition-group";

const navLinks = ['home', 'about', 'skills', 'project', 'contact']

const Header = () => {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1250px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };
    return (
        <header>
            <NavLink to='/'>
                <img className="Logo" src={logo} alt="logo" />
            </NavLink>
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350}
                classNames="NavAnimation"
                unmountOnExit
            >
                <nav className="Nav">
                    {navLinks.map(navLink => (
                        <li key={navLink}>
                            <NavLink
                                onClick={() => setNavVisibility(!isNavVisible)}
                                className="listStyle"
                                to={navLink === 'home' ? '/' : '/' + navLink}
                                exact
                                activeStyle={{ 'color': '#FFFFFF' }}
                            >
                                {navLink.toUpperCase()}
                            </NavLink>
                        </li>
                    ))}
                </nav>
            </CSSTransition>
            <div className="burger"
                onClick={() => setNavVisibility(!isNavVisible)}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </header>
    )
}

export default Header