//BARELY WORKING
function fibanocci(val) {
  function helper(a, b) {
    arr.push(a + b);
    return a + b;
  }
  let arr = [0, 1, 1];
  let total = 0;
  for (let i = 2; i <= val; i++) {
    console.log(val, i);
    total = total + helper(arr[i - 1], arr[i - 2]);
  }
  return total;
}

//BIG(O) is O(2^n)
//using recursive
function febrec(n) {
  if (n <= 2) return 1;
  return febrec(n - 1) + febrec(n - 2);
}

//big(O) is O(n)
//working solution with better approach MEMOIZATION
function memotimecom(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = timecom(n - 1) + timecom(n - 2);
  memo[n] = res;
  return res;
}

//big(O) is O(n)
//working solution with better approach TABULATION
function tabulationtimecom(n) {
  let febnums = [0, 1, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= val - 1; i++) {
    febnums[i] = febnums[i - 1] + febnums[i - 2];
  }

  return febnums[n];
}

console.log("final valyes is", tabulationtimecom(2));

// 0 1 1 2 3 5
