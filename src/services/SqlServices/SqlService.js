const sql = require('../../client/connection');
module.exports.sqlQuery = (data) => {
    console.log(data)
  let result = new Promise((resolve, reject) => {
    sql.query(data, function (err, results) {
      resolve(results);
      reject(err)
    });
  }).catch((err) => {
    console.log(err)
  });
  return result;
}