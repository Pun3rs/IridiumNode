var mysql = require('mysql');
var http = require('http'),
    fs = require('fs'),
    url = require('url');
var host = "den1.mysql6.gear.host",
    pass = "admin!",
    user = "delicion",
    data = user;
var express = require("express");
var app = express();


app.get('/', (request, response) {

var path = (url.parse(request.url).pathname).replace('/', '');


if(request.url != "/favicon.ico")
{
//console.log(dataPack);


var final = "";
var results;

var con = mysql.createConnection(
  {
    host : host,
    user : user,
    password : pass,
    database : data
  });

con.connect(function (err)
  {
    //console.log(request.url);

    var sql = mysql.format("SELECT * FROM users WHERE username LIKE " + "'" + path+ "%" + "'");
    //console.log(sql);
    con.query(sql , function (err, result, fields) {
      results = result;

      for(i = 0; i < results.length; i++)
      {
        final = final+(results[i].username) + "\n";
      }

      response.write(final);
      response.end();
)}

app.listen(app.get('port'));
