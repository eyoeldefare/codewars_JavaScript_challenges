//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
//
//Examples:
//
//spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
//spinWords( "This is a test") => returns "This is a test" 
//spinWords( "This is another test" )=> returns "This is rehtona test"

//keep[n].split('').reverse().join('')


function spinWords(str) {

	var keep = str.split(' ');
	for (var n = 0; n < keep.length; n++) {
		if (keep[n].length >= 5) {
			keep.splice(keep.indexOf(keep[n]), 1, keep[n].split('').reverse().join(''))
		}
	}
	return keep.join(' ');
}
spinWords('This is another test');
