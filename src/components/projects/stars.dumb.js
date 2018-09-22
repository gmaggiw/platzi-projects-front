import React from 'react';

function ProjectsStars(props) {

    var numbers = [1,2,3,4,5];
    var listStars = numbers.map((number) => {

        if(props.stars >= number) {
            return <i className="fa fa-star blue-text" key={number} />
        } else {

            return <i className="fa fa-star blue-gray" key={number} />
        }
    });
    const console = () =>{console.log('listStars', listStars)}
    return(
        <span>
        {listStars}
        </span>
    );

}

export default ProjectsStars;