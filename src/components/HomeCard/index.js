import React from "react";
import github from "../../static/images/git.png";
import linkedin from "../../static/images/linked.png";
import instagram from "../../static/images/instalogo.png";
import "./homeCard.css";

function HomeCard() {
    return (
        <div className="card">
            <div className="card-body">
                <br />
                <h4 className="card-title">Full Stack Web Developer</h4>
                <br />
                <h5 className="card-subtitle mb-2 text-muted">- HTML - CSS - JavaScript - JQuery - ReactJS - NodeJS - MONGOD - MySQL -</h5>
                <br />
                <strong className="card-text">Currently I am enrolled in the Rutgers bootcamp curriculum for fullstack software development. I started coding on my own in 2018 and completed the CS50 introduction to computer science course through Harvard University in early 2020. I prefer working as a fullstack developer with ReactJS, I enjoy the backend development as much as the frontend. I feel very confortable with my UI design capabilities due to my highly skilled artistic background in oil painting, the Instagram link below has a lot of my paintings for display. I look forward to a life long career in web design understanding the fact that learning something new each day will only bring me closer to my goal of mastering my development skills.</strong>
                <br />
                <div id="logos">
                    <a href="https://github.com/goobisanubis21" className="card-link"><img id="githubLogo" src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/anthony-parrino-887b391b3/" className="card-link"><img id="linkedinLogo" src={linkedin} alt="linkedin" /></a>
                    <a href="https://www.instagram.com/antonio21_art/" className="card-link"><img id="instagramLogo" src={instagram} alt="instagram" /></a>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;