function iqTest(numbers) {
    let arr = numbers.split(" ");
    let even = arr.filter(num => num % 2 === 0);
    let uneven = arr.filter(num => !even.includes(num));

    return (even.length === 1) ?
        arr.findIndex(num => num == even[0]) + 1 :
        arr.findIndex(num => num == uneven[0]) + 1;

}

iqTest("3, 5, 9, 2");

let a = [3, 5, 4, 7];

a.reduce(function(acc, num, index) {
    return index});

a.findIndex(num => num % 2 === 0 )

[0, 1, 2, 3, 4].reduce(function (previousValue, currentValue, index, array) {
    console.log(index)
    return previousValue + currentValue;
});