var usuarios = [
  {
    nome: 'Diego',
    habilidades: ['Javascript', 'ReactJS', 'Redux'],
  },
  {
    nome: 'Gabriel',
    habilidades: ['VueJS', 'Ruby on Rails', 'Elixir'],
  },
];

function concat() {
  for (let user of usuarios) {
    console.log(
      `O ${user.nome} possui as habilidades: ${user.habilidades.join(', ')}`
    );
  }
}

concat();
