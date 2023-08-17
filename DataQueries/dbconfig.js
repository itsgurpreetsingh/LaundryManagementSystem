const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'b3cbiwge49dv0dsh3dyk-mysql.services.clever-cloud.com',
  database :'b3cbiwge49dv0dsh3dyk',
  user     : 'uvyj8nccujy2knr8',
  password :  '08ixSavS7gHd5Xlx1Nl1',
  port     :  3306,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ', err);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});
module.exports = {connection};
