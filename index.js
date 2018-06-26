require('dotenv').config();
// const db = require('db');
// db.connect({
//   host: process.env.DB_HOST,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS
// });
var knex = require('knex')({
 client: 'pg',
 version: '7.2',
 connection: {
   host : process.env.DB_HOST,
   user : process.env.DB_USER,
   password : process.env.DB_PASS,
   database : process.env.DB
 }
});

knex
.from('famous_people')
.select('*').where('first_name', 'like', '%Paul%').then(function(people){
 //do something here
 for(var index in people){
   console.log(people[index].id + ' ' + people[index].first_name)
 }
});
