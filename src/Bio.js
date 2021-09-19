import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Bio = () => {
    return (
        <div>
            <div className="autobiography_title">
                <h1>About Me</h1>
            </div>
            <div className="autobiography_text">
                <h1>Hi! My name is Harry. I was born and raised in Oregon. I am a senior in high school.</h1>
                <br></br>
                <h1>I love to code and learn computer science, specifically game development. Recently, I made a new game titled 
                    "The Journey of the Little Brown Fox. You can find the link to the game on the homepage. The game is based on 
                    a Udemy course. You can also find the link on the homepage. In the future, I want to build more games!
                </h1>
                <br></br>
                <h1>My hobbies include plaing basketball, watching the NBA (go LeBron!), listening to Chinese music, running, and playing
                    video games.
                </h1>
            </div>
            <Link to="/Home">
                <div className="home">Home</div>
            </Link>
        </div>
    )
}

export default Bio;