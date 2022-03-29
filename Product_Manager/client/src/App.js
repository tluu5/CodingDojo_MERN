import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Main from './views/Main';
import Create from './views/Create';
import Single from './views/Single';
import Update from './views/Update';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>
        <Route exact path="/products/create">
          <Create/>
        </Route>
        <Route exact path="/products/:_id">
          <Single/>
        </Route>
        <Route exact path="/products/:_id/edit">
          <Update/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
