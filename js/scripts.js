//Back-end Logic:
var romanNumerals = {
  number1: "I",
  number5: "V",
  number10: "X",
  number50: "L",
  number100: "C",
  number500: "D",
  number1000: "M",
};
//Front-end Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#romanInput").val();

    $("#romanResult").text(romanNumerals.number1);
  });
});
