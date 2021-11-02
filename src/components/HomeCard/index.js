import React from "react";
import github from "../../static/images/git.png";
import linkedin from "../../static/images/linked.png";
import instagram from "../../static/images/instalogo.png";
import resume from "../../static/images/reumePic.png";
import "./homeCard.css";

function HomeCard() {
    return (
        <div id="cardBodyDiv">
            <div className='title-container'>
                <h1 className='title-text'>Anthony Parrino</h1>
                <div className='my-title-container'>
                    <div className='line'></div>
                    <h3 className='title-text'>Full Stack Software Engineer</h3>
                    <div className='line'></div>
                </div>
                <h4 className='title-text prof'>- ReactJS - HTML5 - CSS3 - JavaScript - JQuery - React-Native - Redux - JSON - NodeJS - Express - MongoDB - MySQL - MERN -</h4>
                <div className='full-line'></div>
            </div>
            <div className='my-info-container'>
                <div className='experience-container flex-style'>
                    <h4 className="h4El">- Experience -</h4>
                    <p>I have been doing freelance web design and development since late 2017, but my real world professional experience started in 2019 when I began to take on clients I had aquired from Facebook marketing and advertising. In 2020 I was offered an internship at a fantasic web development company called <a href='https://www.fortitudedev.com/'>Fortitude Inc. </a> There I learned the value of working with a team and recieved a lot of training and experience in the world of full stack web development in a professional setting. A year later in mid 2021 I accepted an offer to become a full stack web development tutor for various Universities under the company <a href='https://2u.com/'> 2U Inc.</a> who is an amazing educational organization teaching students around North America computer science. Shortly after I started tutoring I then accepted an offer to join a six month intesive computer engineering bootcamp as a teaching assiant for the University of Toronto.</p>
                </div>

                <div className='journey-container flex-style'>
                    <h4 className="h4El">- MyJourney -</h4>
                    <p>My coding journey began in 2017 when I started on the path of becoming a self taught programmer. Although that route was quite bumpy, it laid the foundation of knownlege that I needed to have to take my education to the next level. I completed the CS50 introduction to computer science course through Harvard University's EDX program in early 2019. I began taking on clients for small web applications and programs soon after but I felt as if I needed a full stack background in order to truly build a career. I enrolled in the Rutgers Coding Bootcamp for Full Stack Web Development in 2020 and proudly graduated the 6 month demanding and intensive course with an A+ academic average. I am always learning and continue to take online course to expand what I know and to stay up to date with the ever changing industry software development requires.
                    </p>
                </div>

                <div className="freelance-container flex-style">
                    <h4 className="h4El">- FreeLance -</h4>
                    <p>Currently I am accepting freelance commissioned based work through my other website, <a href="https://www.webcanvasdevelopment.com/">WebCanvasDevelopment.com</a>. This means if you are looking for a website with no limitations to be live on the internet for your business, personal use or any reson at all, I can create it for you based on any specific guidlines or design layouts that is requested. For any questions or Free estimates check out the <a href="/contact">contact page</a> and send me an email.</p>
                </div>
            </div>
            <div>
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