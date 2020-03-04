var uniqueInOrder = function (iterable) {
    let array = Array.isArray(iterable) ? iterable : iterable.split('');
    let result = [];

    if (array.length <= 1) return array;

    array.forEach((item, index) => {
        if (array[index] !== array[index + 1]) {
            result.push(item);
        }
    })
    return result;
}

uniqueInOrder(['A', 'A']);

var uniqueInOrder = function (iterable) {
    return [...iterable].filter((item, index) => iterable[index] !== iterable[index + 1]);
}

uniqueInOrder(['A', 'A']);
