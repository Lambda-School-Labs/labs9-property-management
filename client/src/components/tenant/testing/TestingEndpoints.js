import React, { Component } from 'react';
import axios from 'axios';

class TestingEndpoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  render() {
    return (
      <div>
        <h3>Displaying data from OWNER with user_id: 3</h3>
      </div>
    );
  }
}

export default TestingEndpoints;
