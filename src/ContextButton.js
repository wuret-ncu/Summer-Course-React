import React, {useContext} from 'react';
import OpenContext from './ContextTest.js'
function ContextButton(props) {
    const isOpenUtil = useContext(OpenContext);
    return(
        <button onClick={()=>{isOpenUtil.setOpenContext(!isOpenUtil.openContext)}}>Click me</button>
    )
}

// class ContextButton extends React.Component{
//     render(){
//         let isOpenUtil = this.context;
//         return(
//             <button onClick={()=>{isOpenUtil.setOpenContext(!isOpenUtil.openContext)}}>Click me</button>
//         )
//     }
// }
// ContextButton.contextType = OpenContext;

export default ContextButton;