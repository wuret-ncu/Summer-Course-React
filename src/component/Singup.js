import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import './Singup.css'

function Singup(props){
    const [user, setUser] = useState({name:"", account:"", password:""});
    const isUsers = useContext(UserContext)
    const [notice, setNotice] = useState(0)
    const checkUser = () => {
        if(user.name === "" || user.account === "" || user.password === ""){
            setNotice(1);
            return false;
        }
        for(var i = 0 ; i < isUsers.users.length ; i++){
            if(user.account === isUsers.users[i].account){
                setNotice(2);
                return false;
            }
        }
        return true;
    }
    const handleClick = () => {
        console.log(checkUser());
        if(!checkUser())
            return;
        else{
            setUser({name:"", account:"", password:""});
            setNotice(0);
            isUsers.setUsers(pre => [...pre, user]);
        }
    }
    return(
        <>
            <div className='singupTitle'>Create a New Account</div>
            <div className="singupNotice">
                {notice === 0 ? <div></div> : 
                notice === 1 ? <div>不可以空白喔~~</div> :
                <div>帳號重複了囉~~</div>  }
            </div>
            <div>
                {/* <span>Name：</span> */}
                <input type="text"
                placeholder="User Name" 
                value={user.name}
                onChange={(e)=>{setUser({name:e.target.value, account:user.account, password:user.password})}}/>
            </div>
            <div>
                {/* <span>Account：</span> */}
                <input type="text" 
                placeholder="Account" 
                value={user.account}
                onChange={(e)=>{setUser({name:user.name, account:e.target.value, password:user.password})}}/>
            </div>
            <div>
                {/* <span>Password：</span> */}
                <input type="password" 
                placeholder="Password" 
                value={user.password}
                onChange={(e)=>{setUser({name:user.name, account:user.account, password:e.target.value})}}/>
            </div>
            <button onClick={handleClick} className="submitButton">Submit</button>
            <div onClick={props.handleClick} className="singinButton">Already have an account?</div>
        </>
    )
}
export default Singup;