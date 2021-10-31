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
                <h3 className="card-title">Full Stack Software Engineer</h3>
                <br />
                <h5 className="card-subtitle mb-2 text-muted">- ReactJS - HTML5 - CSS3 - JavaScript - JQuery - JQuery - Redux - JSON - NodeJS - Express - MongoDB - MySQL - MERN -</h5>
                <br />
                <h4 className="h4El">- About Me -</h4>
                <br />
                <strong id="card-text" className="card-text myInfo">My coding journey began in 2017 when I started on the path of becoming a self taught programmer. Although that route was quite bumpy, it laid the foundation of knownlege that I needed to take my education to the next level. I completed the CS50 introduction to computer science course through Harvard University's EDX program in early 2019. I begain taking on clients for small web applications and programs soon after but I felt as if I needed a full stack background in order to truely build a career. I enrolled in the Rutgers Coding Bootcamp for Full Stack Web Development in 2020 and proudly graduated the 6 month demanding and intensive course with an A+ academic average. I am always learning and continue to take online course to expland what I know to stay up to day with the ever changing industry software development requires. 
                </strong>
                <div className="commission">
                    <h4 className="h4El">- FreeLance -</h4>
                    <br />
                    <strong id="card-text" className="card-text myInfo">Currently I am accepting freelance commissioned based work through my other website, <a href="https://www.webcanvasdevelopment.com/">WebCanvasDevelopment.com</a>. This means if you are looking for a website with no limitations to be live on the internet for your business, personal use or any reson at all, I can create it for you based on any specific guidlines or design layouts you may or may not request. For any questions or FREE estimates check out the <a href="/contact">contact page</a> and send me an email.</strong>
                </div>
                <br />
                <div id="logos">
                    <a title="Github" href="https://github.com/goobisanubis21" className="card-link"><img id="githubLogo" src={github} alt="github" /></a>
                    <a title="LinkedIn" href="https://www.linkedin.com/in/anthony-parrino-887b391b3/" className="card-link"><img id="linkedinLogo" src={linkedin} alt="linkedin" /></a>
                    <a title="Instagram" href="https://www.instagram.com/antonio21_art/" className="card-link"><img id="instagramLogo" src={instagram} alt="instagram" /></a>
                    <a title="Resume" href="/ResumePage" className="card-link"><img id="resumeLogo" src={resume} alt="resume" /></a>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;