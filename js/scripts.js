
$(document).ready(function() {
  $("form#sides").submit(function(event) {
    var a = parseInt($("input#sideA").val());
    var b = parseInt($("input#sideB").val());
    var c = parseInt($("input#sideC").val());

    if ( a === b && a === c) {
      //return an equilateral
      $("#type").text("Equilateral"); 
    }
    else if ( a + b <= c 
            || c + b <= a 
            || a + c <= b) {
      // return NOT a triangle
      $("#type").text("NOT a triangle");
    }
    else if (a === b && a !== c || 
             b === c && b !== a || 
             c === a && c !== b) {
      // return Isosceles
      $("#type").text("Isosceles");
    }
    else {
      // return Scalene
      $("#type").text("Scalene");
    }
    
    event.preventDefault();
  });
});
    
    
 

// if ( sideA === sideB && sideA === sideC) {
//   //return an equilateral
// }
// else if (sideA === sideB && sideA !== sideC) {
//   // return Isosceles
// }
// else if (sideA + sideB <= sideC) {
//   // return NOT a triangle
// }
// else {
//   // return Scalene
// }

