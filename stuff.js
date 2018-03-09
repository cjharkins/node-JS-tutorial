// let add = function(a,b) {
// 	return a+b;
// }
// let subtract = function(a,b) {
// 	return a-b;
// }
// let multiply = function(a,b) {
// 	return a*b;
// }
// let divide = function(a,b) {
// 	return a/b;
// }

let evaluate = (num1,num2,operator)=>operator.toUpperCase()==="ADD"?num1+num2:operator.toUpperCase()==="SUBTRACT"?num1-num2:operator.toUpperCase()==="MULTIPLY"?num1*num2:operator.toUpperCase()==="DIVIDE"?num1/num2:null;
let compare = (num1,num2)=>num1===num2?`The number ${num1} is equal to ${num2}`:`${num1} is not equal to ${num2}`;

// module.exports.evaluate = evaluate;
// module.exports.compare = compare;

module.exports = {
	evaluate: evaluate,
	compare: compare
}