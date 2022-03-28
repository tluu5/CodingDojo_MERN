import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import Main from './views/Main';
import { Switch, Route, Link } from "react-router-dom";
import CreateSundae from './views/CreateSundae';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Sundaes</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">Create Sundae</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/create">
          <CreateSundae/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
