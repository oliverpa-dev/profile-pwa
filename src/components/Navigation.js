import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css'
// TESTING THE ANIMATION
import styled, { keyframes } from 'styled-components';

const Nav = () => {

    const navFade = keyframes`

0% {
opacity: 0;
transform: translateY(-10px);
}

80% {
    opacity: 0.5;
    transfrom: translateY(-10px);
}

100% {
opacity: 1;
transform: translateY(0px);
}
`;

    const Navigation = styled.nav`
        animation-name: ${navFade};
        animation-duration: 1s;
        animation-delay: 2s;
        animation-timing-function: ease-in;
    `




    return (
        <Navigation>
            <h3 className="logo">Traveller</h3>
            <ul className="nav-links">
                <Link style={{ textDecoration: 'none' }} to="/">
                    <li>
                        <i class="fas fa-home"></i>
                        <p>Home</p>
                    </li>
                </Link>
                <Link style={{ textDecoration: 'none' }} to="/userprofile">
                    <li>
                        <i class="far fa-user"></i>
                        <p>Your Profile</p>
                    </li>
                </Link>
            </ul>
        </Navigation>
    );
}

export default Nav;
