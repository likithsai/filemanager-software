const express = require('express');
const os = require('os');
const cors = require('cors');
const file = require('./src/includes/files');
const utils = require('./src/includes/utils');
const qrcode = require('qrcode-terminal');
const mime = require('mime-types');
const path = require('path');

const app = express();
const SERVER = utils.getLocalIPAddress() || 'localhost';
const PORT = process.env.port || 3001;
var JSONList = [];

//  check if argument is passed or not
if (process.argv[2] !== undefined) {
    let filesList = [], systemDetails = [];

    //  system details
    systemDetails.push({
        'path': process.argv[2],
        'os': os.type(),
        'arch': os.arch()
    });

    //  file list
    file.walkSync(process.argv[2], function (filePath, stat) {
        var tempFile = '';

        //  check if thumbnail folder exist or not
        if(!file.existFolder('./data/thumbnails/')) {
            file.createFolder('./data/thumbnails');
        }

        if(mime.lookup(filePath).toString().includes('video')) {
            tempFile = `./data/thumbnails/${file.calculateHashOfFile(filePath)}.gif`;
            utils.generateThumbnailFromVideo(filePath, tempFile);
        } else if(mime.lookup(filePath).toString().includes('pdf')) {
            tempFile = `./data/thumbnails/${file.calculateHashOfFile(filePath)}.jpg`;
            utils.generateThumbnailFromPDF(filePath, tempFile);
        }

        filesList.push({
            filename: path.basename(filePath),
            filetype: mime.lookup(filePath),
            filepath: filePath.replace(process.argv[2], `http://${SERVER}:${PORT}`),
            thumbnail: (mime.lookup(filePath).toString().includes("video") || mime.lookup(filePath).toString().includes("pdf")) ? tempFile.replace('./data', `http://${SERVER}:${PORT}`) : filePath,
            filesize: utils.bytesToSizes(stat.size),
            filehash: file.calculateHashOfFile(filePath),
            filecreated: stat.birthtime
        });
    });

    //  merge into JSONList
    JSONList.push({
        "sysinfo" : systemDetails,
        "fileinfo" : [{
            "filecount": filesList.length,
            "fileitems": filesList
        }]
    });

    //  import bootstrap & jQuery
    app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); 
    app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); 
    app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
    app.use('/thumbnails', express.static(__dirname + '/data/thumbnails'));

    //  set dynamic public path for serving files
    app.use(express.static(process.argv[2]));
    //  avoid CORS
    app.use(cors());

    app.listen(PORT, SERVER, function (req, res) {
        console.log('\x1b[32m%s\x1b[0m', 'HTTP Server V1.0');
        console.log('File server for managing files', '\n');
        console.log('\x1b[43m SYSTEM INFO \x1b[0m\n');
        console.log('\x1b[36m%s\x1b[0m', `URL:`, '\t', `\x1b[4mhttp://${SERVER}:${PORT}/\x1b[0m`);
        console.log('\x1b[36m%s\x1b[0m', `PATH:`, '\t', process.argv[2]);
        console.log('\x1b[36m%s\x1b[0m', `DATE:`, '\t', new Date(), '\n');
        console.log('\x1b[36m%s\x1b[0m', `OS:`, os.type());
        console.log('\x1b[36m%s\x1b[0m', `Archtecture:`, os.arch());
        console.log('\x1b[36m%s\x1b[0m', `RAM:`, utils.bytesToSizes(os.freemem()) + '/' + utils.bytesToSizes(os.totalmem()), '\n');
        console.log(`\x1b[43m ${JSONList[0].fileinfo[0].fileitems.length} files scanned, ${JSONList[0].fileinfo[0].fileitems.length - utils.uniqueArray(JSONList[0].fileinfo[0].fileitems, 'filehash').length} Duplicates found. \x1b[0m`);
        console.log('\x1b[43m Press CNTRL+C to stop the server ... \x1b[0m\n');
        qrcode.generate(`http://${SERVER}:${PORT}`, {small: true});
    });

    app.get('/', function(request, response){
        utils.printLog(request);
        response.sendFile(path.join(__dirname + '/views/index.html'));
    });

    app.get('*', function(request, response, next){
        utils.printLog(request);
        next();
    });

    app.get('/api', function (req, res) {
        res.setHeader('Content-Type', 'application/json').send(JSON.stringify(utils.uniqueArray(JSONList, 'filehash')));
    });

    //  show error page for bad request
    app.use(function (req, res, next) {
        res.status(404).sendFile(path.join(__dirname + '/views/404.html'));
    });
} else {
    console.log('\x1b[41mERROR\x1b[0m', '\t', 'Please pass filepath as argument');
}