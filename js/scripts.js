$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
      event.preventDefault();

  var numberInput = parseInt($("input#numbers").val());
  var result = arrayReturn

  function range (numberInput) {
    // create an array, from 0 to input, including input
    var m = numberInput+1;
    var arrayReturn = Array(m);
    for (var i = 0; i < m; i++) { arrayReturn[i] = i; }
    return arrayReturn

  console.log( range(10) ) //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

  //
  // var outputPing = function(numberInput) {
  //   if (numberInput % 3 === 0)
  //     else if (math.range(0, numberInput, true);
  //
  // }
  // var outputPong = function(numberInput) {
  //   if (numberInput % 5 === 0)
  //
  // }
  // for (var i = 0; index < numberInput; index +=1;)
    };
  });
});
