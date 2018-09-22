import React from 'react';
import ProjectsStars from './stars.dumb';

function ProjectsItem(props) {
    return(
        <li className="media py-4">
            <img
                width="72"
                className="d-flex mr-3 img-fluid"
                src={props.logo}
                alt={props.name} />
            <div className="media-body">
                <a href={"/projects/" + props.pk}>
                    <h5 className="mt-0 mb-2 font-weight-bold">
                        {props.name}
                    </h5>
                </a>
                <ProjectsStars stars={props.stars} />
               {/*
                {% if project.stars %}
                    {% for star in project.stars|range %}
                        <i className="fa fa-star blue-text"> </i>
                    {% endfor %}
                    {% if project.stars < 5 %}
                        {% for star in 5|sub:project.stars|range %}
                            <i className="fa fa-star grey-text"> </i>
                        {% endfor %}
                    {% endif %}

                {% else %}
               
                <i className="fa fa-star grey-text"> </i>
                <i className="fa fa-star grey-text"> </i>
                <i className="fa fa-star grey-text"> </i>
                <i className="fa fa-star grey-text"> </i>
                <i className="fa fa-star grey-text"> </i>

                */}
                <p>{props.description}</p>
                <div className="row">
                    <div className="col">Hola
                    {/*}
                        {% for lang in project.stacks.all %}
                            <i className="fab fa-{{lang.name}} fa-2x gray-text"> </i>&nbsp;&nbsp;
                        {% endfor %} 
                    */}
                    </div>
                    <div className="col">
                        <span className="project-members">{props.members} colaboradores</span>
                    </div>
                    <div className="col">
                        <a href={props.github} target="_blank" role="button" className="btn btn-elegant btn-rounded fab fa-github fa-2x float-right"> Github</a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default ProjectsItem;