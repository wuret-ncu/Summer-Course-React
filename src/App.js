import './App.css';
import React from 'react';
import MyRef from './MyRef.js'
import MyRef2 from './MyRef2.js'

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