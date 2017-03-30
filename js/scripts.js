//Back-end Logic:
const romanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};

const romanNumeralGenerator = function(number) {
  // debugger;
  let romanNumeral = [];
  for (let i = 0; i < number; i ++) {
    romanNumeral.push([romanNumerals["1"]]);
  };
  return romanNumeral.join("");
};

//Front-end Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#romanInput").val();

    $("#romanResult").text(romanNumeralGenerator(userInput));
  });
});
