//business end

var result = [];

function divisibleBy(start) {
  if (start % 15 === 0) {
    return "ping-pong";
  } else if (start % 5 === 0) {
    return "pong";
  } else if (start % 3 === 0) {
    return "ping";
  } else {
    return start;
  }
}

function arrayList(start) {
  for (var i=1; i<=start; ++i) {
    result.push(divisibleBy(i));
  }
}

$(document).ready(function() {
  $("form#pingpong").submit(function(event) {
      event.preventDefault();

  var start = parseInt($("input#start").val());
  console.log(start);
  result = [];

  console.log(result);

  arrayList(start);


  // works but very messy with business and ui separation

  // var result = [];
  // for (var i = 0; i<start+1; ++i) result.push(i)
  // console.log(result);
  // var result2 = result
  //
  // var nth = 3;
  // var replaceWith = "ping"
  // for (var j = nth; j < result2.length-1; j+=nth) {
  // 	result2[j] = replaceWith;
  // }
  //
  // var fifth = 5;
  // var replaceWith = "pong"
  // for (var k = fifth; k < result2.length-1; k+=fifth) {
  //   result2[k] = replaceWith;
  // }
  //
  // var fifteenth = 15;
  // var replaceWith = "ping-pong"
  // for (var m = fifteenth; m < result2.length; m+=fifteenth) {
  //   result2[m] = replaceWith;
  // }

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
