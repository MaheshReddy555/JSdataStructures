// function sumRange(num) {
//   if (num === 1) return 1;
//   return num + sumRange(num - 1);
// }

function sumRange(num) {
  console.log("input is", num);
  if (num === 1) {
    console.log("recursion stopped here when input is ", num);
    return 1;
  }
  let total = num + sumRange(num - 1);
  console.log("input is", num, "and total is", total);
  return total;
}

//   4 + sumRange(3) + sumRange(2) + sumRange(1)
console.log(sumRange(4));
