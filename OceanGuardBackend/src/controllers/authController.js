const oracledb = require('oracledb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/dbConfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function register(req, res) {
  const { email, password } = req.body;
  console.log("Acessado o register")
  const hashedPassword = await bcrypt.hash(password, 8);
  console.log("Email: ", email, "   Password: ", password);
  console.log("Hashed password: ", hashedPassword);

  try {
    const connection = await oracledb.getConnection(db.dbConfig);
    console.log("Conexao com Oracle feita");
    const result = await connection.execute(
      `INSERT INTO users (email, password) VALUES (:email, :password)`,
      [email, hashedPassword],
      { autoCommit: true }
    );
    console.log("Dados inseridos no banco de dados");
    await connection.close();
    console.log("Conexão fechada");
    res.status(201).send({ message: 'User registered successfully' });
  } catch (error) {
    console.log("Erro: ", error);
    res.status(500).send({ message: 'Registration failed', error });
  }
}

async function login(req, res) {
  console.log("acessando o login");
  const { email, password } = req.body;
  console.log("login relizado com sucesso");
  try {
    const connection = await oracledb.getConnection(db.dbConfig);

    const result = await connection.execute(
      `SELECT * FROM users WHERE email = :email`,
      [email]
      
    );
    console.log("bem-vindo");
    const user = result.rows[0];
    await connection.close();

    if (user && bcrypt.compareSync(password, user.PASSWORD)) {
      const token = jwt.sign({ id: user.ID }, 'your-secret-key', {
        expiresIn: 86400,
      });
      res.status(200).send({ token });
    } else {
      res.status(401).send({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Login failed', error });
  }
}

module.exports = { register, login };
