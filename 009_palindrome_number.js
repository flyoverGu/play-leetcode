/**
 *  * @param {number} x
 *   * @return {boolean}
 *    */
var isPalindrome = function(x) {
    if (x < 0 || (x % 10 == 0 && x != 0)) {
        return false;
    }
    var sum = 0;
    while (sum < x) {
        sum = 10 * sum + x % 10;
        x = parseInt(x / 10);
    }
    return x == sum || x == parseInt(sum / 10);
};


isPalindrome(123454321);
