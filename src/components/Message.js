import React from 'react';
import { connect } from 'react-redux';
import '../App.css';


// カウント表示のコンポーネント
class Message extends React.Component {

    render(){
      return (
        <p>
          {this.props.count}
        </p>
      );
    }
  }
  // ストアのコネクト
  export default connect((state)=>state)(Message);