const express = require('express');
const cors = require('cors');

const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get('/repositories', (request, response) => {
  // Listar todos os repositórios
  return response.json(repositories);
});

app.post('/repositories', (request, response) => {
  // Criar repositórios
  const { title, url, techs } = request.body;

  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };

  repositories.push(repository);

  return response.json(repository);
});

app.put('/repositories/:id', (request, response) => {
  // Atualizar o repositório por ID
  const { id } = request.params;
  const { title, url, techs } = request.body;

  if (!isUuid(id)) {
    return response.status(400).json({ message: 'Not valid user id' });
  }

  const findRepositoryIndex = repositories.findIndex((repo) => repo.id === id);

  if (findRepositoryIndex < 0) {
    return response.status(400).json({ message: 'User not valid.' });
  }

  repositories[findRepositoryIndex] = {
    id: repositories[findRepositoryIndex].id,
    title: title,
    url: url,
    techs: techs,
    likes: repositories[findRepositoryIndex].likes,
  };

  console.log(title, url, techs);

  return response.json(repositories[findRepositoryIndex]);
});

app.delete('/repositories/:id', (request, response) => {
  // Deletar o repositório por ID
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ message: 'Not a valid ID.' });
  }

  const findRepositoryIndex = repositories.findIndex((repo) => repo.id === id);

  repositories.splice(findRepositoryIndex, 1);

  return response.status(204).json(repositories);
});

app.post('/repositories/:id/like', (request, response) => {
  // Atualizar a contagem de likes no repositório
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ message: 'ID not valid.' });
  }

  const findRepositoryIndex = repositories.findIndex((repo) => repo.id === id);

  const likedRepository = repositories[findRepositoryIndex];
  likedRepository.likes++;

  return response.json(likedRepository);
});

module.exports = app;
