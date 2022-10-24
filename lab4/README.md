# _Lab 4_

## Contents 

- Classes
- Closures
- Exceptions
- Asynchronous programming
***

### Classes
**What is a class in JavaScript?**
Classes and object-oriented programming (OOP) are unique in JavaScript as they use _prototypical inheritance_ under the hood.

🤔 Read more about prototypical inheritance and the prototype chain [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Esentially, a class in JavaScript is nothing more but a type of function. Due to the fact that JavaScript is not an OOP language at its core, JavaScript classes are considered **syntactic sugar**. What we understand by that is that classes are a _visual aid_ in JavaScript, something that makes the code _easier to be read_ by people used to OOP oriented languages, such as Java. They were introduced in EcmaScript2015 (ES6 - _remember, we mentioned this in Lab 2 when talking about arrow functions_) to allow developers to follow OOP patterns in a cleaner way. 


**Constructor functions and prototypes**
Before the introduction of classes, constructor functions were used to replicate OOP behavior in JavaScript. Let's look at an example for a plant entity 🌿:
```
// constructor function
function Plant(species, region) {
    this.species = species;
    this.region = region;
}

// adding methods via the prototype
Plant.prototype.getDescription = function() {
    console.log(`This plant belongs to the species ${this.species} 
    and can be found in the region of ${this.region}`);
}
const cactus = new Plant("Cactaceae", "Americas");
```

As you can see, the method is added directly to the prototype of the function Plant (which by nature already acts as a constructor, we defined it earlier).
If we print out the cactus object we can observe all these things we defined:
![](https://github.com/ioanaandreeab/webtech_labs_2022/blob/main/lab4/assets/function.png?raw=true)

When using classes, this would translate to:
![](https://github.com/ioanaandreeab/webtech_labs_2022/blob/main/lab4/assets/class.png?raw=true)
```
class Plant {
    constructor(species, region) {
        this.species = species;
        this.region = region;
    }
    
    getDescription() {
        console.log(`This plant belongs to the species ${this.species} 
        and can be found in the region of ${this.region}`);
    }
}
const cactus = new Plant("Cactaceae", "Americas");
```

In this case, under the hood, the same 2 things happen:
- a function named Plant is created, which is the result of the class declaration and whose definition is taken from the constructor method
- class methods, such as getDescription, are stored in Plant.prototype

When printing out the cactus object we can see a similar output:

If you go down the prototype chain you can see that _every class_ in JavaScript (which we already clarified is a function, which, if we recall from Lab 2 is a JavaScript object - this _ONLY_ applies when speaking in JavaScript terms; if we speak OOP wise, saying a class is actually an object is **incorrect**) _is derived_ from the _Object_ class.

🤔 Need another example? [This](https://levelup.gitconnected.com/prototypal-inheritance-the-big-secret-behind-classes-in-javascript-e7368e76e92a) is a great comparison between inheritance using classes and constructor functions!


### Closures
**What is a closure?**
A closure is a function that has access to variables outside its scope. It is, according to MDN, _the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).In JavaScript, closures are created every time a function is created, at function creation time._
One common example in which closures are used is the simulation of a caching mechanism, you have that in the lab examples :) .
🤔 Need some more explanations? Check out [this YouTube video](https://www.youtube.com/watch?v=vKJpN5FAeF4) (it only has 100 seconds)

### Exceptions
Sometimes in the code we write we need to introduce some restrictions. In order to validate, for example, the format of data, we can handle negative cases by throwing errors, as you can see in the next lines:
```
const greet = (name) => {
    if (typeof name === "string") {
        console.log(`Hello, ${name}`);
    } else {
        throw new Error("The name should be a string");
    }
}
```

When trying to call the function _greet_ we do that by using a try...catch construction, which has the following structure:
```
try {
  greet();
} catch (error) {
  console.log(error);
} finally {
    // statements to be called regardless of the state of the greet function call
}
```

### Asynchronous programming
By default, JavaScript is _synchronous_ in its nature, which means that each instruction is executed one after the other, according to an event loop which queues each line of code. However, there are cases in which the execution needs to be paused, such as when calling a third party service and waiting for the response. That's when asynchronous programming is useful, which, in JavaScript, is achievable via **promises** and **asnychronous functions**.
- **Promises**

**Promises** are the foundation of asynchronous programming in modern JavaScript. A promise is an _object_ returned by an _asynchronous function_, which represents the _current state of the operation_. At the time the promise is returned to the caller, the operation often isn't finished, but every promise has 2 methods attached - resolve and reject - for each of the possible statuses of the operation - success and failure. Let's take a look at a promise that simply returns a numeric value:
```
const myPromise = new Promise((resolve, reject) => {
    resolve(5);
});
```

In order to handle promises, there are multiple methods available. The most important ones are **.then()**, **.catch()** and **.finally()**, which handle what should happen with the returned value in case of success or failure and what should be executed regardless of the fulfillment of the operation.

```
myPromise.then(res => {
    console.log('returned value: ', res);
}).catch(err => {
    console.log(err);
}).finally(() => {
    console.log('Promise executed.')
});
```

🤔 One extra useful method is Promise.all(), which helps us wait for multiple promises to be resolved and compose a response from all of their returned values. Check out more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all).

- **async/await**

**async/await** are 2 keywords which allow for asynchronous code to be written as synchronous and which are another way of writing a Promise. **async** makes a function _return a Promise_, while **await** makes a function _wait for a Promise_. The await keyword can _only_ be used in an async function and it makes the function pause the execution until the Promise is fulfilled (or rejected).

Usually in our code, we use asynchronous programming to get data that is coming from different APIs (Application Programming Interface - which is basically an interface for accessing information provided by a server) exposed by services we might need in the application. You can check out the example in which we're trying to log some facts about Naruto using a free access API.
