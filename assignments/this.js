/* The four principles of "this";
* in your own words. explain the four principles for the "this" keyword below.
*
* 1. The default "this" is the global scope (or "undefined" in strict mode).
* 2. If the function is called as an object's method, "this" refereces that object.
* 3. When using "new", this refers to a new object instance
* 4. "this" can be defined with call, apply, and bind methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myFunc() {
    // browser
    //console.log('window? ', this === window )
    
    // node
    console.log('global? ', this === global )
}

myFunc() // global?  true

// Principle 2

// code example for Implicit Binding
const myobj = {
    hello: 'world',
    test: function(){console.log('myobj? ',this === myobj)}
}

myobj.test() // myobj?  true

// Principle 3

// code example for New Binding
function myFunc2(str){
    this.str = str
}

const hello1 = new myFunc2('Hello World!')
const hello2 = new myFunc2('Hello Mars!')

console.log(hello1.str, hello2.str) // Hello World! Hello Mars!

// Principle 4

// code example for Explicit Binding
function myFunc3() {
    console.log('myobj2? ', this === myobj2)
}

const myobj2 = {str: 'Hello World!'}

myFunc3.call(myobj2) // myobj2?  true