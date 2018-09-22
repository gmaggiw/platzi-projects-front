import React from 'react';
import ProjectsItem from './item.dumb';

function ProjectsList(props)  {

    const listProjects = props.projects.map((item) => {
        return <ProjectsItem key={item.pk.toString()}
                             {...item} />
    });
    return(
        <ul className="list-unstyled py-2 projects-list">
            {listProjects}
        </ul>
    );
}

export default ProjectsList;