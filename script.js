/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją showObjectKeys, kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
	marke: "audi",
	model: "A6",
	year: 2005,
	color: "white",
};


function showObjectKeys(audi) {
	// console.log(audi);
	const keys = Object.keys(audi)
	console.log(keys)
	return keys
	keys.forEach((key) => {
		console.log(`${key}: ${audi[key]}`);
		return key: audi[key]
	});

}

showObjectKeys(audi)
