/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let NUM_OF_CHARS = 256
var isAnagram = function(s, t) {

    if(s.length !== t.length){
        return false
    }

    let count = new Array(NUM_OF_CHARS).fill(0)

    for(let i=0; i<s.length; i++){
        count[s[i].charCodeAt(0)]++
        count[t[i].charCodeAt(0)]--
    }

    for(let i=0; i<count.length; i++){
        if(count[i] !== 0){
            return false
        }
    }

    return true
};