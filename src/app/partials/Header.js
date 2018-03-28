import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <nav className='teal lighten-2'>
                    <div className="nav-wrapper container">
                        <Link to="/" className="brand-logo">BitBook</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/feed">Feed</Link></li>
                            <li><Link to="/people">People</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
export default Header;