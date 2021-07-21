import React, {useContext} from 'react';
import OpenContext from './ContextTest.js'
function ContextButton(props) {
    const isOpenUtil = useContext(OpenContext);
    return(
        <button onClick={()=>{isOpenUtil.setOpenContext(!isOpenUtil.openContext)}}>Click me</button>
    )
}
export default ContextButton;