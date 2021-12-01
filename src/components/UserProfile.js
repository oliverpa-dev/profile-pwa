import React from 'react';
import { useState, useEffect } from 'react';
import pictureProfile from '../pictures/profilePicture.jpg';
import car from '../pictures/hobbies/car.jpg';
import guitar from '../pictures/hobbies/guitar.jpg';
import gaming from '../pictures/hobbies/gaming.jpg';
import gym from '../pictures/hobbies/gym.jpg';
import warsaw from '../pictures/places/warsaw.jpg'
import paris from '../pictures/places/paris.jpg'
import pisa from '../pictures/places/pisa.jpg'
import khalifa from '../pictures/places/khalifa.jpg'
import uk from '../pictures/languages/uk.png'
import polish from '../pictures/languages/poland.png'
import german from '../pictures/languages/germany.png'
import netherlands from '../pictures/languages/netherlands.png'
import bulgarian from '../pictures/languages/bulgaria.png'

// TESTING THE ANIMATION
import styled, { keyframes } from 'styled-components';




const UserProfile = () => {
    //adding some keyframe animations
    const con = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-10px);
        }
        
        80% {
            opacity: 0.5;
            transfrom: translateX(-10px);
        }
        
        100% {
        opacity: 1;
        transform: translateX(0px);
        }
        ;
    `

    const container = styled.div`
    animation-name: ${con};
    animation-duration: 1.5s;
    animation-delay: 5s;
    animation-timing-function: ease-in;
    `




    //interval to run the function that 
    //changes the color of the border of the image
    const [color, setColor] = useState("FFA500");

    //every one second the color is randomized
    //and later on it is saved in the hook
    useEffect(() => {
        const interval = setInterval(() => {
            setColor(color => color = Math.floor(Math.random() * 16777215).toString(16))
        }, 1000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="user-profile-container">
            <div className="user-profile-wrapper">
                <div className="image-quote">
                    <img style={{ borderColor: "#" + `${color}` }} className="profilePicture" src={pictureProfile} alt="Profile Picture" />
                    <div className="name-social">
                        <h1 className="name-surname">Jan Kowalski</h1>
                        <div className="instagram-facebook">
                            <i style={{ color: '#40916c' }} class="fab fa-instagram"></i>
                            <h3>kowalski02</h3>
                            <i style={{ color: '#40916c' }} class="fab fa-facebook"></i>
                            <h3>kowalski04</h3>
                        </div>
                    </div>
                </div>
                <div className="under-picture-section">
                    <div className="instagram">
                        <h3>5.7K</h3>
                        <h3>Followers</h3>
                    </div>
                    <div>
                        <h3>989</h3>
                        <h3>Following</h3>
                    </div>
                    <button className="edit-profile">Edit Profile</button>
                </div>
                <div className="languages-profile">
                    <img src={uk}></img>
                    <img src={polish}></img>
                    <img src={german}></img>
                    <img src={bulgarian}></img>
                    <img src={netherlands}></img>
                </div>
                <div className="hobbies-places-section">
                    <div className="hobbies">
                        <h1 className="hobbies-title">My Hobbies</h1>
                        <div className="hobbies-imgs-grid">
                            <div className="hobbies-imgs">
                                <img src={gaming}></img>
                                <img src={gym}></img>
                                <img src={car}></img>
                                <img src={guitar}></img>
                            </div>
                        </div>
                    </div>
                    <div className="favourite-places-section">
                        <h1 className="places-title">Favourite places</h1>
                        <div className="favourite-places-imgs-grid">
                            <div className="favourite-places-imgs">
                                <img src={warsaw}></img>
                                <img src={paris}></img>
                                <img src={pisa}></img>
                                <img src={khalifa}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;