const { expect } = require('chai');
const rewire = require('rewire');

describe('Axios Caller', () => {

  beforeEach(() => {
    // Create a mock for axios using rewire 
		// which will handle get request for url: https://example.com/api
		// if user pass other url then it should throw an error 'Invalid URL'
  });

  it('should fetch data from the API', async () => {
    // Call the function to make the Axios GET request
		// ...

    // Assert the result
		// ...
  });

  it('should handle Axios GET request failure', async () => {
    try {
      // Call the function to make an invalid Axios GET request
			// ...
    } catch (error) {
      // Assert that the error message indicates a failure
			// ...
    }
  });
});
