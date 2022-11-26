// Simple Calculator 
let Number1 = 0, Number2 = 0;
let charOperator = "";

// This is the original function pattern in JS.
function setOperator(Operator) {
  charOperator = Operator;
  document.getElementById('txtOperator').value = Operator;
}

// This is the arrow function pattern in JS.
Add=()=> { return Number1 + Number2; }
Minus=()=> { return Number1 - Number2; }
Multiple=()=> { return Number1 * Number2; }
Divide=()=> { return Number1 / Number2; }

// This is the arrow function pattern in JS.
ResetAll=()=> { 
  Number1 = Number2 = 0;
  charOperator = "";
  document.getElementById('numInput1').value
    = document.getElementById('numInput2').value
    = document.getElementById('numAnswer').value = 0;
  
  document.getElementById('txtOperator').value = "";
}

// This is the arrow function pattern in JS.
Calculation=(NumFirst, NumSecond)=> {
  Number1 = NumFirst;
  Number2 = NumSecond;

  document.getElementById('numAnswer').value = "0";

  switch(charOperator) {
    case '+' :  document.getElementById('numAnswer').value = Add(); break;
    case '-' :  document.getElementById('numAnswer').value = Minus(); break;
    case '*' :  document.getElementById('numAnswer').value = Multiple(); break;
    case '/' :  document.getElementById('numAnswer').value = Divide(); break;
  }

}
