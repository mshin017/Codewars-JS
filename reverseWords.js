//* Complete the function that accepts a string parameter, and reverses each word in the string. 
//* All spaces in the string should be retained.
//* EX: "This is an example!" --> "sihT si na !elpmaxe"
//* "double  spaces" --> "elboud  secaps"

function reverseWords(str) {
    var i = str.length, o = '';
    while (i--) o += str[i];
    return o;
} //* this function only passes test2 -> thus does not incoporate spaces

function reverseWords(str){
    return str.split(' ').map(function(word){
        return word.split('').reverse().join('');
      }).join(' ');
}

function reverseWords(str){
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}


Test.it('Tests', _ => {
    Test.expect(reverseWords('The quick brown fox jumps over the lazy dog.') === 'ehT kciuq nworb xof spmuj revo eht yzal .god');
    Test.expect(reverseWords('apple') === 'elppa');
    Test.expect(reverseWords('a b c d') === 'a b c d');
    Test.expect(reverseWords('double  spaced  words') === 'elbuod  decaps  sdrow');
  });