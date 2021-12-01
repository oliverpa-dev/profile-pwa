import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'

const Footer = () => {

    return (
        <footer>
            <ul>
                <Link style={{ textDecoration: 'none' }} to="/">
                    <li>
                        <i class="fas fa-home"></i>
                    </li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/userprofile">
                    <li>
                        <i class="far fa-user"></i>
                    </li>
                </Link>
            </ul>
        </footer>
    )

}

export default Footer;