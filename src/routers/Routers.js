import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import LoginView from "../views/login/Login";
import SignupView from "../views/signup/Signup";

class Routers extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/signup" component={SignupView} />
                <Redirect from='*' to='/login' />
            </Switch>
        );
    }
}

export default Routers;
