// Step 1  MAke sure your postgres database is on

// Install pg npm i pg

//Connection code

const {Pool,Client}= require('pg')


const connectionString='postgressql://postgres:nethaji@localhost:5432/postgres'


//Creating Client
const client= new Client({
    connectionString:connectionString
})




////////////////////////////////////////// PSQL Query//////////////////////////////



//Select query
// client.connect()
// client.query('Select * from public."Stud"',(err,res)=> {
//     console.log(err,res)
//     //client.end()
// })


// Select Query. Check the structure of your table as shown in the video
client.connect()
 client.query('Select * from details',(err,res)=> {
console.log(err,res)
client.end()
 })


// Insertion Query. Check the structure of your table as shown in the video
//client.connect()
//const qr="INSERT INTO details (ID,NAME,AGE,ADDRESS,SALARY) VALUES (4, 'varshitha', 20, 'vijayawada',250000.00 );";
//client.query(qr,(err,res)=> {
  //  console.log(err,res)
    //client.end()
//})
