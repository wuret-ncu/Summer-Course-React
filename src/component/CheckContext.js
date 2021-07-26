import React from "react";

const CheckContext = React.createContext({
    check: true,
    setCheck: ()=>{},
    userName: "",
    setUserName: () => {}
});
export default CheckContext;