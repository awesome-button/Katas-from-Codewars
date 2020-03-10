function digital_root(n) {
    if (String(n).length === 1) return n;
    const digits = Array.from(String(n));

    const sum = digits.reduce((sum, digit) => parseInt(sum) + parseInt(digit));
    return digital_root(sum);
}

digital_root(1347);