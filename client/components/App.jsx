import React, { Component } from 'react';
import Modal from 'simple-react-modal';
import Registration from './Registration.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {};
    this.show = this.show.bind(this);
  }
  show() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 4000);
  }
  render() {
    return (
      <div id="app">
        <h2>HUSH/HOWL</h2>
        <h4>AN EXPERIMENT IN THE EVERYDAY ABSURD</h4>
        <Registration openModal={this.show} />
        <Modal
          className="modal"
          show={this.state.show}
        >
          <h3 id="signup">Welcome to the Family!</h3>
        </Modal>
      </div>
    );
  }
}

export default App;
