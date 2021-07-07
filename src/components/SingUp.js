import React from 'react';
import './SingUp.css';

function Data(props) {
    return(
        <div className="singUpData">
            <span>{props.name}: </span>
            <input type="text" />
        </div>
    )
    
}

function SingUp(props){
    const dataList = props.name.map(value =>
        <Data key={value} name={value}/>)
    return(
        <div className="singUp">
            <div className="singUpTitle">
                <span>Sing Up</span>
                <button onClick={props.onClick}>已註冊</button> 
            </div>
            {dataList}
            <button type="submit" className="sumbit">送出</button>
        </div>
    )
}

export default SingUp;