/**
 * loop over longer string
 * loop over shorter string
 * if the character don't match break out inner loop
 * if character do match , keep going
 * if you complete the inner loop and find a match increment the count of matches
 */

function searchString(longStr, targ) {
    let matches = 0;

    for (let i = 0; i < longStr.length; i++) {
        for (let j = 0; j < targ.length; j++) {
            if (longStr[j + i] !== targ[j]) break;
            if (j === targ.length - 1) matches++;
        }
    }

    console.log(matches);
}

searchString('wowomgwomg', 'omg');
searchString('gfgfdgdfdfgdfg', 'omg');
searchString('hello, its me, hello', 'he');
