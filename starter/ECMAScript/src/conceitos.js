// Em caso de alteração, importante alterar dados no package.json para executar

// Exercício 1
class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
    this.hasAdminProp = false;
  }

  isAdmin() {
    if (this.hasAdminProp) {
      return 'Bem-vindo, admin!';
    }
    return 'Usuário sem permissão de admin.';
  }
}

class Admin extends Usuario {
  constructor() {
    super();
    this.hasAdminProp = true;
  }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin());
console.log(Adm1.isAdmin());

// Exercício 2
const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map((user) => user.idade);
console.log(idades);

const adultos = usuarios.filter((user) => {
  if (user.idade >= 18 && user.empresa === 'Rocketseat') {
    return user;
  }
});
console.log(adultos);

const employee = usuarios.find((employee) => employee.empresa === 'Google');
console.log(employee);

const oldies = usuarios
  .map((usuario) => ({ ...usuario, idade: usuario.idade * 2 }))
  .filter((usuario) => usuario.idade <= 50);

console.log(oldies);

// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
});

const arrResposta = arr.map((item) => item + 10);
console.log(arrResposta);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}
mostraIdade(usuario);

const mostraIdadeResposta = (usuario) => console.log(usuario.idade);
mostraIdadeResposta(usuario);

// 3.3
// Dica: Utilize uma constante pra function
const nome = 'Diego';
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const respostaNomeIdade = (nome = 'Diego', idade = 18) => ({ nome, idade });
console.log(respostaNomeIdade('Diego', 23));

// 3.4
const promise = function () {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};

const respostaPromise = () =>
  new Promise((resolve, reject) => {
    resolve();
  });

console.log(respostaPromise());

// Exercicio 4

const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const {
  nome,
  endereco: { cidade, estado },
} = empresa;
console.log(nome);
console.log(cidade);
console.log(estado);

// 4.1

function mostraInfo({ nome, idade }) {
  return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Diego', idade: 23 }));

// Exercício 5

const arr = [1, 2, 3, 4, 5, 6];
const [x, ...y] = arr;

console.log(x);
console.log(y);

// 5.1

function soma(...y) {
  return y.reduce((a, b) => a + b);
}

console.log(soma(1, 2, 3, 4, 5, 6));
console.log(soma(1, 2));

// 5.2

const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  },
};

const usuario2 = { ...usuario, nome: 'Gabriel' };
const usuario3 = { ...usuario, endereco: { cidade: 'Lontras' } };

console.log(usuario2);
console.log(usuario3);

// Exercício 6

const usuario = 'Diego';
const idade = 23;
// console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');
console.log(`O usuário ${usuario} possui ${idade} anos.`);

// Exercício 7

const nome = 'Diego';
const idade = 23;
const usuario = {
  nome,
  idade,
  cidade: 'Rio do Sul',
};

console.log(usuario);
