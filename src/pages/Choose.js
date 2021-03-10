import React from 'react';
import "../static/style/choose.css";

function Choose() {
    return (
        <div className="mainChooseDiv">
            <div>
                <h1>Welcome to Anthony Parrino's Portfolio Web Application</h1>
                <br />
                <br/>
                <h5>Please navigate to either my freelance company site or the home page of my portfolio.</h5>
                <br />
            </div>
            <div>
                <h2><a href = "https://www.webcanvasdevelopment.com/">WebCanvas Development</a></h2>
                <br/>
                <h3>or</h3>
                <br />
                <h2><a href = "https://www.anthonyparrino.com/home">My Portfolio Home Page</a></h2>
            </div>
        </div>
    )
}

export default Choose
