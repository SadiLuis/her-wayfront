import React, { useState } from 'react'
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {


    // const contactLink = [{ url: "/contacto", title: "Contacto" }]
    const navbarLinks = [
        { url: "/home", title: "Home" },
        { url: "/contacto", title: "Contacto" }
    ]

    const [menuClicked, setMenuClicked] = useState(false);

    const toggleMenuClick = () => {
        setMenuClicked(!menuClicked);
    };

    return (
        <nav className="navbar">
            <span className="navbarLogo">Her-Way</span>
            {
                menuClicked ? (
                    <FiX size={25} className={"navbarMenu"} onClick={toggleMenuClick} />
                ) : (
                    <FiMenu
                        size={25}
                        className={"navbarMenu"}
                        onClick={toggleMenuClick}
                    />
                )
            }
            <ul className={
                menuClicked ? "navbarList navbarList--active" : "navbarList"
            }>
                {navbarLinks.map((item) => {
                    return (
                        <li className='navbarItem' key={item.title}>
                            <a className='navbarLink' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            {/* <ul className={
                menuClicked ? "navbarList navbarList--active" : "navbarList"
            }>
                {contactLink.map((item) => {
                    return (
                        <li className='navbarItem' key={item.title}>
                            <a className='navbarLink' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul> */}
        </nav >
    );
};

export default Navbar