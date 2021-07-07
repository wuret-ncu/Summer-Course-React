import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import SingIn from './components/SingIn.js'
import SingUp from './components/SingUp.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      singUp:["暱稱","帳號", "密碼"],
      singIn:["帳號", "密碼"],
      check:true
    };
  }
  //lifecycle
  componentDidMount(){
    console.log("Welcome~~")
  }
  componentDidUpdate() {
    console.log("Update")
  }
  render(){
    return (
      <div>
        <Nav />
        <SingIn name={this.state.singIn} onClick={()=>{this.setState({check:!this.state.check})}} />
        <SingUp name={this.state.singUp} onClick={()=>{this.setState({check:!this.state.check})}} />
        {/* {this.state.check ?
          <SingIn name={this.state.singIn} onClick={()=>{this.setState({check:!this.state.check})}} />
          :<SingUp name={this.state.singUp} onClick={()=>{this.setState({check:!this.state.check})}} />
        } */}
      </div>
    );
  }
}

export default App;
