// Which worder would the following console log // 
function foo() {
    setTimeout(() => {
        console.log('a');
    }, 1000);
    setTimeout(() => {
        console.log('b');
    }, 0);
    console.log('c');
    setTimeout(() => {
        console.log('d');
    }, 1000);
}

foo();
//bcad => wrong 
// cbad 