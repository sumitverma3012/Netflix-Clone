import React, {useEffect, useState} from 'react';
import './Navbar.css';
import netflixLogo from '../../assets/images/Netflix_Logo_RGB.png';
import netflixUserLogo from '../../assets/images/Netflix_User_Logo.png';

const Navbar = () => {
    const [darkBackground, setDarkBackground] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setDarkBackground(true);
            } else {
                setDarkBackground(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", undefined);
        }
    }, []);
    return(
        <div className={`navbar ${darkBackground && 'navbar__dark'}`}>
            <img
                src={netflixLogo}
                alt="Netflix Logo"
                className="nav__logo"
            />
            <img
                className="nav__user"
                src={netflixUserLogo}
                alt="Netflix User Logo"
            />
        </div>
    )
};

export default Navbar;