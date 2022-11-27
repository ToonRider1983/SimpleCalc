// The 'WebCalc' project is a simple calculator web application using HTML5, CSS and JavaScript.   
let Number1 = 0.0, Number2 = 0.0  // This is a variable declaration with assign default value. 
let charOperator                  // This is a variable declaration with no assigned default value yet.

// This is the original function pattern in JS.
function setOperator(Operator) {
  charOperator = Operator
  document.getElementById('txtOperator').value = Operator
}

/*
  In the line 15 - 22 is calculation functions.
*/
// This is the arrow function pattern in JS with single-line.
Add=()=> { // 'Number(Number1)' is casting 'Number1' var type from 'int' or 'any' to 'int'.
  return Number(Number1) + Number(Number2) 
}   

// This is the arrow function pattern in JS with single-line.
Minus=()=> { return Number1 - Number2 }
Multiple=()=> { return Number1 * Number2 }
Divide=()=> { return Number1 / Number2 }

// This is the arrow function pattern in JS with multi-line.
ResetAll=()=> { 
  Number1 = Number2 = 0.0
  charOperator = ""

  document.getElementById('numInput1').value
    = document.getElementById('numInput2').value = NaN // Use 'NaN' or "" to clear all values in 'numInput1' and 'numInput2'.
  
  document.getElementById('numAnswer').value = 0 // Reset the value in 'numAnswer' to zero.
  document.getElementById('txtOperator').value = ""
}

// This is the arrow function pattern in JS.
Calculation=(NumFirst, NumSecond)=> {
  Number1 = NumFirst  // This is storing a value from 'NumFirst' parameter to 'Number1' variable.
  Number2 = NumSecond // This is storing a value from 'NumSecond' parameter to 'Number2' variable.

  document.getElementById('numAnswer').value = 0

  switch(charOperator) {
    case '+' : document.getElementById('numAnswer').value = Add().toFixed(2); break 
    // Use the 'toFixed(2)' function to display point float 2 digits like 4253.75 or 3.52

    case '-' : document.getElementById('numAnswer').value = Minus().toFixed(2); break
    case '*' : document.getElementById('numAnswer').value = Multiple().toFixed(2); break
    case '/' : document.getElementById('numAnswer').value = Divide().toFixed(2); break
  }
}
