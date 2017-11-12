/**
This will explain the behaviour of closure
It's a very good feature of a language, every language don't have this feature.

What is closure?
A closure is a inner function that has access to the outer function
variables, scope chains.

The closure has three scope chain's -
1. own
2. outer function's variables, parameters
3. global variables

that means Closure function can remember its context irrespective 
of execution context

Lets see some examples -

{code}

let dispFullName = (fName, lName) => () => `${fName} ${lName}`;

let funcExecuter = (fn) => fn();

var fullName = dispFullName('Sofikul', 'Mallick');

console.log(funcExecuter(fullName));

{code}

here fullName is a closure function. It can remember its context.
We have one executer function, which will execute this closer function
to prove our statement.

//result -
Sofikul Mallick

Yes, its great feature in javascript, not all the languages have.

@author 	Sofikulm
@since 		1.0

**/

let dispFullName = (fName, lName) => () => `${fName} ${lName}`;

let funcExecuter = (fn) => fn();

var fullName = dispFullName('Sofikul', 'Mallick');
console.log(funcExecuter(fullName));