const express = require('express'); // Inicializando a estrutura de servidor
const cors = require('cors'); // Inicializando o CORS
const mongoose = require('mongoose'); // ORM para gerenciar MongoDB
const requireDir = require('require-dir'); // Biblioteca para "requerir" todos os diretórios automaticamente

// Iniciando o App
const app = express();

// Explicar para o express que iremos utilizar o formato JSON nas requisições
app.use(express.json());

// Filtro de qual endereço pode acessar os recursos da aplicação
app.use(cors());

// Iniciando o DB com Mongoose ORM
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir('./src/models'); // Importanto todos os models da pasta

// Conexão padrão e programando a mensagem de erro, se houver
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// Rotas
app.use('/api', require('./src/routes'));

// Porta que está sendo escutada pelo NodeJS
app.listen(3001);
