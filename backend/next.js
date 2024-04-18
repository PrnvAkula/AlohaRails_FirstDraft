var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    database: 'train',
    user: 'root',
    password: '',
});

connection.connect(function(err) {
    if(err){
        console.log('Error connecting: + errr.stack');
        return;
    }
        console.log('Connected as id ' + connection.threadId);   
});

connection.query('SELECT * FROM train', function(err, results, fields) {
    if(err) throw err;
    results.forEach(result => {
        console.log(result);
    });
});