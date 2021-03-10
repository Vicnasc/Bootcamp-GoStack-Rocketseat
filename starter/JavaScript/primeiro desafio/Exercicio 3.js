function temHabilidade(skills) {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i] === 'Javascript') {
      console.log('Possui a habilidade.');
      return;
    } else {
      console.log('Não possui a habilidade.');
      return;
    }
  }
}

var skills = ['Javascript', 'ReactJS', 'React Native'];

temHabilidade(skills);
