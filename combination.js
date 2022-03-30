function combination(n, r) {
  let result;
  let count1 = 1;
  let count2 = 1;
  let count3 = 1;
  for (let i = 1; i <= n; i++) {
    count1 = count1 * i;
  }

  for (let i = 1; i <= r; i++) {
    count2 = count2 * i;
  }

  for (let i = 1; i <= n - r; i++) {
    count3 = count3 * i;
  }

  result = count1 / (count2 * count3);
  return result;
}
console.log(combination(4, 2));
