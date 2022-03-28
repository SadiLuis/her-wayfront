import React from 'react'
import "./Navbar.css";


const Navbar = () => {


    const loginLink = [{ url: "/login", title: "Login" }]
    const contactLink = [{url: "/contacto", title: "Contacto"}]
    const navbarLinks = [{ url: "/home", title: "Home" }]


    return (
        <nav className="navbar">
            <span className="navbar__logo">Her-Way</span>
            <ul className='navbarList'>
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
            <ul className='navbarList'>
                {contactLink.map((item) => {
                    return (
                        <li className='navbarItem' key={item.title}>
                            <a className='navbarLink' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className='navbarList'>
                {loginLink.map((item) => {
                    return (
                        <li className='navbarItem' key={item.title}>
                            <a className='navbarLink' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

        </nav >
    );
};

export default Navbar