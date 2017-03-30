//Back-end Logic:
const romanNumerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

const numeralKeys = Object.keys(romanNumerals);

const romanNumeralGenerator = function(number) {
  if (number >= 4000) {
    return "Roman numerals can only count to 3,999."
  };
  if (number === 0) {
    return "Nulla."
  };
  let romanNumeral = [];
  for (let i=(numeralKeys.length - 1); i >= 0 ; i --) {
    if (number < numeralKeys[i]) {
      continue;
    };
    while (number >= numeralKeys[i]) {
      romanNumeral.push([romanNumerals[numeralKeys[i]]]);
      number -= numeralKeys[i];
    };
  };
  return romanNumeral.join("");
};

//Front-end Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#romanInput").val();

    $("#romanResult").text(romanNumeralGenerator(Number(userInput)));
  });
});
