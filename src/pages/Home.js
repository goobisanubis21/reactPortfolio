import React from "react";
import "../static/style/home.css"
import me from "../static/images/me.png"

const Home = () => {
    return (
        <div id="homePage">
            <h1>Anthony Parrino</h1>
            <img src={me} alt="me" />
        </div>
    )
}

export default Home;