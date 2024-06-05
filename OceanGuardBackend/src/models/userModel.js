const oracledb = require('../config/dbConfig').oracledb;
const bcrypt = require('bcryptjs');

async function createUser(email, password) {
  const connection = await oracledb.getConnection();
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await connection.execute(
    `INSERT INTO users (email, password) VALUES (:email, :password)`,
    [email, hashedPassword],
    { autoCommit: true }
  );
  await connection.close();
  return result;
}

async function findUserByEmail(email) {
  const connection = await oracledb.getConnection();
  const result = await connection.execute(
    `SELECT * FROM users WHERE email = :email`,
    [email]
  );
  await connection.close();
  return result.rows[0];
}

module.exports = {
  createUser,
  findUserByEmail
};
