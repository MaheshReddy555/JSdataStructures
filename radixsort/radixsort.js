//overall slides
//https://cs.slides.com/colt_steele/intermediate-sorting-algorithms#/10/0/3

//original function
// function getDigit(num, i) {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

//original function
// function mostDigits(nums) {
//   let maxDigits = 0;
//   for (let i = 0; i < nums.length; i++) {
//     maxDigits = Math.max(maxDigits, digitCount(nums[i]));
//   }

//   return maxDigits;
// }

//my funciton related to mostDigits
function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, String(nums[i]).length);
  }
  return maxDigits;
}
//relavent to getdigit()
function getDigit(num, index) {
  let lastindex = String(num).length - 1;
  let inx = lastindex - index;
  return String(num)[inx] ? String(num)[inx] : 0;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    console.log(digitBuckets);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log("digitbucket", digitBuckets);
    nums = [].concat(...digitBuckets);
    // console.log(nums);
  }

  console.log(nums);
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);

//[ 12, 23, 345, 2345, 5467, 9852 ]
