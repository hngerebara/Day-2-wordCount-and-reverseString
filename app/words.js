'use strict';

module.exports = {
	words: function(str) {
		var result = {};

		if (typeof str === 'string') {
			var splitstr = str.split(/\s/).filter(function(value) {
  				return value;
			});
			var uniquestr = splitstr.filter(function(item, i, str){ return str.indexOf(item) === i; });

			for (var i = 0; i < uniquestr.length; i++) {
				result[uniquestr[i]] = this.countOccurrences(uniquestr[i], splitstr);
			}
		}

		return result;
	},

	countOccurrences: function(item, arr) {
		var count = 0;

		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === item) {
				count++;
			}
		}

		return count;
	}
}