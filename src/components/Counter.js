import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => ({ count: prevState.count + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Counter;