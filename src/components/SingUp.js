import React, {useEffect, useState} from 'react';
import './SingUp.css';

function Data(props) {
    const [data, setData]=useState("")
    const name = props.name;
    const handleChange = props.handleChange;
    useEffect(()=>{
        if(data)
            handleChange(name, data)
    },[data])
    return(
        <div className="singUpData">
            <span>{props.name}: </span>
            <input type="text" onChange={(e)=>{setData(e.target.value);}}/>
            <span className="notice">{ (data.length)<8 ? props.notice : ""}</span>
        </div>
    )
}

function SingUp(props){
    function handleChange(name, data){
        console.log(name + ":" + data)
    }
    // const handleChange = (name, data) =>{
    //     console.log(name + ":" + data)
    // }
    const dataList = props.name.map(value =>
        <Data key={value.name} name={value.name} notice={value.notice} handleChange={handleChange}/>)
    
    // useEffect(() => {
    //     return (() => {
    //         console.log("bye")
    //     });
        
    // }, []); 
    
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