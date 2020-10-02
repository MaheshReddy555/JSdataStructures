/*Using frequency counter
write a function called same, which accepts two arrays.
the function should return true if every value in the array has it's corresponding value squared in the seocnd array.
the frequecny of the values must be same

same([1,2,3],[4,1,9])  returns true
same([1,2,3],[1,9])   returns false
same([1,2,1],[4,4,1])   returns false (must have same frequency)
**/

//naive solution
same = (normal, squared) => {
  if (normal.length !== squared.length) {
    return false;
  }
  //for loop through first array
  for (let i = 0; i < normal.length; i++) {
    for (let j = 0; j < squared.length; j++) {
      let sqaurefound = false;
      if (normal[i] * normal[i] === squared[j]) {
        //i miss splice in this solution
        squared.splice(j, 1);
        sqaurefound = true;
        break;
      }

      if (j === squared.length - 1 && !sqaurefound) {
        return false;
      }
    }
  }
  return true;
};

//better solution but naive approach, gives O(n^2)  [for loop,indexof]
same = (normal, squared) => {
  if (normal.length !== squared.length) {
    return false;
  }

  //for loop through first array
  for (let i = 0; i < normal.length; i++) {
    let correctIndex = squared.indexOf(normal[i] * normal[i]);

    if (correctIndex === -1) {
      return false;
    }

    squared.splice(correctIndex, 1);
  }
  return true;
};

//time complexity O(n)
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// same([1, 2, 3], [4, 1, 9]);
console.log(same([1, 2, 1], [4, 4, 1]));
