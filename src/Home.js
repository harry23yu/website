import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import game_controller from './images/game_controller.png';

const Home = () => {
    return (
        <div>
            <div className="upper_links">
                <a 
                    className="upper_link"
                    href='https://www.udemy.com/course/unityplatformer/'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    2D Game Developer Course on Udemy
                </a>
                |  
                <a 
                    className="upper_link"
                    href='https://play.unity.com/'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Play Unity Games
                </a>
            </div>
            <div className="harry_name">
                <h1>Harry Yu <img src={game_controller} alt="" width="65px"></img></h1>
            </div>
            <br></br>
            <div className="links_row">
                <div className="links">
                    <Link to="/bio">
                        <div className="link_header">
                            <p>About Me</p>
                        </div>
                    </Link>
                </div>
            </div>
            <br></br>
                <a 
                    className="links_row"
                    href='https://play.unity.com/mg/other/the-journey-of-the-little-brown-fox-final-build'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Play My New Unity 2D Platformer Game Right Here!
                </a>
            <br></br>
                <a 
                    className="links_row"
                    href='https://docs.google.com/spreadsheets/d/1rX2oXqc7qrFZj5679qRLr_7UWSAXVjLQezD76SJrd8U'
                    target="_blank"
                    rel="noopener noreferrer"
                >
                   Tournament Sign-up
                </a>
        </div>
    )
}

export default Home;