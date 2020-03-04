function isIsogram(str) {
    let modifiedStr = str.split(" ").join("").toLowerCase();

    let counter = {};

    for (i=0; i < modifiedStr.length; i++) {
        if (counter[modifiedStr[i]] === undefined) {
            counter[modifiedStr[i]] = 1;
        } else {
            counter[modifiedStr[i]] += 1;
        }
    }

    let values = Object.values(counter);
    return values.every(value => value === 1);
}

isIsogram("Hey you there");

//same problem with Set

function isIsogram(str) {
    let transformedStr = str.split(" ").join("").toLowerCase();
    let setFromString = new Set(transformedStr);
    return transformedStr.length === setFromString.size;
}
isIsogram("Hey you ");