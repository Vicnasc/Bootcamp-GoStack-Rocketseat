import React, { useState, useEffect } from 'react';

import api from './services/service';
import './App.css';

import Header from './components/Header';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Front-end com ReactJS ${Date.now()}`,
      owner: 'Diego Fernandes',
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title='Projects' />

      <ul>
        {projects.map((projects) => (
          <li key={projects.id}>{projects.title}</li>
        ))}
      </ul>

      <button type='button' onClick={() => handleAddProject()}>
        Adicionar projeto
      </button>
    </>
  );
}

export default App;
