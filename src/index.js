module.exports = function reverse(n) {
    let result = 0;
    if (n < 0) {
        n = Math.abs(n);
    }
    if (n % 10 === 0) {
        n = n / 10;
    }
    while (n) {
        result = result * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return result;
};
