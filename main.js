var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/dollproject'));

//when a get request is made on the url /shop then the response sends the appropriate file
app.get('/shop', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/products.html'));
});

app.get('/checkout', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/myBasket.html'));
});

app.get('/login', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/login.html'));
});

app.get('/register', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/register.html'));
});

app.get('/specialorders', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/specials.html'));
});

app.get('/map', function (req, res) {
   res.sendFile(path.join(__dirname + '/dollproject/map.html'));
});







/*app.get('/:name', function(req,res) {
res.send('Hello ' + req.params.name);
});*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
