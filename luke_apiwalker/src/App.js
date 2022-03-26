import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import People from './components/People';
import Planets from './components/Planets';
import Starships from './components/Starships';
import Error from './components/Error';
import SearchBar from './views/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar/>
      <Switch>
        <Route exact path="/people/:id">
          <People/>
        </Route>
        <Route exact path="/planets/:id">
          <Planets/>
        </Route>
        <Route exact path="/starships/:id">
          <Starships/>
        </Route>
        <Route exact path="/error">
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
