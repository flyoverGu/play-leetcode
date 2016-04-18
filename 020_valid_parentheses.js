var isValid = function(str) {
    var m =  {
        '(' : 1,
        ')' : -1, 
        '{' : 2,
        '}' : -2,
        '[' : 3,
        ']' : -3
    }

    var stash = [];
    for (var i in str) {
        var c = m[str[i]];
        var s = stash.pop(); 
        s = s ? s : 0;
        if (c + s) {
            if (s) {
                stash.push(s);
            }
            stash.push(c);
        } 
        console.log(c, s, stash)
    }
    console.log(stash)

    if (stash.length) {
        return false;
    } else {
        return true;
    }
}

isValid('(){}[]{[()]}');


