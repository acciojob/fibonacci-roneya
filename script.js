function fibonacci(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1 || num === 2) {
    return 1;
  } else if (num > 50) {
    return "Number too large, please enter a number between 0 and 50";
  } else {
    let a = 0;
    let b = 1;
    let c;
    for (let i = 2; i <= num; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
}

module.exports = fibonacci;
