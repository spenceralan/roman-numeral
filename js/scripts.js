//Back-end Logic:
var romanNumerals = {
  1: "I",
  5: "V",
  10: "X",
  50: "L",
  100: "C",
  500: "D",
  1000: "M",
};
//Front-end Logic:
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var userInput = $("#romanInput").val();

    $("#romanResult").text(romanNumerals[userInput]);
  });
});
