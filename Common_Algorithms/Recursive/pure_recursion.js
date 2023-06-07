//Pure recursion function

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

//running through how it returns
//collectOddValues([1, 2, 3, 4, 5]) returns [1, 3, 5]
//first step = [1].concat(collectOddValues([2, 3, 4, 5])) returns [3, 5]
//          second step = [].concat(collectOddValues([3, 4, 5])) returns [3, 5]
//                  third step = [3].concat(collectOddValues([4, 5])) returns [5]
//                          fourth step = [].concat(collectOddValues([5])) returns [5]
//                                  fifth step = [5].concat(collectOddValues([])) returns []
//                                          sixth step = []
