import {HashRouter,Route,Switch,Link,Redirect} from "react-router-dom";
import Home from "./component/Home";
import ToDoList from './component/ToDoList';
import CheckContext from './component/CheckContext'
import './App.css';
import { useState } from "react";

function App() {
  const [check, setCheck] = useState(true); //拉到context
  const [userName, setUserName] = useState("")
  return(
    <>
      <HashRouter>
        <CheckContext.Provider value={{
          check: check,
          setCheck: setCheck,
          userName: userName,
          setUserName: setUserName
        }}>
          <Route exact path='/'> {!check ? <Redirect to="/todolist" /> : <Home />} </Route>
          <Route path="/todolist">
            {check ? <Redirect to="/" /> : <ToDoList />}
          </Route>
        </CheckContext.Provider>
      </HashRouter>
    </>
  )
}

export default App;
