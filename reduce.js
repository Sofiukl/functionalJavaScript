'use strict';

/*
	Advanced example of reduced higher order function
*/

const fs = require('fs');

try {
	var personsFile = fs.readFileSync('employees.txt', 'utf-8');
} catch (e) {
	console.log('File not found..');
	throw e;
}


var employees = personsFile
			.split("\n")
			.map(employeeLine => employeeLine.split("\t"))
			.reduce((employees, e) => {
				employees[e[1]] = employees[e[1]] || [];
				employees[e[1]].push({
					name: e[0],
					salary: parseFloat(e[2])
				});
				return employees;
			}, {});

console.log(JSON.stringify(employees, null, 2));			

//outputs :

/* {
  "Development": [
    {
      "name": "Sofikul Mallick",
      "salary": 10000
    },
    {
      "name": "Shalini Sinha",
      "salary": 27000
    }
  ],
  "Business": [
    {
      "name": "Rakesh Das",
      "salary": 50000
    },
    {
      "name": "Devashri Mukhapadhaya",
      "salary": 60000
    }
  ],
  "Admin": [
    {
      "name": "Firoja Khatun",
      "salary": 40000
    }
  ]
} */


//reading the properties of employees object
//for calculating salary per department

var salByDepartment = {};

for(var key in Object.keys(employees)) {
	const keyString = Object.keys(employees)[key];
	const totalSal = employees[keyString].reduce((totalSal, emp) => {
		return totalSal + emp.salary;
	}, 0);

	salByDepartment[keyString] = totalSal;
}

console.log(JSON.stringify(salByDepartment));

/*
output: -
	
	{"Development":37000,"Business":110000,"Admin":40000}
	
*/

