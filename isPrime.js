function isPrime(num) {
    if (num < 2) return false;
    if (num < 25) {
        for (let i = 2; i < 25; i++) {
            if (num % i === 0 && num !== i) return false;
        }
        return true;
    }
    
    for (let i = 5; i*i <= num; i += 6) {
        if (num % i === 0 || num % (i+2) === 0) return false;
    }
    return true;
}

function isPrime(num) {
    if (num < 2) return false;
    const l = Math.sqrt(num);
    for (let i = 2; i <= l; i++) {
        if (num % i === 0) return false;
    }
    return true;
}


isPrime(2);
isPrime(3);
isPrime(4);
isPrime(5);
isPrime(6);