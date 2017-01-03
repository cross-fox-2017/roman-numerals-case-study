var to_roman = function(num) {

  // create arrays with default conversion with matching indices.
  var decimalValue = [1,4,5,9,10,40,50,90,100,500,900,1000];
  var romanNumeral = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

  var numCopy = num;
  var romanized = '';

  while(numCopy > 0) {
    for (var index = 0; index < decimalValue.length; index++) {
      if(+decimalValue[index] <= numCopy && +decimalValue[+index + 1]> numCopy) {
        romanized += romanNumeral[index];
        numCopy -= decimalValue[index];
      }
    }
  }
  return romanized;
}

console.log("IV",to_roman(4));
console.log("IX",to_roman(9));
console.log("XIII",to_roman(13));
console.log("MCDLIII",to_roman(1453));
console.log("MDCXLVI",to_roman(1646));
