/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var list = s.split(' ');
    while(list.length > 0 && !list[list.length - 1]) {
        list.pop();
    }
    if (list.length > 0) {
        return list[list.length - 1].length;
    }
    return 0;
};

console.log(lengthOfLastWord('a '));
console.log(lengthOfLastWord('Hello World'));
