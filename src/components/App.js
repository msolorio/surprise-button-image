import React, { Component } from 'react';
import Image from './image';
import Button from './button';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayImage: false
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.displayImage ?
          <Image /> :
          <Button onClick={() => this.setState({displayImage: true})} />
        }
      </div>
    );
  }
}

export default App;
