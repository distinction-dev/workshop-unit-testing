const fs = require("fs");
const filePath = "/somewhere/on/the/disk";

function readSomethingFromFileSystem(cb) {
	console.log("Reading from file system ...");
	fs.readFileSync(filePath, "utf8", cb);
}

exports.readSomethingFromFileSystem = readSomethingFromFileSystem;