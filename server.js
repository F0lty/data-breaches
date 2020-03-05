const fs = require('fs');
const http = require('http');
const express = require('express')
const app = express()
const port = 8080


let rawdata = fs.readFileSync('database.json');
let student = JSON.parse(rawdata);
app.use(express.static(__dirname + '/public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/', function(request, response){
    response.sendFile('/Users/folty/Desktop/breach/breaches.html');
});

app.get('/app', function (req, res) {
  res.send(student);
})
