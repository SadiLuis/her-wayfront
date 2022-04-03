import React from 'react'
import "./NavbarConductora.css";


const Navbar = ( idConductora ) => {

    const navbarLinks = [ { url: `/perfilConductora/${idConductora}` , title: "Perfil" }]

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
        </nav>
    );
};

export default Navbar