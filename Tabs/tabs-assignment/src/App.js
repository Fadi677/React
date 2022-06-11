import './App.css';
import React, {useState} from 'react';
import TabComponent from './components/TabComponent';
import ShowTab from './components/ShowTab';

function App() {
  const [tab, setTab]=useState("");
  const thisTab=(tabName)=>{
    setTab(tabName);
  }
  return (
    <div className="App">
      <TabComponent tabName={thisTab}/>
      <br></br>
      <br></br>
      <ShowTab tabToShow={tab}/>
    </div>
  );
}

export default App;