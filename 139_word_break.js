var wordBreak = function(s, dict) {
    var dp = [];
    var len = s.length;
    if (!dict.size) {return false;} 
    while(len--) {
        dp.push(false);
    }
    len = s.length;
    for (var i = 1; i <= len; i ++) {
        for (var j = i - 1; j >= 0; j --) {
            if (j == 0 || dp[j - 1]) {
                if (dict.has(s.slice(j, i))) {
                   dp[i - 1] = true; 
                   break;
                }
            }
        }
    }
    console.log(dp);
    return dp[len - 1];
}

wordBreak('leetcode', new Set(['leet', 'code']));
wordBreak('a', new Set(['a']));
