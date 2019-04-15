import React from 'react';

import styles from './UsersList.css';

const UsersList = props => (

  <div className={styles.Users}>
    <div className={styles.UsersOnline}>
      {props.users.length} people online
    </div>
    <ul className={styles.UsersList}>
      {
        props.users.map((user) => {
          const userColor = {backgroundColor: user.color}
          return (
            <li key={user.id} className={styles.UserItem} style={userColor}>
              {user.name} 
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default UsersList;