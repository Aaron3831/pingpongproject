$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
    event.preventDefault();

  var numberInput = parseInt($("input#number").val());

  function range0 (n) {
    // create a array, from 0 to n, including n
    var m = n+1;
    var arr = Array(m);
    for (var ii = 0; ii < m; ii++) { arr[ii] = ii; };
    return arr;
  }
  console.log( range0(10) ); // [ 0, 1, 2, 3]
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
});
