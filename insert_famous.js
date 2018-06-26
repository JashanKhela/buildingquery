require('dotenv').config();
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
var info = Array.from(process.argv.slice(2))
const firstname = info[0];
const lastname = info[1];
const birthdate = info[2];
var insert1 = {first_name: firstname, last_name: lastname, birthdate: birthdate};
// knex('famous_people').insert({first_name: 'Bill'});
knex.insert(insert1).into("famous_people").then(function (id){
 console.log(id)
})