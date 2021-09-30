import { Link } from 'react-router-dom';
import { useState } from 'react';
import menuIcon from './component-resources/menu-icon.png';
import peaceIcon from './component-resources/peace.png';

export default function Navbar() {
    
    const [state, setState] = useState(false);
    
    function toggleMenu() {
        if(state) {
            setState(false);
        }
        else {
            setState(true);
        }
        console.log(state);
    }

    let sidebarOpen = (state) ? "sidebar-container open" : "sidebar-container";
    
    return (
        <>
        <div className="navbar-container" id="navbar-container">
            <img src={menuIcon} alt="menu" id="menu-btn" className="navbar-icon" onClick={toggleMenu} />
            <Link className="title" to="/" title="Go back home :)">Why hello there</Link>
            <img src={peaceIcon} alt="peace" id="peace-btn" className="navbar-icon" />
        </div>
        <div className={sidebarOpen} id="sidebar-container">
            <span className="sidebar-item" id="abt-site"><Link className="sidebar-link" to="/abt-site" title="About this site">About this site</Link></span>
            <span className="sidebar-item" id="abt-me"><Link className="sidebar-link" to="/abt-me" title="About me">About me</Link></span>
            <span className="sidebar-item" id="contact"><Link className="sidebar-link" to="/contact" title="Contact me">Contact</Link></span>
        </div>
        </>
    )
}