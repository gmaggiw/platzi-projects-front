import React from 'react';
import ProjectsSearch from './search.dumb.js';
import ProjectsList from './list.dumb.js';
import ProjectsSide from './side.dumb.js';

import Config from '../../config';


class ProjectsContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            projects: [],
        };
    }

    componentDidMount(){

        const config = new Config();
        fetch(config.api + '/projects?format=json')
        .then(response => response.json())
        .then(data => this.setState({ projects: data }));

    }

    render(){
        return(
            <div>
                <ProjectsSearch />
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <ProjectsList projects={this.state.projects}/>
                        </div>
                        <div className="col-4">
                            <ProjectsSide />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectsContainer;