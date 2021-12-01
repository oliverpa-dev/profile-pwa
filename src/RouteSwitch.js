import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import './style.css';


const RouteSwitch = () => {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/userprofile" element={<UserProfile />}></Route>
            </Routes >
        </Router >
    );
};

export default RouteSwitch;