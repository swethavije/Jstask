//3)Identify all of the variables, object property names, primitive values, and objects shown in the following code

function hello(greeting, name) {
  return greeting + ' ' + name;
}

function xyzzy() {
  return { a: 1, b: 2, c: [3, 4, 5], d: {} };
}

const howdy = hello('Hi', 'Grace');
let foo = xyzzy();

//Variables: greeting, name, howdy, foo
// Object property names: a, b, c, d
// Primitive values: 1, 2, 3, 4, 5
// Objects:  { a: 1, b: 2, c: [3, 4, 5], d: {} } 