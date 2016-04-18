var atoi = function(str) {
    var n = parseInt(str);
    if (isNaN(n)) return 0;
    if (n >= 2147483647) return 2147483647;
    if (n <= -2147483648) return -2147483648;
    return n;
};
