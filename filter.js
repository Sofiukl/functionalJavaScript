/**

This is a higher order function defined in Array.prototype()
This function takes another function to filter an array

@author 	Sofikulm
@since 		1.0

**/

let employees = [

	{name: 'Sofikul', domain : 'Business'},
	{name : 'Jahangir', domain : 'Admin'},
	{name : 'Suraj Kr. Biswas', domain: 'Developer'}

];

const isDeveloper = (e) => e.domain === 'Developer';

console.log (employees.filter(isDeveloper));