import React from 'react';

function ProjectComponent(props) {
    return (
        <div className="card">
            <h2 className="content">{props.title}</h2>
            <div className="img-container">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <li>{props.description}</li>
                <li><a href={props.link}>Github Code</a></li>
                <li><a href={props.code}>Project Link</a></li>
            </div>
        </div>
    );
};

export default ProjectComponent;
