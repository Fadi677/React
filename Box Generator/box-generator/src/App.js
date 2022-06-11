import './App.css';
import React, {useState} from 'react';
import ColorBox from './components/ColorBox';
import ShowBoxes from './components/ShowBoxes';

function App() {
  const [color, setColor]=useState([])
  const chooseColor=(colorInput)=>{//color from colorBox
    console.log("++++++++", color);
    setColor(color.concat({colorInput}));
    console.log("-------", color);
      }
  return (
    <div className="App">
      <ColorBox thisColor={chooseColor}/> {/* //thisColor from ColorBox  */}
      <ShowBoxes colorToShowColorArray={color}/> {/* //sends "color" from parent to child */}
    </div>
  );
}

export default App;