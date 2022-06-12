import React, {useState} from 'react'

// assuming we have (addNewTaskMethod(task) from props)
// props.addNewTask(task)
const TaskGenerator = (props) => { 
    const [task, setTask]=useState("");
    const createTask=(e)=>{
        e.preventDefault();
        const newTask=task;
        props.addNewTask(newTask)
    }
    return (
        <>
            <form onSubmit={createTask}>
                <input type="text" onChange={(e)=>setTask(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}

export default TaskGenerator;