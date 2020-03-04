function nines(n) {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        i = (i).toString();
        let numbers = i.split('');
        if (numbers.includes('9')) counter++;
    }
    return counter;
  }

  test(1n,0n);
  test(10n,1n);
  test(100n,19n);
  test(1000n,271n);
  test(3950n,1035n);

function nines(n) {
    for (let i = 0; i <= n; i++) {
        i = (i).toString();
        let numbers = i.split('');
        if (numbers.includes('9')) counter++;
    }

}