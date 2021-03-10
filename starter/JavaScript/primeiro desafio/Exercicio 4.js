function experiencia(anos) {
  switch (true) {
    case anos < 1:
      console.log('Iniciante');
      break;
    case anos >= 1 && anos < 3:
      console.log('Intermediário');
      break;

    case anos >= 3 && anos < 7:
      console.log('Avançado');
      break;

    case anos >= 7:
      console.log('Jedi Master');
      break;

    default:
      console.log('Não é possível concluir com o valor digitado.');
  }

  // if (anos < 1) {
  //   console.log('Iniciante');
  // } else if (anos >= 1 && anos < 3) {
  //   console.log('Intermediário');
  // } else if (anos <= 3 && anos < 7) {
  //   console.log('Avançado');
  // } else if (anos >= 7) {
  //   console.log('Jedi Master');
  // }
}

var anosEstudo = 15;
experiencia(anosEstudo);

// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master
