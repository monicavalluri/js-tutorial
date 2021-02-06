function add(a, b) {
    if(a === undefined && b === undefined){
        console.log('this block is executed')
        a = 5;
        b = 6;
    } else if(b === undefined) {
        b = 6;
    } else if(a === undefined) {
        a = 6;
    }
    console.log("test is called " + (a +b));
}
add(2);

// var test2 = function() {
//     console.log("test2 is called");
// }

// var test2 = function() {
//     console.log("new test2 is called");
// }

// test2();

// var i =10;
// console.log(i)

// let test = () => {
//     console.log("es6")
// }

// test();
const test = 'hello'
let test2 = (a = 5, b = 6) => {
    console.log(`${test}, test2 is called ${a + b}`);
    alert(a+b);
}

// test2(2,2);

for(var a = 5; a >1; a--) {
    console.log(a);
}
console.log('a', a);