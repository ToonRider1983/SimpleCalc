// Simple Calculator 
let Number1 = 0.0, Number2 = 0.0  // This is a variable declaration with assign default value. 
let charOperator                  // This is a variable declaration with no assigned default value yet.

// This is the original function pattern in JS.
function setOperator(Operator) {
  charOperator = Operator
  document.getElementById('txtOperator').value = Operator
}

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
    = document.getElementById('numInput2').value = NaN
  
  document.getElementById('numAnswer').value = 0 
  document.getElementById('txtOperator').value = ""
}

// This is the arrow function pattern in JS.
Calculation=(NumFirst, NumSecond)=> {
  Number1 = NumFirst  // This is storing a value from 'NumFirst' parameter to 'Number1' variable.
  Number2 = NumSecond // This is storing a value from 'NumSecond' parameter to 'Number2' variable.

  document.getElementById('numAnswer').value = 0

  switch(charOperator) {
    case '+' : document.getElementById('numAnswer').value = Add().toFixed(2); break
    case '-' : document.getElementById('numAnswer').value = Minus().toFixed(2); break
    case '*' : document.getElementById('numAnswer').value = Multiple().toFixed(2); break
    case '/' : document.getElementById('numAnswer').value = Divide().toFixed(2); break
  }
}
