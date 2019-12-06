const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()



/*
fs.readFile('./index.html', (err, html) =>{
	if (err) {
		throw err
	}
	http.createServer((request, response) => {
		response.writeHead(200, {"Content-Type": "text/html"})
		response.write(html)
		response.end()
	}).listen(8000)
})
*/

app.get('/', function (req, res) {
  fs.readFile('./index.html', (err, html) =>{
	if (err) {
		throw err
	}
	
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(html)
		res.end()
	
	})
});

app.get('/faces.html', function (req, res) {
  fs.readFile('./faces.html', (err, html) =>{
	if (err) {
		throw err
	}
	
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(html)
		res.end()
	
	})
});

app.get('/pyatnashki.html', function (req, res) {
  fs.readFile('./pyatnashki.html', (err, html) =>{
	if (err) {
		throw err
	}
	
		res.writeHead(200, {"Content-Type": "text/html"})
		res.write(html)
		res.end()
	
	})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});