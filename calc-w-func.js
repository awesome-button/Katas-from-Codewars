const helperFunc = function(digit) {
    return function(...operator) {
        return Math.floor(eval(`${digit} ${operator}`));
    }
}

const zero = helperFunc(0);
const one = helperFunc(1);
const two = helperFunc(2);
const three = helperFunc(3);
const four = helperFunc(4);
const five = helperFunc(5);
const six = helperFunc(6);
const seven = helperFunc(7);
const eight = helperFunc(8);
const nine = helperFunc(9);

function plus(number) { return (`+ ${number}`); }
function minus(number) { return (`- ${number}`); }
function times(number) { return (`* ${number}`); }
function dividedBy(number) { return (`/ ${number}`); }


//better solution, they say, fattar inte

const helperFunc = function(digit) {
    return function(operator) {
        return operator ? operator(digit) : digit;
    }
} 


const zero = helperFunc(0);
const one = helperFunc(1);
const two = helperFunc(2);
const three = helperFunc(3);
const four = helperFunc(4);
const five = helperFunc(5);
const six = helperFunc(6);
const seven = helperFunc(7);
const eight = helperFunc(8);
const nine = helperFunc(9);

function plus(right) { return function(left) { return left + right}; };
function minus(right) { return function(left) { return left - right}; };
function times(right) { return function(left) {return left * right}; };
function dividedBy(right) { return function(left) {return left / right}; };