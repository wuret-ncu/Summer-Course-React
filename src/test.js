import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.backgroundColor = props.children;
  }
  render() {
    return (
      <div
        onMouseDown={() => console.log(this.props.children)}
        style={{ backgroundColor: this.backgroundColor }}
        {...this.props}
      />
    );
  }
}

const colors = ['Gray', 'Silver', 'Brown', 'Yellow', 'Orange'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      key: 'index',
      list: colors
    };
  }
  removeContent = content => {
    this.setState({ list: this.state.list.filter(c => c != content) });
  };
  changeKey = e => {
    this.setState({
      key: e.target.value
    });
  };
  refeash = () => {
    this.setState({
      list: colors
    });
  };
  render() {
    return (
      <div>
        <input
          type="radio"
          name="key"
          value="index"
          checked={this.state.key == 'index'}
          onClick={this.changeKey}
        />
        <label>使用index當key</label>
        <br />
        <input
          type="radio"
          name="key"
          value="content"
          checked={this.state.key == 'content'}
          onClick={this.changeKey}
        />
        <label>使用content當key</label>
        <br />
        {this.state.list.map((content, index) => (
          <Box
            key={this.state.key == 'content' ? content : index}
            className="listItem"
            onClick={() => {
              this.removeContent(content);
            }}
          >
            {content}
          </Box>
        ))}
        <button onClick={this.refeash}>重來一次</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));