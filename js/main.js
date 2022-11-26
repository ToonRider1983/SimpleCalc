
let Number1, Number2, Answer;
let Operator;

// This is 'Original Function' in JS.
function setAdd(_Operator) {
    Operator = _Operator;
}

Sum=() => {
    switch(Operator) {
        case '+' : Add(Number1, Number2);
    }
}

Add=(Num1, Num2) => {
    Answer = Number1 + Number2;
    return Answer;
}

console.log(Sum());