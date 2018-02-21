"use strict";
//const http = require('http');
//const fs = require('fs');
const mysql = require('mysql'); 

const port = process.env.PORT || 3000;

var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD
});

connection.connect(function(err) {
    if (err) {
	console.error('error connecting: ' + err.stack);
	return;
    }
    
    console.log('connected as id ' + connection.threadId);

});

// const server = http.createServer((req, res) => {
//     //Add error listener
//     req.on('error', (err) => {
// 	console.error(err);
// 	res.statusCode = 400;
// 	res.end('Error');
//     });
//     if (req.method === 'GET') {
// 	if (req.url === '/') {
// 	    // res.writeHead(200, { 'Content-Type': 'text/html' });
// 	    // res.end('Hello there');

// 	} else {
// 	    res.statusCode = 404;
// 	    res.end('Not allowed');
// 	}
//     } else {
// 	res.statusCode = 404;
// 	res.end('not allowed');
//     }
// });

// server.listen(port, () => {
//     console.log(`Server running at port ${port}`);
// });
