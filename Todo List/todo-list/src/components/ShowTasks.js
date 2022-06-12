import React, {useState} from 'react'

const ShowTasks = (props) => {
    // const removeTask=()=>{
    //     props.deleteTask(props.task);
    // }
    const [isDone, setIsDone]=useState(false);
    return (
    <div>
        <label style={isDone? {textDecorationLine:'line-through'}:{}}>{props.task}</label>
        <input type="checkBox" checked={isDone} onChange={e=> setIsDone(e.target.checked)}/>
        <button onClick={() => {props.deleteTask(props.task)}}>Delete</button>
    </div>
    )
}

export default ShowTasks
//textDecorationLine: 'line-through'