$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
      event.preventDefault();

  var start = parseInt($("input#start").val());

console.log(start)

  var result = [];
  for (var i = 0; i<start+1; ++i) result.push(i)
  console.log(result);

  $('#result').text(result)

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
