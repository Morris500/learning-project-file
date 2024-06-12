const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended:true}));

 app.get ("/", function (req, res) {
   res.sendFile(__dirname + "/index.html" )
 });

 app.post("/", function (req, res) {

   var data1 = Number(req.body.num1);
   var data2 = Number(req.body.num2);

   var result = data1 + data2

   res.send("your BMI result is " + result);
 });

 app.get ("/bmicalculator", function (req, res) {
   res.sendFile(__dirname + "/bmicalculator.html" )
 });

 app.post("/bmicalculator", function (req, res) {

   var data1 = Number(req.body.weight);
   var data2 = Number(req.body.height);

   var result = Math.floor( data1 / (data2^2));

   res.send("your BMI result is " + result);
 });

 app.listen(port,
function () {console.log("server is running on port 3000"); });
