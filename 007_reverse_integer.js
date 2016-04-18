var reverse = function(x) {
    var fu = 1;
    if(x < 0){
        fu = -1;
        x *= fu;
    }      

    var array = (x+'').split(''),
        res = '';
    for(var len = array.length, index = len; index --;){
        res += array[index];
    }
    var n = Number(res) * fu;
    if (n > 1000000003) return 0;
    if (n < -4294967296) return 0;
    return n ;
};

console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(3847384123));
console.log(reverse(-3897123));
console.log(reverse(1534236469));
