// test/utils.test.js

const { expect } = require('chai');
const { generateSlug } = require('../utils/slugGenerator');

describe('generateSlug', () => {
  it('should generate a slug from a title', () => {
    const title = 'This is a Sample Title!';
    const result = generateSlug(title);
    // check result string have expected valiue or not
    // value of result should be 'this-is-a-sample-title' 
  });

  it('should handle titles with special characters', () => {
    const title = 'This is @ Special! Title#$%';
    const result = generateSlug(title);
    // value of result should be 'this-is-a-sample-title' 
  });

  it('should handle titles with multiple spaces', () => {
    const title = '   Multiple   Spaces   Here   ';
    const result = generateSlug(title);
    // value of result should be 'multiple-spaces-here' 
  });

  it('should handle titles with non-string input', () => {
    const invalidInput = () => generateSlug(42);
    // check whether above function call throws an error or not
  });
});
