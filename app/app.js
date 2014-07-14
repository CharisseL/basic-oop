/* global prompt:true */

var prompt = require('sync-prompt').prompt;


var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

var dog2 = {name:'sam', age: 4};

console.log(dog2);

var name = prompt('Dog name: ');
var age = prompt('Dog Age: ');
var breed = prompt('Dog breed: ');

age = parseInt(age);

var dog3;
var answer = [];
answer.push(name);
answer.push(age);
answer.push(breed);


var dog3 = { name: answer[0], age: parseInt(answer[1]), breed: answer };
console.log(dog3);


var dogs =[];

var option  = prompt('(a)dd dog or (q) ');

while(option !=='q'){
  name = prompt('Dog\'s name: ');
  age = prompt('Dog\'s age: ');
  breed = prompt('Dog\'s breed: ');

  dog ={name: name, age: age, breed: breed};
  dogs.push(dogs);

  option = prompt('(d)og or (q)uit' );
}
  console.log(dogs);
