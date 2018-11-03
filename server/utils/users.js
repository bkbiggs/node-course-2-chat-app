
// [{
//   id: 'hello123'
//   name: 'Brian',
//   room: 'the office fans'
// }]
//
// addUser (id, name, room)
// removeUser (id)
// getUser(id)
// getUserList(room)
//

class Users {
  constructor () {
    this.users = [];
  }
  addUser(id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

  removeUser (id) {
    // return user that was removed
    var user = this.getUser(id);

    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }

    //this.findOneAndRemove(id);
    //_.remove(user, {id: `${id}`});
    return user;
  }

  getUser(id) {
    return this.users.filter((user) => user.id === id)[0];
  }

  getUserList (room) {
    // var users = this.users.filter((user) => {
    //   return user.room === room;
    // })
    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => {
      return user.name
    })
    return namesArray;
  }
}

module.exports = {Users};

// var users = [];
//
// var addUser = (id, name, room) => {
//  users.push({})
// }
//
// modules.export = {addUsers}
//
// BUT instead, we're going to use
// ES6 class syntax approach

// if a function is expected to be used with new, it should be uppercased


//
// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
// //    console.log(name, age);
//   }
//   getUserDesciption() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }
//
// var me = new Person('Brian', 61);
// var description = me.getUserDesciption();
// console.log(description);
