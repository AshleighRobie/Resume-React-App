import React, { Component } from 'react';
/*
How to create NavBar Component
https://stackoverflow.com/questions/50166035/how-to-implement-navbar-using-react
*/

class NavBar extends Component {
    render() {
        return(
            <div>
                <ul id="nav">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Education</a></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;