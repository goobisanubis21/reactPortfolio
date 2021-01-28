import React from 'react';
import "./projectComponent.css";

function ProjectComponent(props) {
    return (
        <div className="card" id="projectCard">
            <h2 className="content">{props.title}</h2>
            <div className="img-container">
                <img id="imageSize" className="listCardItems" src={props.image} alt={props.title} />
            </div>
            <div className="content" id="cardList">
                <li className="listCardItems">{props.description}</li>
                <li className="listCardItems"><a href={props.link}>{props.title} GitHub Code</a></li>
                <li className="listCardItems"><a href={props.code}>{props.title} Project Link</a></li>
            </div>
        </div>
    );
};

export default ProjectComponent;
