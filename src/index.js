module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    n = n.toString();
    let result = "";
    let i = 0;
    while (i < n.length) {
        result = `${n[i]}${result}`;
        i = i + 1;
    }
    return result;
};
