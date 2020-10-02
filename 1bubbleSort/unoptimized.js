// UNOPTIMIZED VERSION OF BUBBLE SORT
//first for loop is for let you know ho far it has to compare
// usefule links
//https://panthema.net/2013/sound-of-sorting/
//https://www.toptal.com/developers/sorting-algorithms
//Screen Shot 2020-05-20 at 2.57.52 PM
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    //[8, 1, 2, 3, 4, 5, 6, 7]
    // i=8
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
