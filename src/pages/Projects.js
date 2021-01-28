import React from "react";
import ProjectComponent from "../components/ProjectComponent"
import projects from "../projects.json";

function Projects() {

    return(
        <div>
            <h1 className="projectsTitle">Projects</h1>
            {projects.map(project => (
                <ProjectComponent 
                    key={project.id}
                    title={project.title}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                    code={project.code}
                />
            ))}
        </div>
    )
}

export default Projects