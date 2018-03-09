/******************************
				#4 Global Object
******************************/
// console.log('hello world'); //prints to terminal/console

// setTimeout(function(){ console.log('hello again')}, 3000); // logs 'hello again' after 3 seconds
// let time = 0;
// let timer = setInterval(function(){
// 	console.log('and again')
// 	time++;
// 	if (time > 3) {
// 		clearInterval(timer); //clears the loop after time has reached 3
// 	}
// }, 1000); //logs 'and again' 4 times
// console.log(__dirname); //returns directory
// console.log(__filename); //returns file

/*****************************************
				#5 Function Expressions
******************************************/

//normal function statement 
// function name(arg1) {
// 	console.log(arg1);
// }

// name('hi');

// //function expression

// let sayBye = function(){
// 	console.log('bye');
// };

// sayBye();

// //function expression pattern is common in node

// function callFunction(fun) {
// 	fun();
// } //this is a callback


// callFunction(sayBye);


/*****************************************
				#6 Modules and require()
******************************************/

// Modules are a logical split of your program

// let counter = require('./count');

// console.log(counter(['shaun', 'crystal', 'ryu']));


/*****************************************
				#7 Module Patterns
******************************************/
// let stuff = require('./stuff');

// console.log(stuff.evaluate(3,5,'multiply'));
// console.log(stuff.compare(2,2));

/*****************************************
				#8 The Event Emiiter
******************************************/

// const stuff = require('./stuff');
// const events = require('events');
// const util = require('util');
// Just like vanilla ES, we can listen for events
//element.on('click', function(){ do something });

// const myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(msg){
// 	console.log(msg);
// });

// myEmitter.emit('someEvent', 'Hello World');

// let Person = function(name) {
// 	this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// const james = new Person('james');
// const mary = new Person('mary');
// const joe= new Person('joe');
// let people = [james,mary,joe];

// people.forEach(function(person){
// 	person.on('speak', function(msg){
// 		console.log(person.name + ' said ' + msg);
// 	});
// });

// james.emit('speak','hey dudes');
// joe.emit('speak', 'I want curry');


/*****************************************
				#9 Reading and Writing files
******************************************/

const fs = require('fs');
const path = require('path');

// Blocking code
const readMe = fs.readFileSync('./readMe.txt', 'utf-8');
// console.log(readMe);
fs.writeFileSync('./writeMe.txt', readMe);








