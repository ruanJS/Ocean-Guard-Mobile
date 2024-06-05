const oracledb = require('oracledb');
const dbConfig = require('../config/dbConfig');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function addObservation(req, res) {
  const { type, description } = req.body;
  const { userId } = req;

  console.log("Adicionar observação - User ID:", userId);
  console.log("Adicionar observação - Type:", type, "Descrição:", description);

  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Adicioinar observação - Conectado com Oracle DB");

    const result = await connection.execute(
      `INSERT INTO observations (user_id, type, description) VALUES (:userId, :type, :description)`,
      [userId, type, description],
      { autoCommit: true }
    );

    console.log("Adicionar observação - Data inserida:", result);
    await connection.close();
    console.log("Adicionar observação - Conexão fechada");

    res.status(201).send({ message: 'Observação adicionada com sucesso' });
  } catch (error) {
    console.error("Add Observation - Error:", error);
    res.status(500).send({ message: 'Falha ao adicionar observação', error });
  }
}

async function getObservations(req, res) {
  const { userId } = req;

  console.log("Get Observations - User ID:", userId);

  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Get Observations - Connected to Oracle DB");

    const result = await connection.execute(
      `SELECT * FROM observations WHERE user_id = :userId`,
      [userId]
    );

    console.log("Get Observations - Data fetched:", result.rows);
    await connection.close();
    console.log("Get Observations - Connection closed");

    res.status(200).send(result.rows);
  } catch (error) {
    console.error("Get Observations - Error:", error);
    res.status(500).send({ message: 'Failed to fetch observations', error });
  }
}

module.exports = { addObservation, getObservations };
