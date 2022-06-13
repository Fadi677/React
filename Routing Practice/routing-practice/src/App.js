import './App.css';
import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import NumberRoute from './components/NumberRoute';
function App() {
  return (
    <BrowserRouter>
      <p>
      </p>
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:number">
          <NumberRoute />
        </Route>
        <Route exact path="/:number/:color/:bgColor">
          <NumberRoute />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
