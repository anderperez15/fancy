var mysql = require('mysql');
/*
En caso de descargar este proyecto,
es necesario que modifique los
parametros de conecion a la bases
de datos.
*/
const db = {
  user:"root",
  password:"root",
  host:"localhost",
  database:"atlas"
};

module.exports = mysql.createConnection({
  host   : db.host,
  user    : db.user,
  password : db.password,
  database : db.database
});
