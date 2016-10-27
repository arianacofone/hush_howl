import React, { Component } from 'react';
import Modal, { closeStyle } from 'simple-react-modal';
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
        <Registration
          openModal={this.show}
        />
        <Modal
          className="modal"
          show={this.state.show}
        >
          <div id="img">
            <img src="http://freebiesfireworks.com/wp-content/uploads/2015/06/f6-1.png" />
          </div>
          <h1 id="signup">Welcome to the Family</h1>

        </Modal>


      </div>
    );
  }
}

export default App;
