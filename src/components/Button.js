import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

class Button extends React.Component {

    constructor(props){
      super(props);
      this.doAction = this.doAction.bind(this);
    }
  
    // ボタンクリックでディスパッチを実行
    doAction(e){
        this.props.dispatch({ type:'INCREMENT' });
    }
  
  
    render(){
      return (
        <button onClick={this.doAction}>
          click
        </button>
      );
    }
}

  // ストアのコネクト
export default connect()(Button);