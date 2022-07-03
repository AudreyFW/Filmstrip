import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className='header'>
           
            <nav>
                <ul>
                <h1>Filmstrip</h1>
                    <NavLink 
                        to='/' 
                        className={(nav)=>(nav.isActive? 'nav-active' : "")}>
                        <li>Home</li>
                    </NavLink>
                    <NavLink 
                        to='/favourite'
                        className={(nav)=>(nav.isActive? 'nav-active' : "")}>
                            <li>Favorites</li>
                    </NavLink>
                </ul>
            </nav>
            
        </div>
    );
};

export default Header;