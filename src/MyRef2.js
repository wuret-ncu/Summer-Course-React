// import React, { useRef, useEffect } from 'react'
// function MyRef2(props){
//     const inputRef = useRef(null)
//     useEffect(() => {
//         console.log("UseRef")
//         console.log(inputRef)
//         console.log(inputRef.current)
//     },[])
//     return (
//         <input ref={inputRef} defaultValue={"你好呀"} >
//         </input>
//     );
// }
// export default MyRef2;

import React, {forwardRef, useRef, useImperativeHandle} from 'react'
function MyRef2(props, ref){
    const buttonRef = useRef(null)
    const buttonRef2 = useRef(null)
    useImperativeHandle(ref, () => ({
        focus: () => {
            console.log(buttonRef.current);
        },
        focus2: buttonRef2
    }));
    return (
        <>
            <input ref={buttonRef} defaultValue={"123456"}>
            </input>
            <input ref={buttonRef2} defaultValue={"654321"}>
            </input>
        </>
      );
}
export default forwardRef(MyRef2);
