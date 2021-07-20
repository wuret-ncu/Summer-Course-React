import React from 'react';
class MyRef extends React.Component{
	constructor(props){
		super(props)
		this.handleClick=this.handleClick.bind(this)
	}
	refTest = React.createRef();
	handleClick(){
		this.refTest.current.focus();
	}
	render(){
		return(
			<>
				<input ref={this.refTest}></input>
				<button onClick={this.handleClick}>Focus Test</button>
			</>
		)
	}
}
export default MyRef;