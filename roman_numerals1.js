var roman = new Array();
roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var decimal = new Array();
decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];

function to_roman(value){
  if (value <= 0 || value >= 4000) {
    return value;
  }
  var romanNumeral = '';
  for (var i = 0; i < roman.length; i++){
    while (value >= decimal[i]) {
      value -= decimal[i];
      romanNumeral += roman[i];
    }
  }
  return romanNumeral;
}

console.log(to_roman(4));
console.log(to_roman(9));
console.log(to_roman(13));
console.log(to_roman(1453));
console.log(to_roman(1646));