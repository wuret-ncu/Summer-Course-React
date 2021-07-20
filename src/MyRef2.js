import React, { useRef, useEffect } from 'react'
function MyRef2(props){
    const inputRef = useRef(null)
    useEffect(() => {
        console.log("UseRef")
        console.log(inputRef)
        console.log(inputRef.current)
    },[])
    return (
        <input ref={inputRef} defaultValue={"你好呀"} >
        </input>
    );
}
export default MyRef2;
