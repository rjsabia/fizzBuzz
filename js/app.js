
function fizzBuzz() {

	 for ( i = 1; i <= 100; i++) {
	 	if ( i % 5 === 0 && i % 3 === 0) {
	 		$('.fizzbuzz').append("<li>FizzBuzz</li>");
	    }
	 	else if ( i % 3 === 0) {
	 		$('.fizzbuzz').append('<li>Fizz</li>');
	 	}
	 	else if ( i % 5 === 0) {
	 		$('.fizzbuzz').append('<li>Buzz</li>');
	 	}	
	 	else {
	 		$('.fizzbuzz').append('<li>' + i + '</li>');
	 	}
	 }
}

fizzBuzz();
