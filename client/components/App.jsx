import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state ={
      name: '',
      email: '',
    };
    this.handleInput = this.handleInput.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  // handle submit function will be added here & to form
  render() {
    return (
      <div id="app">
        <h3>Coming Soon...</h3>
        <h2>HUSH/HOWL</h2>
        <h4>An Experiment in the everyday absurd</h4>
        <h3>sign up to be the first to know</h3>
        <form>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="NAME"
            onChange={this.handleInput}
          />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.handleInput}
          />
        </form>
      </div>
    );
  }
}

export default App;
