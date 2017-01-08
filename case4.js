function to_roman(num){
  var result = '';
  var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  var roman = ['M','MC','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  for (var i = 0; i <= decimal.length; i++){
    while (num % decimal[i] < num) {
      result += roman[i];
      num -= decimal[i];
    }
  }
  return result;
}
console.log("My totally sweet testing script \n")
console.log("input | expected | acual")
console.log("-----|-------|-------")
console.log("4      |IV     |", to_roman(4));
console.log("9      |IX     |",to_roman(9));
console.log("13      |XIII     |",to_roman(13));
console.log("1453      |MCDLIII     |",to_roman(1453));
console.log("1646      |MDCXLVI     |",to_roman(1646));
