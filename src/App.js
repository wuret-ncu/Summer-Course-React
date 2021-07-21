import './App.css';
import React, { useEffect, useState } from 'react';
import MyRef from './MyRef.js'
import MyRef2 from './MyRef2.js'

import {HashRouter,Route,Switch,Link} from "react-router-dom";
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';

import OpenContext from './ContextTest.js'
import ContextButton from './ContextButton.js';

// Ref
class App extends React.Component {
  // 創建 ref
  myRef = React.createRef();
  componentRef = React.createRef();
  functionRef = React.createRef();
  
  componentDidMount () {
      console.log("DOM element")
      console.log(this.myRef); 
      console.log(this.myRef.current); 
      console.log(this.myRef.current.innerHTML); 

      console.log("Class Component")
      console.log(this.componentRef);
      console.log(this.componentRef.current);
      this.componentRef.current.handleClick();

      console.log("Fuction Component")
      console.log(this.functionRef)
      // console.log(this.functionRef.current)
      // this.functionRef.current.focus();
  }
  render () {
      return(
        <>
          <div ref={ this.myRef }>RefTest</div>
          <MyRef ref={this.componentRef} />
          <br></br>
          {/* Warning */}
          <MyRef2 ref={this.functionRef}></MyRef2> 
        </>
      )
  }
}

export default App;


//------------------------
// react-router-dom
// function Layout(props){
//   const[check,setCheck]=useState(false)
//   // const handleClick = () =>{
//   //   if(check)
//   //    轉跳
//   //     setCheck(!check,document.location.href="http://localhost:3000/#/second")
//   //   else
//   //     setCheck(!check,document.location.href="http://localhost:3000/#/")
//   // }
//   return(
//       <>
//           <nav>
//             {check? <Link to="/" onClick={()=>{setCheck(!check)}}>Click</Link> : 
//             <Link to="/second"  onClick={()=>{setCheck(!check)}}>Click</Link>}
//             {/* <button onClick={handleClick}>Click Me</button> */}
//           </nav> 
//           { props.children }
//       </>
//   )
// }
// function App(){
//   return( 
//     <HashRouter>
//       <Switch>
//         <Layout>
//           {/* <Route exact={true} path="/" component={FirstPage}/> */}
//           {/* 在localhost:3000/#/second時會出問題 */}
//           <Route path="/" component={FirstPage}/>
//           <Route path="/second" component={SecondPage}/>
//         </Layout>
//       </Switch>
//     </HashRouter>
//   );
// }
// export default App;

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