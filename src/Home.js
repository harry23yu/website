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
                <h1>Harry Yu <img src={game_controller} alt="" width="70px"></img></h1>
            </div>
            <br></br>
            <div className="links_row">
                <div className="links">
                    <Link to="/Bio">
                        <div className="link_header">
                            <p>About Me</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home;