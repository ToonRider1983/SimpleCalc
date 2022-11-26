
let Number1, Number2;
let Operator;

// This is 'Original Function' in JS.
function setOperator(_Operator) {
    Operator = _Operator;
}

Sum=() => {
    switch(Operator) {
        case '+' : return Add(Number1, Number2); break;
        
    }
}

Add=(Num1, Num2) => { return Number1 + Number2; }



console.log(Sum());
