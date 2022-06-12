import React, {useState} from 'react';
import ShowTasks from './components/ShowTasks';
import TaskGenerator from './components/TaskGenerator';

function App(props) {
// create a tasks list using setState()
  const [tasksList, setTasksList]=useState([]);
  const addNewTask = (task) => {
    // push new task to tasks list
    const allTasks=[...tasksList];
    allTasks.push(task);
    setTasksList(allTasks);
  }
  const deleteTask=(task)=>{
    const allTasks=[...tasksList];
    //we loop through tasks list and compare each task from list "t" to the task we get from child component
    const requiredTaskIndex=allTasks.findIndex((t) => {return t===task});
    allTasks.splice(requiredTaskIndex,1)
    setTasksList(allTasks);
  }
  return (
    <div className="App">
      {/* //blue addNewTask sends the function "yellow addNewTask" from app.js to the child component */}
      <TaskGenerator addNewTask={addNewTask}/>
      {/* "task" bellow sends the task itself to the child component */}
      {tasksList.map((t)=>{return <ShowTasks key={Math.random()} task={t} deleteTask={deleteTask}/>})}
    </div>
  );
}

export default App;