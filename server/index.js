
const express = require('express');
    const app = express();
    const oracledb = require('oracledb');
    
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/customers', (req, res) => {
  async function fetchCustomers() {
    try{
      const connection = await oracledb.getConnection({
        user : 'c##hr',
        password : 'hr',
        connectString : '172.16.116.60/XE'
      });
      
      const result = await connection.execute('SELECT * FROM customers');
      return result.rows;
    }catch(err){
      console.error(err); 
      return err.message;
    }
  }
  fetchCustomers()
  .then(dbRes => {
    console.log(dbRes)
        res.send(dbRes);
    })
    .catch(err=>{
          res.send(err);
      })
});


app.listen(5500, () => {
  console.log('Server is running on port 5500');
});