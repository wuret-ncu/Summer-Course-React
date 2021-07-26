import React from 'react';
import './TaskList.css';

function TaskList(props){
    const tasks = props.tasks;
    const handleChange = () => {
        props.changeCompleted(tasks.id);
    }
    const deleteTask = () => {
        props.deleteTask(tasks.id);
    }
    return(
        <>
            <div className="task">
                <div>
                    <input type="checkbox" id={tasks.id} name={tasks.id} checked={tasks.completed} 
                    onChange={handleChange}></input>
                    <label htmlFor={tasks.id}>{tasks.name}</label>
                </div>
                <button onClick={deleteTask}>Delete</button>
            </div>
            <hr/>
        </>
    )
}
export default TaskList;