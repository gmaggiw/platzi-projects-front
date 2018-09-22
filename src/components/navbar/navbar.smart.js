import React from 'react';
import NavBar from './navbar.dumb';

class NavBarContainer extends React.Component {

    handlerClick(event) {
        event.preventDefault();
    }

    render() {
        return (
            <NavBar />
        );
    }
}

export default NavBarContainer;