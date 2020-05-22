import React from 'react';
import { NavLink } from "react-router-dom";
import './Nav.scss';

class NavComponent extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink to="/login" activeClassName="active">Login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" activeClassName="active">Signup</NavLink>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default NavComponent;
