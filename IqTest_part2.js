//Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
//
//! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)




function iqTest(numbers) {
 	var C = ([numbers].join('').split(' '));
 	var Type = [];
 	for (var i in C) {
 		if (parseInt(C[i]) % 2 == 0) {
 			Type.push('even');
 		} else {
 			Type.push('odd');
 		}
 	}
 	var count = Type.reduce(function (accumulator, currentValue) {
 		if (currentValue in accumulator) {
 			accumulator[currentValue]++;
 		} else {
 			accumulator[currentValue] = 1;
 		}
 		return accumulator;
 	}, {});
 	if (count.even > count.odd) {
 		return Type.indexOf('odd') + 1;
 	} else {
 		return Type.indexOf('even') + 1;
 	}
 }
 iqTest('2 4 7 8 10');
