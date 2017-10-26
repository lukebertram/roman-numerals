// var numValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
// var numeralArray = [ ["I", 1], ["IV", 4], ["V", 5], ["IX", 9], ["X", 10], ["XL", 40], ["L", 50], ["XC", 90], ["C", 100], ["CD", 400], ["D", 500], ["CM", 900], ["M", 1000] ];
var onesArray = ["I", "V", "X"];
var tensArray = ["X", "L", "C"];
var hundosArray = ["C", "D", "M"];
var thousandsArray = ["M"];
// var arrays = [onesArray, tens, hundos, thousands];

var toRomanNumeral = function(numberString, array){
  var number = parseInt(numberString);
  var romanNumeral = "";
  for (var i = 0; i < number; i++) {
    if (i < 3) {
      romanNumeral += array[0];
    } else if (i === 3){
      romanNumeral = array[0] + array[1];
    } else if (i === 4){
      romanNumeral = array[1];
    } else if (i < 8) {
      romanNumeral += array[0];
    } else {
      romanNumeral = array[0] + array[2];
    }
  }
  return romanNumeral;
}

var romanCount = function(inputNum) {
  var result;
  debugger
  var inputArray = inputNum.split("").reverse();
  var ones, tens, hundreds, thousands;
  for (var i = 0; i < inputArray.length; i++) {
    //when index is at ones place
    if (i === 0){
      ones = toRomanNumeral(inputArray[i], onesArray);

    //when index is at tens place
    } else if (i === 1){
      tens = toRomanNumeral(inputArray[i], tensArray);

    //when index is at hundreds place
    } else if (i === 2) {
      hundreds = toRomanNumeral(inputArray[i], hundosArray);

    //when index is at thousands place
    } else {
      thousands = toRomanNumeral(inputArray[i], thousandsArray);

    }
  }
  result = thousands + hundreds + tens + ones;
  return result;
};

//FRONT-LOADED FRONT-ENDEDNESS
$(document).ready(function(){
  $("#numberEntry").submit(function(event){
    event.preventDefault();

    var userInput = $("#userInput").val();
    var output = romanCount(userInput);
    $("div#result").text(output);
  });
});
