const oracledb = require('../config/dbConfig').oracledb;

async function addObservation(type, description, userId) {
  const connection = await oracledb.getConnection();
  const result = await connection.execute(
    `INSERT INTO observations (type, description, user_id) VALUES (:type, :description, :userId)`,
    [type, description, userId],
    { autoCommit: true }
  );
  await connection.close();
  return result;
}

module.exports = {
  addObservation
};
