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
import Word from './components/Word';
import Colors from './components/Colors';
function App() {
  return (
    <BrowserRouter>
      <p>
      </p>
      <Switch>
        <Route exact path="/hello/:anyWord">
          <Word />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/:number">
          <NumberRoute />
        </Route>
        <Route exact path="/hello/:color/:bgColor">
          <Colors />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
