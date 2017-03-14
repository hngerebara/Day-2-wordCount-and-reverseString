'use strict';

module.exports = {
	// This function reverses a string.
	reverseString: function(str) {
		if (typeof str === 'string') {
			// Return null for an empty string.
			if (str.length === 0) {
				return null;
			}

			// Split string into arra, reverse and join
			
			var result = str.split("").reverse().join("");

			// Return true if string is a palindrome.
			if (result === str) {
				return true;
			} else return result; 
		}
	}
}