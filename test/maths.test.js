const math = require('../src/index.js'); // Import the module to be tested
const chai = require('chai');
const expect = chai.expect;

describe('Math Module', function () {
  it('should add two numbers correctly', function () {
    const result = math.add(5, 3);
    expect(result).to.equal(8); // 5 + 3 should equal 8
  });

  it('should subtract two numbers correctly', function () {
    const result = math.subtract(10, 4);
    expect(result).to.equal(6); // 10 - 4 should equal 6
  });
});