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
  while ( number >= 1000) {
    romanNumeral.push([romanNumerals["1000"]]);
    number -= 1000;
  };
  while ( number >= 500) {
    romanNumeral.push([romanNumerals["500"]]);
    number -= 500;
  };
  while ( number >= 100) {
    romanNumeral.push([romanNumerals["100"]]);
    number -= 100;
  };
  while ( number >= 50) {
    romanNumeral.push([romanNumerals["50"]]);
    number -= 50;
  };
  while ( number >= 10) {
    romanNumeral.push([romanNumerals["10"]]);
    number -= 10;
  };
  while ( number >= 5) {
    romanNumeral.push([romanNumerals["5"]]);
    number -= 5;
  };
  while ( number >= 1) {
    romanNumeral.push([romanNumerals["1"]]);
    number -= 1;
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
