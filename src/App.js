import React from 'react';
import './App.css';
import Nav from './components/Nav.js'
import SingIn from './components/SingIn.js'
import SingUp from './components/SingUp.js'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      singUp:[{name:"暱稱", nocice:""},{name:"帳號",notice:""}, {name:"密碼", notice:"請混合使用 8 個字元以上的英文字母、數字和符號"}],
      singIn:["帳號", "密碼"],
      check:true
    };
    this.changeCheck = this.changeCheck.bind(this)
  }
  changeCheck(){
    this.setState({check:!this.state.check})
  }
  //lifecycle
  componentDidMount(){
    console.log("Welcome~~")
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.check !==this.state.check)
      console.log(prevState.check)
      // console.log("Update")
  }
  render(){
    return (
      <div>
        <Nav />
        {/* <SingIn name={this.state.singIn} onClick={()=>{this.setState({check:!this.state.check})}} />
        <SingUp name={this.state.singUp} onClick={()=>{this.setState({check:!this.state.check})}} /> */}
        {this.state.check ?
          <SingIn name={this.state.singIn} onClick={this.changeCheck} />
          :<SingUp name={this.state.singUp} onClick={this.changeCheck} />
        }
      </div>
    );
  }
}

export default App;
