// s3Uploader.js
const AWS = require('aws-sdk');

async function uploadFileToS3(filePath, bucketName, destinationKey) {
  const s3 = new AWS.S3();

  const params = {
    Bucket: bucketName,
    Key: destinationKey,
    Body: 'Hello, S3!',
  };

  try {
    const result = await s3.upload(params).promise();
    return result.Location;
  } catch (error) {
    // throw error;
    throw new Error('uploadFileToS3 bucket. Check your params');
  }
}

module.exports = { uploadFileToS3 };
