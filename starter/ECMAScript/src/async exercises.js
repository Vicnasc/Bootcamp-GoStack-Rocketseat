import axios from 'axios';

// Exercicio 1
// Função delay aciona o .then após 1s
const delay = () => new Promise((resolve) => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log('1s');
  await delay();
  console.log('2s');
  await delay();
  console.log('3s');
}

umPorSegundo();

// Exercicio 2
async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log('Exercício 2');
    console.log(response.data);
  } catch {
    (err) => {
      console.log('Exercício 2');
      console.warn('Usuário não existe');
    };
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// Exercicio 3
class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log('Exercício 3');
      console.log(response.data);
    } catch {
      (err) => {
        console.log('Exercício 3');
        console.warn('Repositório não existe');
      };
    }
  }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');

// Exercicio 4
const buscaUsuario = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  } catch {
    (err) => {
      console.warn('Usuário não existe');
    };
  }
};

buscaUsuario('diego3g');
