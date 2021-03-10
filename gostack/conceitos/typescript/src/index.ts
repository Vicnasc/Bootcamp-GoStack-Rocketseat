import express from 'express';
import helloWorld from './routes';

// Inicializando o express no código
const app = express();

// Primeira rota
app.get('/', helloWorld);

// Escutando o host na porta abaixo
app.listen(3333);
