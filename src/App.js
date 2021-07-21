import './App.css';
import React, { useEffect, useState } from 'react';
import MyRef from './MyRef.js'
import MyRef2 from './MyRef2.js'

import {HashRouter,Route,Switch,Link,Redirect} from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import OpenContext from './ContextTest.js'
import ContextButton from './ContextButton.js';

// // Ref
// class App extends React.Component {
//   // 創建 ref
//   myRef = React.createRef();
//   componentRef = React.createRef();
//   functionRef = React.createRef();
  
//   componentDidMount () {
//       console.log("DOM element")
//       console.log(this.myRef); 
//       console.log(this.myRef.current); 
//       console.log(this.myRef.current.innerHTML); 

//       console.log("Class Component")
//       console.log(this.componentRef);
//       console.log(this.componentRef.current);
//       this.componentRef.current.handleClick();

//       console.log("Fuction Component")
//       console.log(this.functionRef)
//       // console.log(this.functionRef.current)
//       this.functionRef.current.focus();
//       console.log(this.functionRef.current.focus2);
//   }
//   render () {
//       return(
//         <>
//           <div ref={ this.myRef }>RefTest</div>
//           <MyRef ref={this.componentRef} />
//           <br></br>
//           {/* Warning */}
//           <MyRef2 ref={this.functionRef}></MyRef2> 
//         </>
//       )
//   }
// }

// export default App;


//------------------------
// react-router-dom
function Layout(props){
  return(
      <>
          { props.children }
      </>
  )
}
function App(){
  const[check,setCheck]=useState(true)
  return(
    <>
      <HashRouter>
        <Switch>
          <Layout>
            <button onClick={()=>{setCheck(!check)}}>Change check</button>
            <Link to="/">Change page</Link>
            <Route exact path="/">
              {check ? <Redirect to="/second" /> : <FirstPage />}
            </Route>
            <Route path="/second" component={SecondPage} />          
          </Layout>
        </Switch>
      </HashRouter>
    </>
  );
}
export default App;

//------------------------
//context
// function App (){
//   const [isOpen, setIsOpen] = useState(true);
//   return (
//     <OpenContext.Provider value={{ 
//         openContext: isOpen, 
//         setOpenContext: setIsOpen
//     }} >
//         <ContextButton />
//     </OpenContext.Provider>
//   );
// }
// export default App;