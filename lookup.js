const pg = require("pg");
const settings = require("./settings"); // settings.json
const firstname = process.argv.slice(2);
//const last_name = process.argv.slice(3);
const text = "SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name = $1 "
const values =firstname;
console.log(values);
const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query(text , values , (err, result) => {
    // client.query("SELECT first_name, last_name FROM famous_people WHERE first_name = $1::text AND last_name = $2::text", firstname, last_name ,  (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      for(var item in result.rows)
      
      console.log(result.rows[item].first_name + " " + result.rows[item].last_name + " Born on : " + "'" + result.rows[item].birthdate + "'"); //output: 1
      client.end();
    });
  });