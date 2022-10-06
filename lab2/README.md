# _Lab 2_

## Web 101 && Basic JS
***
_Contents_:
- [Intro to Web](#intro-to-web)
- [JavaScript Basics](#javascript-basics)
***

### Intro to Web
**What is the Web?**

The Web is an _information system_ that uses the _Internet_ and is comprised of all the pages that are accessible via a browser. These web pages share resources using the _HyperText Transfer Protocol (HTTP)_ and present the user the capacity to _interact_ with the content shown. The Web also functions by following the _client-server model_, but we'll see more about these details in the next sections.

**How does one find a resource on the Web?**

We've seen that the Web has a vast collection of resources that anyone with a browser can access, but how does one know how to find a particular resource? The answer is pretty simple - this is thanks to the _URL (Uniform Resource Locator)_. Every URL has the following structure:

**[scheme]://domain[/path/to/file]**, where:
- scheme - the protocol (a set of rules that allow the communication in a computer network) that needs to be used - in this case **HTTP/HTTPS** (the secure variant of HTTP)
- domain - unique identifier for each website (eg. google)
- path - (optional) allows for the identification of a particular page/resource of a website

**What happens when I search for something on Google?**

Any action a user has on the Web follows the next flow: 
- the user (**client**) sends a **request** to a **server** - say we go to google.com and type in "ramen recipes"
- the **server** receives the request, takes the appropiate **action** according to the purpose (_method/verb_) of the request - in our example we're want to retrieve ramen recipes, so the Google server looks in its database for ramen recipes
- the server sends a **response** back to the client, either successful or not, depending on whether or not it was able to fulfill the request
- the client receives the response - in this case, the ramen recipes 🍜

You can take a closer look at the **client-server architecture** (that is powered by the Internet) below:

![](https://cdn-images-1.medium.com/max/1080/1*qzK0Z9vfDT4fVQu3G9OGPg.png)

**Which actions can a client take on the Web?**

The **request methods** determine the acitons that the server needs to perform on the resources specified by the client. A client can therefore **C**reate a resource (_POST_), **R**ead it (_GET_), **U**pdate it (_PUT_) or **D**elete it (_DELETE_). (_💡Notice the bold letters - those form a concept that summarizes the standard instructions that can be performed on a resource and that are key to data persistence - **CRUD**, we'll encounter these again when we'll create our own web server in the next labs_)

Depending on whether or not the server is able to process the request, there are multiple **response status codes** it can send back to the client to inform the state of the action. There are 5 main categories of response statuses:
- **1**XX - informational responses
- **2**XX - successful responses
- **3**XX - redirection responses
- **4**XX - client error responses
- **5**XX - server error responses

🤔 Want to explore more response statuses? Check [this website](https://http.cat/) out for visual representations!

**Which are the contents of a Web page?**
Often enough, as a client, an user would request to see a Web page. The web page they would receive is composed of the following components:
- a _structural_ component - **HTML** - defines the elements that are rendered on a page
- a _styling_ component - **CSS** - makes the structural elements have a pleasant aspect for ease of use
- a _dynamic_ component - **JS** - allows the user to interact with the rendered elements

🤔 Remember devtools? Go ahead and inspect the structure of any website of your choice. If you've missed this during the lab, here's a [resource](https://nira.com/chrome-developer-tools/) that explains everything that's found in devtools!

For now, let's focus on the dynamic component!

### JavaScript Basics

**What is JavaScript?**

**JavaScript** is an _interpreted_ programming language, which means that there's no need for the code to go through a compliation stage before it's run. It is interpreted at _run-time_ by an engine (either _node_ - server side or the one present in the browser - for example _Google Chrome's V8_ - client side).

**Do we have variables in JavaScript?**

**Of course!** And there are also some interesting aspects about this. JavaScript is a _weakly-typed_ language, which means that when we declare a variable we _don't need_ to specify its type (like we did in C/C++/Java/C#). 

In Java, we would have something like this:
```
public String name = "John Doe";
```
while in JavaScript this would be:
```
let name = "John Doe";
```
JavaScript knows which type of variable to assign to what we want to declare without us needing to specify it _explicitly_.
There are **3** key words we use for declaring variables - **var, let, const**. Var and let are used for values that **we can change**, while if we use const we are dealing with a _constant_, that **cannot be changed**.
Another difference arises between var and let regarding the context in which they're accessible, the **scope**. _Var_ is **function scoped**, while _let_ is **block scoped**. What does that mean? Let's look at an example!
```
function iterateTest() {
    for (let i = 0; i < 5; i++) {
        // i is visible here
    }
    // i is not visible here
}
```
If we would have declared the variable i using _var_, it would have been visible in both places.
One particular behavior JavaScript has is **hoisting**. Hoisting refers to JavaScript's behavior to move all declared variables to the _top of the current scope_. Variables are hoisted differently depending on the key word used. For _var_, the variables are **declared and initialized** with the value _undefined_, while for _let_ and _const_ the hoisting only takes care of the **declaration**.
```
console.log(a); // prints out 'undefined' from hoisted var declaration
var a; // declaration
```
```
console.log(a); // throws ReferenceError exception as the variable value is uninitialized
let a; // declaration
```

Variables data types in JavaScript are:
- **primitives** - eg. Number, String, Boolean, Undefined, Symbol, BigInt
- **reference types** - eg. Array, Object, Function

🤔 Want to find out more about 2 special values a variable can take? Check [this](https://www.geeksforgeeks.org/undefined-vs-null-in-javascript/) comparison between _undefined_ and _null_. Also, JavaScript has something called truthy/falsy values - see more [here.](https://www.30secondsofcode.org/articles/s/javascript-truthy-falsy-values)

**Objects**

We've seen primitive data types so far, let's talk a bit about **reference types**. **Objects** are entities which have **properties** and **actions**. In JavaScript, we define Objects using literals (via a variable). Here's an example:
```
const myCar = {
    color: 'red',
    year: 2020,
    brand: 'Toyota'
}
```
Each property has assigned a **key** (eg. color) and a **value** (eg. 'red').
Properties can be accessed as such:
```
myCar.color; // would return 'red'
myCar['color'];
```
One aspect to be noted is that _almost_ everything in JavaScript is an Object. This leads us into a more complex matter, related to the OOP side of JavaScript. Inheritance in JavaScript is possible in _2 ways_ - the regular way, by using **classes** and extending them, and one by the so-called **prototypal inheritance** - a method by which an object can inherit the properties and methods of another object and add new ones, without depending on the base object, underlining _composition_.

🤔 Need a refresher? [Here](https://javascript.plainenglish.io/inheritance-is-a-vs-composition-has-a-in-javascript-98fb96dfa0e6)'s more about inheritance vs composition (applied in JavaScript).

**Functions**

**Functions** are also JavaScript Objects which represent reusable blocks of code designed to _perform a specific task_.
Traditionally, a function would be written as such:
```
function sayHello() {
    console.log("Hello!");
}
// calling the function
sayHello(); // this would print out Hello!
```
A function can have multiple arguments whose number could be _known_, or _unknown_ (**variable length arguments**). Therefore, we have the following situations:
```
// we know there's only one argument the function accepts
function sayName(name) {
    console.log(name);
}

function sayDescription(name, age, ...extraInfo) {
    console.log(name);
    console.log(age);
    console.log(extraInfo); // this prints out everything else we added
}

sayDescription('John Doe', 24, 'blond', '2 cats');
```

🤔 The extraInfo argument is declared using a _spread operator_. Find out more [here.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

**ES6** (the second major revision of JavaScript) introduced **arrow functions**, which allow us to write functions using a shorter syntax:
```
const sayHello = () => console.log("Hello!");
```
But, there's a catch - regular functions and arrow functions are not _entirely_ the same. The most important difference is what the _"this"_ keyword represents. In arrow functions, "this" is contained in the context of that particular function. If the function we were writing would be a method of a class, an arrow function wouldn't know anything about the "this" of that class.

**Arrays**

An **array** is a data structure which can store **multiple values** at a given moment. We write it as such:
```
const arr = [1, 2, 3, 4];
```
Each element can be accessed using the **index**, which starts at **0**. (eg. arr[0] is 1)
There are some properties and functions that are useful when handling arrays:
- **length** - property to get the length of the array
- **push()** - method that allows us to insert an element at the _end_ of the array
- **pop()** - method for removing and returning the _last_ element of an array

When working with arrays oftentimes we need to iterate over the elements and, if the case, perform actions on them. Here are some useful _methods and iteration structures_ for which you can find examples in the source code of the labs:
- **for**
- **forEach()**
- **for...of**
- **for...in**

these first ones are used _only_ for looping over an array

- **map()** - loops over the array and performs a specific transformation (mapping) for each element
- **filter()** - given a condition, loops over the array and returns only the elements that conform to it
- **reduce()** - using an accumulator, loops over the array and summarizes the contents of it
