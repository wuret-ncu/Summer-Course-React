import React, { useContext, useState } from 'react';
import CheckContext from './CheckContext'
import UserContext from './UserContext'
import './Singin.css'

function Singin(props){
    const isCheck = useContext(CheckContext)
    const isUsers = useContext(UserContext)
    const [user, setUser] = useState({account:"", password:""})
    const chekcUser = () => {
        // console.log(isUsers.users.length)
        for(var i = 0 ; i < isUsers.users.length ; i++){
            if(isUsers.users[i].account === user.account){
                if(isUsers.users[i].password === user.password){
                    isCheck.setUserName(isUsers.users[i].name)
                    return true;
                }
            }
        }
        return false;
    }
    const handleClick = () => {
        console.log(chekcUser())
        if(chekcUser()){
            isCheck.setCheck(false)
        }
        else{
            document.getElementById("notice").innerHTML = "登入失敗";
            return
        }
    }
    return(
        <>
            <div className='loginTitle'>Login into ToDoList</div>
            <div id="notice" className="loginNotice"></div>
            <div>
                {/* <span>Account：</span> */}
                <input type="text"
                placeholder="Account" 
                onChange={(e)=>{setUser({account:e.target.value, password:user.password})}}/>
            </div>
            <div>
                {/* <span>Password：</span> */}
                <input type="password" 
                placeholder="Password" 
                onChange={(e)=>{setUser({account:user.account, password:e.target.value})}}/>
            </div>
            <button onClick={handleClick} className="loginButton">Log In</button>
            <div onClick={props.handleClick} className="singupButton">Sing up？</div>
        </>
    )
}
export default Singin;