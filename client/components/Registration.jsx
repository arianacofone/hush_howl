import React, { Component } from 'react';
import request from 'superagent';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.httpPost = this.httpPost.bind(this);
  }
  componentDidMount() {
    this.handleInput();
  }
  httpPost(registrationDetails) {
    request.post('/api')
           .send(registrationDetails)
           .end((err, res) => {
             if (err) {
               console.log(err);
             } else {
               console.log(res);
             }
           });
  }
  handleInput(e) {
    const target = e.target;
    const name = target.getAttribute('name');
    const value = target.value;
    const updated = {};
    updated[name] = value;
    this.setState(updated);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.httpPost(this.state);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} id="form">
          <input
            className="input"
            type="text"
            name="name"
            value={this.state.name}
            placeholder="NAME"
            onChange={this.handleInput}
          />
          <input
            className="input"
            type="email"
            name="email"
            value={this.state.email}
            placeholder="EMAIL"
            onChange={this.handleInput}
          />
          <input
            className="input"
            id="sendButton"
            type="submit"
            value="join the club"
          />
        </form>
      </div>
    );
  }
}

export default Registration;
