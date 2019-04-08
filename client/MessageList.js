import React from 'react';
import styles from './MessageList.css';



class Message extends React.Component {
  
  render () {
    let style = {
      backgroundColor: this.props.hexCode
    }
    return (
      <div className={styles.Message} style={style}>
      <strong>{this.props.from} :</strong>
      <span>{this.props.text}</span>
    </div>
    )     
  };
}

class MessageList extends React.Component {
  constructor(props){
    super(props);
  }

  render () {
    return (
    
      <div className={styles.MessageList}>
      {this.props.messages.map((message, i) => {
        let color = this.props.colors[i]
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
            hexCode={color}
          />
        );
      })
    }
    </div>
  )} 
}


export default MessageList;