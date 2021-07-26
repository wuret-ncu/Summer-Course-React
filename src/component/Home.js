import React, { useState } from 'react';
import Singin from './Singin';
import Singup from './Singup';
import UserContext from './UserContext'
import './Home.css'

function Home(){
    const [users, setUsers] = useState([{name:"YT", account:"WULAB", password:"123"}])
    const [check, setCheck] = useState(true)
    const handleClick = () =>{
        setCheck(!check)
    }
    return(
        <>
            <UserContext.Provider value={{
            users: users,
            setUsers: setUsers
            }}>
                <div className="homeTitle"> ToDoList</div>
                <div className="home">
                    {check ? <Singin handleClick={handleClick}></Singin> :
                    <Singup handleClick={handleClick}></Singup>}
                </div>
            </UserContext.Provider>
        </>
    )
}
export default Home;