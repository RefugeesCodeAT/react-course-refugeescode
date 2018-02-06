# Versions and browser support

JavaScript is standardized under the name "ECMAScript" (or ES for short).
All major browsers support at least ECMAScript 5, which was released in 2009.
Since 2015 there have been yearly releases of ES, starting with ES2015 (or ES6).

# Running JavaScript code

JavaScript code can be run in a number of different ways

## Trying it out / experimenting with JS in the Browser

The esiest ways to experiment with JavaScript would be either in the browser console or in an online environment like [repl.it](https://repl.it).

In most browsers you can open the browser console by pressing F12 and selecting the console tab.

## Experimenting with JS + HTML + CSS

Several websites for this purpose:
* [jsfiddle.net](https://jsfiddle.net)
* [codepen.io](https://codepen.io)
* [plnkr.co (Plunker)](https://plnkr.co)

## Including JavaScript in HTML

In order to properly include a JavaScript file into an HTML document, use the script tag:
```html
<script src="path/to/my-script.js"></script>
```

## Running JavaScript directly on the computer

JavaScript code can be executed directly via node.js - which must be installed on the computer.

# Variables

Variables are usually declared using the ```let``` statement:

```js
let a = 3;
```

older version: ```var``` - this has slightly different rules for scoping

```js
var b = 4;
```

constants can be declared via ```const```:
```js
const pi = 3.14;
```

# Basic data types

## Strings

Text strings can be enclosed in single our double quotes:
```js
let firstName = 'John';
let lastName = "Smith";
```

## Numbers

There's only a single number type - a 64-bit floating point number:
```js
let a = 1.5;
```

## Booleans
```js
let a = true;
let b = false;
```

## Null and undefined
There are two symbols that indicate the absence of a value: null and undefined.
```js
let a = null;
let b = undefined;
```

## Arrays

Arrays can hold a sequence of other objects:
```js
let users = ['Amy', 'Bob', 'Charlie'];
let things = [2, 'echo', 3.4, null];
```

## Objects

Objects in JavaScript take the role of *associative arrays* or *dictionaries* in other languages. They are also used for object-oriented programming.
```js
let user = {
  userName: 'alice24',
  password: 'correct horse battery staple',
  lastLogin: '2018-01-05',
}
```
If the keys contain characters other than letters, numbers and underscores, they must be quoted:
```js
let user = {
  'user-name': 'alice24',
  'last-login': '2018-01-05',
}
```

# Comparison

JavaScript has two possibilities for checking for equality: *strict* and *loose* equality. Loose equality is checked through ```==``` and ```!=``` while strict equality is checked through ```===``` and ```!==```. Many JS style guides recommend using strict equality.

```js
3 == '3' // true
3 === '3' // false
false == '' // true
false === '' // false
```

# Output

You can write to the console by using ```console.log(...)```.

In the browser you can show a message by calling the ```alert(...)``` function.

# Control structures

## Conditionals
```js
if (myNumber === 0) {
  console.log('zero');
} else if (myNumber > 0) {
  console.log('positive');
} else {
  console.log('negative');
}
```

## For loops
```js
for (let i = 0; i < 10; i ++) {
  console.log(i);
}
```

## While loops
```js
while (i < 10) {
  i ++;
}
```

## Do-while loops
```js
do {
  i ++;
} while (i < 10)
```

## Array iteration (for ... of)
```js
let names = ['Alice', 'Bob', 'Claire'];
for (let name of names) {
  console.log(name);
}
```

## Break and continue
The ```break``` statement will terminate a loop. The ```continue``` statement will skip to the next iteration.

# Functions
There are three ways to define a function:

## Named functions
```js
function add(a, b) {
  return a + b;
}
```

## Anonymous functions
```js
let add = function(a, b) {
  return a + b;
}
```

## Arrow functions (new in ES2015)
```js
let add = (a, b) => { return a + b; }
```
Shorter (equivalent) version:
```js
let add = (a, b) => a + b;
```

# Classes / Prototypes
JavaScript relies on prototypes for object-oriented programming. Since ES2015 there's a class syntax that is very close to other languages. However, behind the scenes ES2015 still uses prototypes.

## Class syntax
```js
class Person {
  constructor(firstName, lastName) {
    // inside a method, the variable 'this'
    // refers to the current object
    this.firstName = firstName;
    this.lastName = lastName;
  }

  verifyPassword(){
    ...
  }
}
```

## Instantiating 'Classes' with new
```js
let john = new Person('John', 'Doe');
```

## Instanceof
```js
john instanceof Person
// true
```

# More on basic types

## Strings

* .lenght
* .slice()

## Numbers

* let a = Number('23.2')
* a.toString()

There is a global 'Math' object
* Math.abs()
* Math.max(), Math.min()
* Math.floor(), Math.ceil()
* Math.random()

## Arrays

* let names = ['Alice', 'Bob'];
* names.push('Charlie');
* names.pop() // 'Charlie'
* names[0] // 'Alice'
* names[2] = 'Claire'
* names.length
* names.splice(1, 1) // names is now ['Alice', 'Claire']
* names2 = names.slice() // copy an array

## Objects
```js
let user = {
  userName: 'alice24',
  password: 'correct horse battery staple',
  'last-login': '2018-01-05',
};
user.userName // 'alice24'
user['last-login'] // '2018-01-05'
user['last-login'] = '2018-02-01';
```

## Dates
[TBD]

## RegExp
[TBD]

# Arrays and callback functions
The contents of arrays can be modified by using anonymous callback functions.

## Array.map()
The .map() method will apply a function to all elements of an array and create a new array from the results.

```js
let numbers = [1, 2, 3, 5, 8];
function double(n) { return 2*n; }
let newNumbers = numbers.map(double);
// result: [2, 4, 6, 10, 16]
```

## Array.filter()
The .filter() method will create a new array with only some elements of a previous array - depending on whether the provided filter function returns true or false for each element.

```js
let numbers = [1, 2, 3, 5, 8];
function isSmall(n) {
  if (n <= 3) {
    return true;
  } else {
    return false;
  }
}
let newNumbers = numbers.filter(isSmall);
// result: [1, 2, 3]
```

## Array.sort()
The .sort() method will sort the contents of an array - either alphabetically or based on a callback function. The callback function will return -1, 1 or 0, depending on whether the first element is considered smaller, the second element is considered smaller or they are considered equal.

```js
let names = ['Charlie', 'Alice', 'Bob'];
// sort alphabetically
names.sort();
// ['Alice', 'Bob', 'Charlie']

// sort by length of name
function compareLengths(string0, string1) {
  if (string0.length < string1.length) { return -1; }
  else if (string0.length > string1.length) { return 1; }
  else { return 0}
}
names.sort(compareLengths);
// ['Bob', 'Alice', 'Charlie']
```
