//Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.
//
//Examples:
//
//// returns "theStealthWarrior"
//toCamelCase("the-stealth-warrior") 
//
//// returns "TheStealthWarrior"
//toCamelCase("The_Stealth_Warrior")

function toCamelCase(str) {
	var n = str.split(/\s*-\s*|_\s*/);
	var c = [];
	c.push(n[0]);
	for (var i = 1; i < n.length; i++) {
		c.push(n[i].charAt(0).toUpperCase() + n[i].slice(1));
	}
	return c.join('');
}
toCamelCase('the-Stealth-Warrior');
