function fibonacci(num) {
if (num === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  for (let i = 2; i <= num; i++) {
    const c = a + b;
    a = b;
    b = c;
  }
  return b;
}

module.exports = fibonacci;
