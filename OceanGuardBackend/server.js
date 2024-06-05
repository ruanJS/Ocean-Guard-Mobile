const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const observationRoutes = require('./src/routes/observationRoutes');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/observations', observationRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Servidor Rodando na porta ${PORT}`);
});
