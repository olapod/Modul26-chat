class UsersService {
    constructor() {
      this.users = [];
      this.colors = [];
    }
  
    getAllUsers() {
      return this.users;
    }
  
    getUserById(userId) {
      return this.users.find(user => user.id === userId);
    }
  
    addUser(user) {
      this.users = [user, ...this.users];
    }
  
    removeUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
    }

  }

  
  module.exports = UsersService;
  