
const { expect } = require("chai");
const rewire = require("rewire");
const fileModule = rewire("../utils/fileHelper");


fileModule.__set__("filePath", "/dev/null")


const fsMock = {
  readFileSync: (path, encoding, cb) => {
    expect(path).to.equal("/dev/null")
    cb(null, "Success!")
  }
}

fileModule.__set__("fs", fsMock)

describe('File Helper testing', () => {
  it('should validate file path only', () => {
    fileModule.readSomethingFromFileSystem(function (err, data) {
      console.log(data);
    })
  })
})