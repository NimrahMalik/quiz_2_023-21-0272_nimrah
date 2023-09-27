const persons = [
	{
		id: 1,
		personName: "nimrah",
		personAge: "21",
		personIncome: "2000000"
	},
	{
		id: 2,
		personName: "hafsa",
		personAge: "21",
		personIncome: "3000000"
	}
];

for (const person of persons) {
	console.log(`Person ${person.id} name is ${person.personName} having salary ${person.personIncome}`);
}


const personObject = {
	id: 1,
	personName: "nimrah",
	personAge: "21",
	personIncome: "2000000"
};


console.log("Properties are below:");
for (const property in personObject) {
	if (Object.prototype.hasOwnProperty.call(personObject, property)) {
		console.log(property);
	}
}

