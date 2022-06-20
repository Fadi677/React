import logo from './logo.svg';
import React, {useState} from 'react';
import StarWarsForm from './components/StarWarsForm';
import ShowStars from './components/ShowStars';
import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [starWars, setStarwars]=useState([]);
  const dataOfStars=(getData)=>{
  setStarwars(getData);
  }
  return (
    <div>
      <BrowserRouter>
      <StarWarsForm/>
        <Switch>
          <Route path="/:selectedType1/:objectId1">
            <ShowStars />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;