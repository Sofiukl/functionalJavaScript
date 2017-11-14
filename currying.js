/**
Simply a function take an argument and again return one function

@author 	Sofikulm
@since 		veriso 1.0

**/

let f = (name) => (welcomeMsg) => `Hi ${name}, ${welcomeMsg}`

console.log (f('Sofikul')('Good Evening'));


//Another Example


let name3StageOfCartoon = (fstStgName) => 
						(sndStgName) => 
						(thrdStgName) => 
						`${fstStgName}, ${sndStgName}, ${thrdStgName}`;

console.log(name3StageOfCartoon('Pichu')('Pikachu')('Raichu'));

//Good example can be seen in the source code of the functional library Ramda


/**

Lets create more examples on function curring

**/

let add = (a) => (b) => a+b;

let add3 = add(3);

console.log(add3(5));


