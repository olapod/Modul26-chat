import React from 'react';
import styles from './MessageList.css';

const Message = props => (
  
  <div className={styles.Message} >
    <strong>{props.from} :</strong>
    <span>{props.text}</span>
  </div>
);
// style={{backgroundColor: props.color}}
const MessageList = props => (
  <div className={styles.MessageList}>
    {
      props.messages.map((message, i) => {
        return (
          <Message
            key={i}
            from={message.from}
            text={message.text}
            // color={props.findColor}
          />
        );
      })
    }
  </div>
);

export default MessageList;