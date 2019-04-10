import React from 'react';
import styles from './MessageList.css';

const Message = props => (
    props.users.map((user) => {
      const userColor = {backgroundColor: user.color}
      return (
       <div 
        className={styles.Message} 
        style={userColor}
        
        >
        <strong>{props.from} :</strong>
      <span>{props.text}</span>
    </div>
      )
    })
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
            users={props.users}
          />
        );
      })
    }
  </div>
);

export default MessageList;