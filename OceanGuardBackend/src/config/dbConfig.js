const oracledb = require('oracledb');

// Set the output format to object
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

// Database configuration
const dbConfig = {
  user: process.env.DB_USER || 'rm551096',
  password: process.env.DB_PASSWORD || '130904',
  connectString: process.env.DB_CONNECT_STRING || 'oracle.fiap.com.br:1521/ORCL'
};

async function initialize() {
  console.log("Inicializando conexão...");
  console.log("Configuração do banco de dados:", dbConfig);
  try {
    await oracledb.createPool(dbConfig);
    console.log("Conexão estabelecida com sucesso!");
  } catch (err) {
    console.error("Erro ao inicializar conexão:", err);
  }
}

async function close() {
  console.log("Fechando conexão...");
  try {
    await oracledb.getPool().close(0);
    console.log("Conexão fechada com sucesso!");
  } catch (err) {
    console.error("Erro ao fechar conexão:", err);
  }
}

initialize();

module.exports = {
  initialize,
  close,
  oracledb,
  dbConfig
};
