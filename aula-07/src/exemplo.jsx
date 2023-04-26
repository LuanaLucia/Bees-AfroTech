import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    count: 0
  };

  shouldComponentUpdate(nextProps, nextState) {
    // quando atualizar
  }

  handleClick = () => {
    // quando clica
  };

  render() {
    console.log('MyComponent renderizado');
    return (
      <div>
        <h1>Contagem: {this.state.count}</h1>
        <button onClick={this.handleClick}>Incrementar</button>
      </div>
    );
  }
}

export default MyComponent;