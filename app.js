var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jade = require('jade');

// serve assets in public folder js/css
app.use(express.static('public'))
// shorten the name of the views without extension
app.set('view engine', 'jade')

app.get('/', function(req, res){
    res.render('home')
});

// Tell express to listen for request (start server) port and ip args are only for c9.io
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('server has started localhost:3000');
});
