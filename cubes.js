function findNb(m) {
    let sum = 0;
    let num = -1;
    for (let i = 1; sum < m; i++) {
        sum += Math.pow(i, 3);
        if (sum === m) num = i;
    }
    return num;
}
findNb(100);


//refactored
function findNb(m) {
    let sum = 0;
    let counter = 0;
    for (let i = 1; sum < m; i++) {
        sum += Math.pow(i, 3);
        counter++;
    }
    return (sum === m) ? counter : -1;
}