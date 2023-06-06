//Reverse
//Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
  newArray = [];

  if (str.length === 0) {
    return newArray;
  }

  newArray.push(str[str.length - 1]);

  newArray = newArray.concat(reverse(strArr.slice(0, strArr.length - 1)));
  return newArray;
}

//reverse('howdy') returns 'ydwoh'
//  step one = ['h']
//      step two = ['o', 'h']
//          step three = [']

//other way
//function reverse(str){
// 	if(str.length <= 1) return str;
// 	return reverse(str.slice(1)) + str[0];
// }
