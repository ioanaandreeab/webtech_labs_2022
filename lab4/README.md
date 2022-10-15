# _Lab 4_

## Contents
***
- Classes
- Exceptions
- Asynchronous programming
***

### Classes
**What is a class in JavaScript?**
Classes and object-oriented programming (OOP) are unique in JavaScript as they use _prototypical inheritance_ under the hood.

🤔 Read more about prototypical inheritance and the prototype chain [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain).

Esentially, a class in JavaScript is nothing more but a type of function. Due to the fact that JavaScript is not an OOP language at its core, JavaScript classes are considered **syntactic sugar**. What we understand by that is that classes are a _visual aid_ in JavaScript, something that makes the code _easier to be read_ by people used to OOP oriented languages, such as Java. They were introduced in EcmaScript2015 (ES6 - _remember, we mentioned this in Lab 2 when talking about arrow functions_) to allow developers to follow OOP patterns in a cleaner way. 

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

When using classes, this would translate to:
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

