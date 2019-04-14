import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import io from 'socket.io-client';

import styles from './App.css';

import MessageForm from './MessageForm';
import MessageList from './MessageList';
import UsersList from './UsersList';
import UserForm from './UserForm';

const socket = io('/');

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {users: [], messages: [], text: '', name: '', color: ''};
    };

    componentDidMount() {
        socket.on('message', message => this.messageReceive(message));
        socket.on('update', ({users}) => this.chatUpdate(users));
        this.getUserColor();
        
    }

    messageReceive(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
        
        
    }
    
    chatUpdate(users) {
        this.setState({users});
        
        
    }

    handleMessageSubmit(message) {
        const messages = [message, ...this.state.messages];
        this.setState({messages});
        socket.emit('message', message);
        
                
        
    }

    handleUserSubmit(name) {
        this.setState({name});
        socket.emit('join', name);
      }
    getUserColor() {
      if (this.state.messages[0]) {
        for (var i = 0; i < this.state.users.length; i++) {
          if (this.state.messages[0].from === this.state.users[i].name) {
            let color =  this.state.users[i].color
            return color
          }
          // let color = this.state.users.filter(user => user.name === this.state.messages[0].from).map(user => user.color);
          // return color
        }
        
      }
    }

   
    render() {
        return this.state.name !== '' ? (
          this.renderLayout()
        ) : this.renderUserForm() // zaimplementowane w późniejszej części
      }
    
    renderLayout() {
      console.log(this.state.messages)
      
      
       return (
          <div className={styles.App}>
            <div className={styles.AppHeader}>
              <div className={styles.AppTitle}>
                ChatApp
              </div>
              <div className={styles.AppRoom}>
                App room
              </div>
            </div>
            <div className={styles.AppBody}>
              <UsersList
                users={this.state.users}
              />
              <div className={styles.MessageWrapper}>
                <MessageList
                  messages={this.state.messages}
                />
                <MessageForm
                  onMessageSubmit={message => this.handleMessageSubmit(message)}
                  name={this.state.name}
                  color = {this.getUserColor()}
                />
              </div>
            </div>
          </div>
       );
    }

    renderUserForm() {
        return (<UserForm onUserSubmit={name => this.handleUserSubmit(name)} />)
     }

  };

 

export default hot(module)(App);