// usefule links
//https://panthema.net/2013/sound-of-sorting/
//https://www.toptal.com/developers/sorting-algorithms
//https://visualgo.net/en/sorting

//tough do it once
//es5
function insertionSort(arr) {
  var currentVal;
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

//es6
function insertionSort(arr) {
  let currentVal;
  let j;
  for (let i = 1; i < arr.length; i++) {
    currentVal = arr[i];
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);

// [2, 1, 9, 76, 4] with 1
//     compare [2] all if > 1
//     [2, 2, 9, 76, 4]
//     final [1, 2, 9, 76, 4]

// [1, 2, 9, 76, 4] with 9
//     compare [1, 2] all if > 9
//     final [1 , 2, 9, 76, 4]

// [1, 2, 9, 76, 4] with 76
//     compare [1, 2, 9] all if > 76
//     final [1, 2, 9, 76, 4]

// [1, 2, 9, 76, 4] with 4
//     compare [1, 2, 9, 76] all if > 4
//     [1, 2, 9, 76, 76]
//     [1, 2, 9, 9, 76]
//     final [1, 2, 4, 9, 76]
