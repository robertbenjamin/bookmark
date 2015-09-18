var express = require('express');
var app = express9);

app.use(express.static(__dirname + '/app'));
app.listen(process.env.PORT || 3000);