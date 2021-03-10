import React, { useState, useEffect } from 'react';
import api from './services/api';

import './styles.css';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(({ data }) => setRepositories(data));
  }, [repositories]);

  async function handleAddRepository() {
    // TODO
    const newRepository = {
      title: `Umbriel - Criado em ${Date.now()}`,
      url: 'https://github.com/Rocketseat/umbriel',
      techs: ['Node', 'Express', 'TypeScript'],
    };

    const { data } = await api.post('/repositories', newRepository);

    setRepositories([...repositories, data]);
  }

  async function handleRemoveRepository(id) {
    // TODO
    await api.delete(`/repositories/${id}`);

    setRepositories([...repositories]);
  }

  return (
    <div>
      <ul data-testid='repository-list'>
        {repositories.map((repo) => (
          <li key={repo.id}>
            {repo.title}
            <button onClick={() => handleRemoveRepository(repo.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
