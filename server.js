'use strict';

var express = require('express');
var cors = require('cors');
let multer = require('multer');
const fs = require('fs');
// require and use "multer"...

var app = express();
const upload = multer({ dest: 'uploads/' });
app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {

  return res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });

});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
