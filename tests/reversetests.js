(function() {
  'use strict';

  var app = require('../app/reversetring.js');

  describe("Produce the reverse order of a word: ", function() {

    describe("Case for en empty string", function() {

      it("should return null for empty string", function() {
        expect(app.reverseString('')).toEqual(null);
      });

    });

    describe("Case for palindromes", function() {

      it("should return true for `anna`", function() {
        expect(app.reverseString('anna')).toEqual(true);
      });

      it("should return true for `NaN`", function() {
        expect(app.reverseString('NaN')).toEqual(true);
      });

      it("should return true for `civic`", function() {
        expect(app.reverseString('civic')).toEqual(true);
      });

    });

    describe("Case for normal words", function() {

      it("should return `skoob` for `books`", function() {
        expect(app.reverseString('books')).toEqual('skoob');
      });

      it("should return `nomolos` for `solomon`", function() {
        expect(app.reverseString('solomon')).toEqual('nomolos');
      });

      it("should return `csim` for `misc`", function() {
        expect(app.reverseString('misc')).toEqual('csim');
      });

    });

  });

})();