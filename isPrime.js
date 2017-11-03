//Testing

//Test.expect(isPrime(0) === false, '0 is not prime');
//Test.expect(isPrime(1) === false, '1 is not prime');
//Test.expect(isPrime(2) === true, '2 is prime');


//Is Prime
//Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.
//
//Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
//
//Example
//
//isPrime(5)
//=> true




function isPrime(num) {
  
	if (num===2){
		return true;
	}
	else if (num % 2 === 0 || num<=1) {
		return false;
	} 
	else{
		for (var n=2; n<num; n++){
			if (num%n===0){
//				console.log(false);
				return false;
			}
			
		}
		return true
	}
}
console.log(isPrime(3));
isPrime(3);

