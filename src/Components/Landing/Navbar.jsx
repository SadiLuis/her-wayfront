import React from 'react'
import "./Navbar.css";


const Navbar = () => {

    const navbarLinks = [{ url: "/home", title: "Login" }]

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
        </nav >
    );
};

export default Navbar