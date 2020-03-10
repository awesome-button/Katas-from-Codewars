function narcissistic(value) {
    const digits = Array.from(String(value));
    return value === digits.reduce((sum, digit) => sum + Math.pow(digit, digits.length), 0);
}

narcissistic(12);