//Testing

//describe("KataTests", function(){
//  it("exampleTests", function(){
//    Test.assertEquals(findMissingLetter(['a','b','c','d','f']), 'e');
//    Test.assertEquals(findMissingLetter(['O','Q','R','S']), 'P');
//  });
//});

//-----------------------------------------------------

//#Find the missing letter
//
//Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
//
//You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
//The array will always contain letters in only one case.
//
//Example:
//
//['a','b','c','d','f'] -> 'e'
//['O','Q','R','S'] -> 'P'
//(Use the English alphabet with 26 letters!)
//
//Have fun coding it and please don't forget to vote and rank this kata! :-)

function findMissingLetter(array) {
	var inputStr = array.toString().split(',').join('');
	var letter='';
	for (var i = 0; i < array.length - 1; i++) {
		if (inputStr.charCodeAt(i+1) - inputStr.charCodeAt(i) >1){
			letter = String.fromCharCode(inputStr.charCodeAt(i)+1);
		}
		else{
			
		}
	}
	console.log(letter);
	return letter;
}

findMissingLetter(['O','Q','R','S']);
