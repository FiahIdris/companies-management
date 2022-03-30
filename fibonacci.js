function fibonacci(n) {
  let result = [0, 1];
  while (result[result.length - 1] < n) {
    let count = result[result.length - 1] + result[result.length - 2];
    result.push(count);
  }
  result.pop();
  return result.join(" ");
}

console.log(fibonacci(40));
