import React from "react";
import github from "../../static/images/git.png";
import linkedin from "../../static/images/linked.png";
import instagram from "../../static/images/instalogo.png";
import resume from "../../static/images/reumePic.png";
import "./homeCard.css";

function HomeCard() {
    return (
        <div className="card" id="cardBodyDiv">
            <div className="card-body">
                <br />
                <h3 className="card-title">Full Stack Web Developer</h3>
                <br />
                <h5 className="card-subtitle mb-2 text-muted">- HTML - CSS - JavaScript - JQuery - ReactJS - NodeJS - MONGOD - MySQL -</h5>
                <br />
                <h4 className="h4El">- About Me -</h4>
                <br />
                <strong id="card-text" className="card-text myInfo">Rutgers University Coding Bootcamp for fullstack software development graduate with an A+ academic average. I started coding on my own in 2017 and completed the CS50 introduction to computer science course through Harvard University's EDX program in early 2019. Working as a fullstack developer with ReactJS, I enjoy the backend development as much as the frontend. I feel very comfortable with my UI design capabilities due to my highly skilled artistic background in oil painting, the Instagram link below has a lot of my paintings for display. I am also proficient in database creation and management with Mongodb and MySql. MERN stack has become something of a specialty in this most recent year and if you want to view my favortie project you can do so <a href="/projects">here</a>. Having a life long career in web design, understanding the fact that learning something new each day will only bring me closer to my goal of mastering my development skills, has been a long time dream of mine.</strong>
                <div className="commission">
                    <h4 className="h4El">- FreeLance -</h4>
                    <br/>
                    <strong id="card-text" className="card-text myInfo">Currently I am accepting freelance commissioned based work. This means if you are looking for a website with no limitations to be live on the internet for your business, personal use or any reson at all, I can create it for you based on any specific guidlines or design layouts you may or may not request. For any questions or FREE estimates check out the <a href="/contact">contact page</a> and send me an email.</strong>
                </div>
                <br />
                <div id="logos">
                    <a title="Github" href="https://github.com/goobisanubis21" className="card-link"><img id="githubLogo" src={github} alt="github" /></a>
                    <a title="LinkedIn" href="https://www.linkedin.com/in/anthony-parrino-887b391b3/" className="card-link"><img id="linkedinLogo" src={linkedin} alt="linkedin" /></a>
                    <a title="Instagram" href="https://www.instagram.com/antonio21_art/" className="card-link"><img id="instagramLogo" src={instagram} alt="instagram" /></a>
                    <a title="Resume" href="https://docs.google.com/document/d/1DF1pCoxE6CbxVXvTtMoAfvGEWmGFIUaM0rdCEHtcqZw/edit?usp=sharing" className="card-link"><img id="resumeLogo" src={resume} alt="resume" /></a>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;