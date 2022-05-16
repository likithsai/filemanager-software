//  files.js
//  contains functions for handling files

var fs = require('fs'), 
path = require('path'),
crypto = require('crypto');
const { Console } = require("console");

//  function to recursively list all the files in the folders and subfolders
const walkSync = function(currentDirPath, callback) {    
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory()) {
            walkSync(filePath, callback);
        }
    });
}


//  function to check if folder exist
const existFolder = function(path) {
    if (fs.existsSync(path)) {
        return true;
    } else {
        return false;
    }
}

//  function to create folder
const createFolder = function(path) {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}


//  function to calculate hash
const calculateHashOfFile = function(path) {
    const file = fs.readFileSync(path);
    return crypto.createHash('sha1').update(file).digest("hex");
}

//  function to save log data to files
const myLogger = new Console({
    stdout: fs.createWriteStream("logs/logs.txt")
});

module.exports = {
    walkSync, existFolder, createFolder, calculateHashOfFile, myLogger
}
