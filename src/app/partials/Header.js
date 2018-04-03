import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './css/Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <header>
                <nav className='teal lighten-2'>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo center Header-link">BitBook</Link>
                        <a href="#" data-activates="mobile-demo" className="button-collapse Header-link"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/feed" className='Header-link'>Feed</Link></li>
                            <li><Link to="/people" className='Header-link'>People</Link></li>
                            <li><Link to="/profile" className='Header-link'>Profile</Link></li>
                        </ul>
                        <ul className="side-nav Header-side-nav" id="mobile-demo">
                            <li><Link to="/feed" className='Header-link'>Feed</Link></li>
                            <li><Link to="/people" className='Header-link'>People</Link></li>
                            <li><Link to="/profile" className='Header-link'>Profile</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;