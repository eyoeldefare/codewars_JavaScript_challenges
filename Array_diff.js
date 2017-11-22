//Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
//It should remove all values from list a, which are present in list b.
//
//array_diff([1,2],[1]) == [2]
//If a value is present in b, all of its occurrences must be removed from the other:
//
//array_diff([1,2,2,2,3],[2]) == [1,3]


//Testing

//describe("Solution", function(){
 // it("should test for something", function(){
  //  Test.assertEquals(array_diff([2, 3, 4, 3], [4]), [2,3,3], "This is just //an example of how you can write your own TDD tests");
  //});
//});

function array_diff(a, b) {
	var p = [];
	for (var i = 0; i < a.length; i++) {
		for (var n = 0; n < b.length; n++) {
			if (a[i] != b[n]) {
				p.push(a[i]);
			}
		}
	}

    if (p.length==0){
        p=a;
    }
	return p
}
array_diff([1,2,2], []);
