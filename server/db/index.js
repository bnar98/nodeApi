const mysql = require('mysql');
const pool = mysql.createPool({
  password: '',
  user: "root",
  database: "angular",
  host: "localhost"
})
let usersdb = {};
usersdb.all = () => {

  return new Promise((resolve, reject) => {
    pool.query('select * from users', (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results)
    })
  });

}
module.exports = usersdb;