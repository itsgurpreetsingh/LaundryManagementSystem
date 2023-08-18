const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : ,
  database :,
  user     : ,
  password : ,
  port     : ,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
module.exports = {connection};
