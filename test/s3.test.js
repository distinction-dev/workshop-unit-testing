const { expect } = require('chai');
const rewire = require('rewire');
const s3Uploader = rewire('../utils/s3Uploader');

describe('S3 File Uploader', () => {
  // This beforeEach hook will run before each test case
  beforeEach(() => {
    // Create a mock for AWS.S3().upload() using rewire
    // Mock the AWS.S3 constructor and the upload method
  })

  it('should upload a file to S3', async () => {
    // Location: 's3://my-bucket/uploads/my-file.txt'
    const result = await s3Uploader.uploadFileToS3(
      'my-file.txt',
      'my-bucket',
      'uploads/my-file.txt'
    );

    // check expected s3 location url is 's3://my-bucket/uploads/my-file.txt' or not 
    expect(result).to.equal('s3://my-bucket/uploads/my-file.txt');
  });
});
