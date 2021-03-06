import React from 'react';
import './SingIn.css';

function Data(props) {
    return(
        <div className="singInData">
            <span>{props.name}: </span>
            <input type="text" />
            <br />
        </div>
    )
    
}

function SingIn(props){
    const dataList = props.name.map(value =>
        <Data key={value} name={value}/>)
    function handleClick(e){
        console.log(e);
        // console.log(nativeEvent)
    }
    return(
        <div className="singIn">
            <div className="singInTitle">
                <span>Sing In</span>
                <button onClick={props.onClick}>未註冊</button> 
            </div>
            {dataList}
            <button type="submit" className="sumbit" onClick={handleClick}>送出</button>
        </div>
    )
}

export default SingIn;