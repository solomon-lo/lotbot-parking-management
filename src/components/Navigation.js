import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <div className="marginBottomLarge">
        <header>
            <h3 className="logo">
                <div className="lotbot_logo">lotbot</div>
            </h3>
           
           <NavLink to="/">Home</NavLink>
           <NavLink to="/about">About</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           <NavLink to="/waitlist">Waitlist</NavLink>
        </header>
        <div className="icon_group"></div>
        </div>

    );
}
 
export default Navigation;