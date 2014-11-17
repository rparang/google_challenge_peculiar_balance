// The answer function solves a Google programming question in which
// a hypothetical scale must be balanced using weights with masses that 
// are only powers of 3. A starting weight (our input) will begin on the left
// side of the scale.
//
// The first element of the output list corresponds to the 1-unit weight, the
// second element to the 3-unit weight, and so on. Each string is one of: 
//
// "L" : put weight on left-hand side 
// "R" : put weight on right-hand side 
// "-" : do not use weight
//
// Usage example:
// answer(546); // ["-", "L", "R", "L", "R", "L", "R"]
// answer(8); // ["L", "-", "R"]
// answer(34534); // ["R", "-", "-", "R", "-", "R", "L", "R", "L", "L", "R"]


function answer(num) {
  return balance( decimal_to_ternary(num) );
}

// Takes an integer of base 10 and 
// converts it to ternary.
function decimal_to_ternary(num) {

  if (num == 0) return 0;

  var i = 0;
  var result = [];

  while(num > 0) {

    // Looking for the largest power of 3 where 3^i
    // is not larger than num. Add 0's for the index 
    // in the meantime
    while ( num / Math.pow(3,i) >= 1) {
      result[i] = 0;
      i++;
    }

    // We leave our loop with i being 1 too large
    i--;

    // Since we can use up to 2, see if we can fit 2 
    if ( 2 * Math.pow(3,i) <= num ) {
      result[i] = 2; 
      num = num - 2 * Math.pow(3,i);
    }
    else {
      result[i] = 1;
      num = num - Math.pow(3,i);
    }
    i = 0;
  }
  return parseInt( result.reverse().join('') );
}


// Returns our balanced ternary, based on a method
// where values of 2 are converted to "1T" in which
// the "T" is a negative value and the one is carried.
// See more here: http://en.wikipedia.org/wiki/Balanced_ternary
function balance(num) {

  var carry = 0;
  var i, temp;

  // Need to turn our number into an array. Reversing it since
  // we're working right to left through the conversion
  var array = num.toString().split('').reverse().map( function(a,b) {return parseInt(a)} );

  for (i = 0; i < array.length; i++) {
    temp = array[i] + carry;
    carry = 0;
    switch(temp) {
      case 3:
        array[i] = "-";
        carry = 1;
        break;
      case 2:
        array[i] = "L"
        carry = 1;
        break;
      case 1:
        array[i] = "R";
        carry = 0;
        break
      default:
        array[i] = "-";
        carry = 0;
        break;
    }
  };
  if (carry == 1) {
    array.splice(array.length, 0, "R")
  }
  return array;
}