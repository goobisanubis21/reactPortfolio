import React from "react";
import "../static/style/home.css"
import me from "../static/images/me.png"
import HomeCard from "../components/HomeCard"

const Home = () => {
    return (
        <div id="homePage">
            <h1>Anthony Parrino</h1>
            <img src={me} alt="me" />
            <HomeCard />
        </div>
    )
};

export default Home;