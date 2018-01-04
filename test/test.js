var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });

  describe('#join()', function() {
    it('should return return a string union when using characters', function() {
      assert.equal([1,2,3].join(''), '123');
    });
  });

});