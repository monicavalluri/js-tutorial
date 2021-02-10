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

let favFruits = ['apple', 'mango', 'avocado'];
let fruits;
let groceries = {
    fruits: fruits,
    rice: 'basmati',
    polyBags: 2
}
groceries.fruits = 'banana';
let anotherObject = new Object();
anotherObject = {...groceries};
anotherObject['test'] = 'some other value'
console.log(groceries)
console.log(anotherObject)
// console.log(favFruits.indexOf('banana'))

let showFruits = () => {
    document.getElementById('fruits').innerText = favFruits;
}

let addBanana = () => {
    console.log('before push',favFruits)
    if(favFruits.indexOf('banana') === -1) {
        favFruits.push('banana');
        console.log('after push',favFruits)
    }
    // showFruits();
    console.log('add banana', favFruits)
}

//splice and slice
let spliceArray = ["apple", "mango", "avocado"]
// To insert an element between apple and mango
spliceArray.splice(1,0,'banana')

/**
 * push and pop
 * push will add an element at the end of the array
 * pop will remove the element at the end of the array
 *  */
