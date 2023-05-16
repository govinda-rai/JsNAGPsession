abc = 20;
console.log(abc);
var abc;

//new type of variables

if (true) {
  let a = 10; //block scope
  var b = 20; //functional scope
}

//console.log(a); //error
console.log(b); //no error
x = 3;
y = 5;
z = 2;
console.log(x > y && x < z);
console.log((x > y) & (x < z));
console.log(3 == '3'); //checks only value
console.log(3 === '3'); //checks value and type
//tricky example
console.log(null == undefined);
console.log(null === undefined);

function tax() {
  var a = 20;
  var b = 30;
  return function printabc() {
    console.log(a, b);
  };
}
tax()();

function getValue() {
  return { a: 'govinda', b: 1, c: 89, d: 'rai' };
}

console.log(getValue());
//{a,b,c,d}={1,2,3,4};

//setTimeout(() => alert('time'))
//callback
//callback's hell
//promise
Promise;

//fetch api
//async/await

//jQuery
