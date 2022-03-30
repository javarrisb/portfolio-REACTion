import React from 'react';

const Project = (props) => {
    const { project } = props;

    return (
        <div className="card-body">
            <h4 className="card-title">{project.name}</h4>
            <p className="card-text">{project.description}</p>
            <a href={project.github} className="btn btn-success">GitHub Repo</a>

        </div>
    )
}

export default Project;