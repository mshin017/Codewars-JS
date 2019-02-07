// determine if string is palindrome

//string.split('').reverse().join('')

var foo = 10+'20'
console.log(foo)

console.log(0.1 + 0.2 == 0.3)


str="i'm a lasagna hog"
console.log(str.split("").reverse().join(""))

function add(x) {
    return function(y) {
        return x + y;
    };
}
console.log(add(2)(5))

function addd(x,y){
    return x+y
}
console.log(addd(2,5))

// var foo = 'Hello';
// (function(){
//     var bar = 'World';
//     console.log(foo+bar)
// })();
// console.log(foo+bar)

var boo = [];
boo.push(1);
boo.push(2);
// console.log(boo.length)

console.log('one')
setTimeout(function(){
    console.log('two')
},0)
Promise.resolve().then(function(){
    console.log('three')
})
console.log('four')