//  utils.js
//  contains utility functions

const os = require("os");
const { myLogger } = require("./Files.js");

const bytesToSizes = function(bytes) {
    var sizes = [ 'bytes', 'KB', 'MB', 'GB', 'TB' ];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}

//  function to return IP address
const getLocalIPAddress = function() {
    return os.networkInterfaces().en0.find(elm => elm.family=='4').address;
}

//  function to generate unique elements in array
const uniqueArray = function(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

//  function to print log
const printLog = function(req) {
    let logs = [];
    logs.push({ ip: req.ip, useragent: req.headers['user-agent'], time: Date.now() });
    // console.log('\x1b[44m%s\x1b[0m', 'LOG', '\t', JSON.stringify(logs));
    myLogger.log(JSON.stringify(logs));
}

module.exports = {
    bytesToSizes, getLocalIPAddress, uniqueArray, printLog
}