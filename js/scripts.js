$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
      event.preventDefault();

  var start = parseInt($("input#start").val());

console.log(start)

  var result = [];
  for (var i = 0; i<start+1; ++i) result.push(i)
  console.log(result);
  var result2 = result

  var nth = 3;
  var replaceWith = "ping"
  for (var j = nth; j < result2.length-1; j+=nth) {
  	result2[j] = replaceWith;
  }

  var nth = 5;
  var replaceWith = "pong"
  for (var k = nth; k < result2.length-1; k+=nth) {
    result2[k] = replaceWith;
  }

  var nth = 15;
  var replaceWith = "ping-pong"
  for (var m = nth; m < result2.length; m+=nth) {
    result2[m] = replaceWith;
  }

  $('#result').text(result2)

    // function range (start, end) {
    //
    //   var array = new Array();
    //   for(var i = start; i < end+1; i++);
    //   {
    //     array.push(i);
    //   };
    //   return [array];
    // };

  });
});
