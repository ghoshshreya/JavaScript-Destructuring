// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

/* ---------- Array De-Structuring ---------- */
let a, b, c, rest;

// STANDARD DE-STRUCTURING
const arr = [1, 2];
[a, b] = arr;
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

// ASSIGNING REST OF THE ARRAY
const arr1 = [1, 2, 3, 4, 5];
[a, b, ...rest] = arr1;
// console.log(a); // 1
// console.log(b); // 2
// console.log(rest); // [3, 4, 5]

// EXTRA ITEMS ARE UNDEFINED
const arr2 = [1, 2];
[a, b, c] = arr2;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // undefined

// SKIPPING ITEMS IN ARRAY
const arr3 = [1, 2, 3];
[a, , c] = arr3;
// console.log(a); // 1
// console.log(c); // 3

// SWAPPING VALUES USING ARRAY DESTRUTING
let x = 1;
let y = 2;
[x, y] = [y, x];
// console.log(x); // 2
// console.log(y); // 1

/* ---------- OBJECT DE-STRUCTURING ---------- */
let obj = {
  a: 1,
  b: 2,
};

({ a, b } = obj);
// console.log(a); // 1
// console.log(b); // 2

// VARIABLE NAMES SHOULD BE SAME AS PROPERTY NAMES
let { x1, y1 } = obj;
// console.log(x1, y1); // undefined undefined

// USING A NEW VARIABLE NAME
({ a: x, b: y } = { a: 1, b: 2 });
// console.log(a, b, x, y); // 1 2 1 2

// DEFAULT VALUES IN OBJECT DESTRUCTURING
({ a = 'hello', c = 'hi' } = { a: 'world' });
// console.log(a, c); // world hi

// COMPUTED PROPERTY NAMES
let prop = function () {
  return 'a';
};
let { [prop()]: foo } = { a: 'Sarah' };
// console.log(foo); //"Sarah"

// DESTRUCTURING AND FUNCTIONS
function person({ name: x, job: y } = {}) {
  console.log(x);
}

// person({ name: 'John' }); // John
// person(); // undefined

// REST IN OBJECT DESTRUCTURING
const obj2 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
({ a, b, ...c } = obj2);
console.log(c);
