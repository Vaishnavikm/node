'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/database.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to CHC ");
        res.write(' Welcome to CHC');
        res.end();
    } else {
        res.writeHead(200);
        res.write(' OK');
        res.end();

    }
}).listen(8081, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/

let products = {
    "products":
    [
      {"availability":"1","pid":"P01","name":"Dark Chocolate","dom":"April 21 ,2021","exp":"best before 12 months from dom","category":"chocolate","quantity":"4 kg","price":2500.00},
      {"availability":"0","pid":"P02","name":"White Chocolate","dom":"June 30 ,2021","exp":"best before 12 months from dom","category":"chocolate","quantity":"null","price":0},
      {"availability":"1","pid":"P03","name":"Hazelnuts","dom":"August 8 ,2021","exp":"best before 9 months from dom","category":"Nuts and dryfruits","quantity":"2 kg","price":1300.00},
      {"availability":"1","pid":"P04","name":"Sugar","dom":"September 21 ,2021","exp":"best before 12 months from dom","category":"sweetner","quantity":"8 kg","price":800.00},
      {"availability":"1","pid":"P05","name":"Coffee beans","dom":"October 12 ,2021","exp":"best before 14 months from dom","category":"raw materials","quantity":"4 kg","price":2500.00},
      {"availability":"0","pid":"P06","name":"Choco chips","dom":"February 28 ,2021","exp":"best before 12 months from dom","category":"chocolate","quantity":"null","price":0}
    ]
};

let data = JSON.stringify(products);

fs.writeFile('./database.json', data, (err) => {
    console.log('WRITING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./database.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let products = JSON.parse(data);
    console.log(products);

});