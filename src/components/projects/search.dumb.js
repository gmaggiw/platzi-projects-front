import React from 'react';
import './projects.css';

function ProjectsSearch(props){
    return(
        <div style={{maxHeight:350}}>
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-image">
                        <div className="container text-white py-2 px-4 my-4" style={{width:'50%'}}>
                            <h1 className="card-title font-bold hero-project"><strong>Platzi Projects</strong></h1>
                            <p style={{fontSize:'1.2em'}}>
                                 ¡Manos a la obra!. Crea y participa en proyectos de 
                                 la comunidad de Platzi, esta es tu oportunidad de demostrar lo que sabes.
                            </p>
                            <input id="search" autoComplete="off"  className="form-control" type="text" name="query" placeholder="Buscar Proyecto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSearch;