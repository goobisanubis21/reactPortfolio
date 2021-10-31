import React from "react";
import "../static/style/home.css"
import me from "../static/images/mee.jpg"
import HomeCard from "../components/HomeCard"

const Home = () => {
    return (
        <div id="homePage">
            <h1 className="myName">Anthony Parrino</h1>
            <img className="myProfilePic" src={me} alt="me" />
            <HomeCard />
        </div>
    )
};

export default Home;