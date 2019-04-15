import React from 'react';
import styles from './MessageList.css';

const Message = props => (
  
  <div className={styles.Message} style={{backgroundColor: props.color}}>
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);

const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
            color={props.colors[i].color}
          />
        );
      })
    }
  </div>
);

export default MessageList;