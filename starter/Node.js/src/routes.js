const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

// Rota para buscar informações
routes.get('/products', ProductController.index);

// Rota para buscar uma única informação
routes.get('/products/:id', ProductController.show);

// Rota para criar informações
routes.post('/products', ProductController.store);

// Rota para alterar/atualizar informações
routes.put('/products/:id', ProductController.update);

// Rota para excluir informações
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;
