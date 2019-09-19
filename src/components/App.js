import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import Message from './Message';
import Button from './Button';


class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Redux</h1>
        <Message />
        <Button />
      </div>
    );
  }
}

export default connect()(App);