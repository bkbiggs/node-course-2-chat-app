// Jan 1st 1970 00:00:00 am autocomplete
// 1000 - future
// -1000 - past
// milliseconds

// 1000 is 1 second into Jan 1 1970

// var date = new Date();
// var months = ['Jan', 'Feb', '...'];
// console.log(date.getMonth());

var moment = require('moment');
var date = moment();

console.log(date.format());
console.log(date.format('MMM Do, YYYY -- LL\n'));
console.log(date.format('MMM Do YYYY HH:MM:SS A\n'));

date.add(3, 'year');
console.log(date.format());

var date = moment();
date.subtract(8, 'year');
console.log(date.format());

var date = moment();
console.log(date.format('h:mm a\n'));


var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a\n'));


var someTimestamp = moment().valueOf();
console.log(someTimestamp);
