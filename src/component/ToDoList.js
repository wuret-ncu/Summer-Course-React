import React, { useContext, useEffect, useState } from 'react';
import TaskList from './TaskList';
import CheckContext from './CheckContext';
import {nanoid} from 'nanoid';
import './ToDoList.css'

function ToDoList(props){
    //共享userName
    const isCheck = useContext(CheckContext);
    //控制All(0), finished(1), unfinished(2)
    const [choose, setChoose] = useState(0);
    const [tasks, setTasks] = useState([
        {id:0, name:"讀書", completed:true},
        {id:1, name:"寫作業", completed:false},
        {id:2, name:"畫畫", completed:false}]);
    //要呈現的tasks
    const [showList, setShowList] = useState(tasks);
    //當choose or tasks有變動的時候showList也要更正
    useEffect(() => {
        if(choose === 0)
            setShowList(tasks);
        else{
            if(choose === 1)
                setShowList(tasks.filter(task => task.completed === true))
            else
                setShowList(tasks.filter(task => task.completed === false))
        }
    },[choose, tasks]);
    //改變task中的狀態
    const changeCompleted = (id) => {
        const newTasks = tasks.map(task => {
            if(task.id === id){
                return {...task, completed: !task.completed};
            }
            else
                return task;
        })
        setTasks(newTasks)
    };
    //刪除task
    const deleteTask = (id) => {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    };
    const taskList = showList.map(tasks => 
        <TaskList key={tasks.id} tasks={tasks} 
        changeCompleted={changeCompleted}
        deleteTask={deleteTask}/>);
    
    //紀錄要增加的task
    const [msg, setMsg] = useState("");
    //增加task
    const addTask = () => {
        if(msg === "")
            return
        setTasks(pre => [...pre,{id:nanoid(), name:msg, completed:false}]);
        setMsg("")
    };
    //登出
    const handleClick = () => {
        isCheck.setCheck(true);
        isCheck.setUserName("")
    };
    
    return(
        <>
            <div className="toDoListNav">
                <div className="navTitle">ToDoList</div>
                <div className="navInfo">
                    <span>{isCheck.userName}</span>
                    <span>
                        <button onClick={handleClick}>Sing out</button>
                    </span>
                </div>
            </div>
            <div className="toDoListItem">
                <div className="itemButton">
                    <div onClick={()=>{setChoose(0)}}>All</div>
                    <div onClick={()=>{setChoose(1)}}>Completed</div>
                    <div onClick={()=>{setChoose(2)}}>Uncompleted</div>
                </div>
                <hr></hr>
                <div className="addItem">
                    <input type="text"
                    placeholder="Add Task"
                    value={msg}  
                    onKeyPress={(e)=>{if(e.charCode == 13) addTask();}}
                    onChange={(e)=>{setMsg(e.target.value)}}/>
                    <button onClick={addTask}>Add</button>
                </div>
                {taskList}
            </div>
        </>
    )
}
export default ToDoList;