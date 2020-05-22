import React from 'react';
import './App.scss';
import { BrowserRouter as Router } from "react-router-dom";
import Routers from '../../routers/Routers';
import NavComponent from '../nav/Nav';

class AppComponent extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrap">
          <NavComponent />
          <Routers />
          <div className="push"></div>
        </div>
      </Router>
    );
  }
}

export default AppComponent;
