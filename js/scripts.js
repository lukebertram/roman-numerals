var numValue = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var numerals = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

var romanCount = function(inputNum) {
  var result = "";
  for (var i = 0; i < inputNum; i++) {
    result += "I";
    //check for too many repeated numbers before end of loop
  }

  return result;
};

//FRONT-LOADED FRONT-ENDEDNESS
$(document).ready(function(){
  $("#numberEntry").submit(function(event){
    event.preventDefault();

    var userInput = parseInt($("#userInput").val());
    var output = romanCount(userInput);
    $("div#result").text(output);
  });
});
