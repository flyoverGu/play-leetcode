/**
 *  * @param {string} s
 *   * @param {number} nRows
 *    * @returns {string}
 *     */
var convert = function(s, nRows) {
    if (nRows == 1) return s;
    
    var res = '',
        n = 2 * nRows - 2;

    for(var y = 0; y < nRows; y ++){
        
        if (y === 0 || y === nRows - 1){
            var index = y;
            while(true){
                var c = s[index];
                if (!c) break;
                res += c;
                index += n;
            }
        } else {
            var flag = 1,
                index = y;
            while(true){
                var c = s[index];
                if (!c) break;
                res += c;
                if(flag){
                    index += (n-2*y);
                } else {
                    index += 2*y;
                }
                flag ^= 1;
            }
        }
    }
    return res;

}
console.log(convert('PAYPALISHIRING', 3));
console.log(convert('ioxjpkcpdekyazevyzxudsirvddoxmptaodryfhdltcmuijsigolaxevcimbwduwrzqrhxvssxgmhpgpxvdyujvwrhzpktmdvcvcbquvpbhwsposktsecncwxbljxznsdiugaqbprknmabekwwrzltxixiuwihonrkutaviuixgibkuxinythvcgewcofsbycxrctbydyelzqhzyvxsetwkzuonbgqziosmjvnmtrzvkiuidrcjkavlwjaxrrybhsqsndghwhegpyrvrvgcwcpsnqsfjqgqjykwbqfyzjeojxlbtsfpwujjkbqtuzldxxbznjxmuddedqhwioneiwqvygqufezdbacrlbfggkmjbvfjjsqtrgormhlulkxombfyengkxuwypdkyyarpiiiwptqcdnsrqypunxfkrdlggvggxaxhifdzyuddjvvcvkwikdvbggkpbqvyqvfaakzzgecsazuxmqgwwbxchhtkarkqmrrmbsnixsczrwwdoebkfzpoikyibkbpbuedmrnllpkfnjkbnmovnfjxpkitwjiydmdrgqdthpywyjzmvnhksshkepdbylbdaexiwabfrabqlaegqnskhzumpzpplqvnwsvsuwxlyabjchruujhclbqcbhtozobviypcwmoxoriqbanvluzyxpaawwovkrsvrhxotnnjhvcivpfjjfjgwkhtgxqsrjpiqnymclvlhxveobpxgzgclnxtmqndzdmrsmduybifadlpebomaurljoewerzfwnxoacjydrfeuqvbtjnteegnvmjbgljcygraicamvfspynsrwgnamvqjiblomuqlcjnkloygvsytfqneycglxwwfyhtkdmxhvlujbspwlnqsefwchdpezmmzvfkbtjirwcaxxpukfmcltznaefgdtsdqaprvacmxemubeoljcquvpjxvqeajwfcyutuvvgscv', 918));







//  0      10
//  1     9 11
//  2    8  12
//  3  7    13
//  4 6
//  5

