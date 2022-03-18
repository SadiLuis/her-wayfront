import React from 'react'
import "./Navbar.css";


const Navbar = ({ navbarLinks }) => {
    return (
        <nav className="navbar">
            <span className="navbar__logo">Her-Way</span>
            <ul className='navbarList'>
                Home
            </ul>
        </nav >
    );
};

export default Navbar