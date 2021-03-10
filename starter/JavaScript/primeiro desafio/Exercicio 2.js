function pares(x, y) {
  const answer = [];

  switch (true) {
    case x > y:
      for (let i = y; i < x; i++) {
        if (i % 2 === 0) {
          answer.push(i);
        }
      }
      console.log(answer);
      break;
    case x < y:
      for (let i = x; i < y; i++) {
        if (i % 2 === 0) {
          answer.push(i);
        }
      }
      console.log(answer);
      break;
    default: {
      console.log(x);
      break;
    }
  }
}

pares(32, 321);
