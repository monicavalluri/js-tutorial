let names = [];

let addNames = () => {
    let add = document.getElementById('add-name').value.toLowerCase();
    if(names.indexOf(add) === -1){
        names.push(add);
    }
    document.getElementById('show-result-list').innerText = names;
    document.getElementById('add-name').value = '';
}

let removeNames = () => {
    let remove = document.getElementById('remove-name').value.toLowerCase();
    if(names.indexOf(remove) !== -1) {
        names.splice(names.indexOf(remove), 1)
    } else{
        document.getElementById('error-msg').innerText = `Name ${remove} does not exist in the list`;
    }
    document.getElementById('show-result-list').innerText = names;
    document.getElementById('remove-name').value = '';
}

// Array methods

let prices = [1, 2, 3, 4];
let newArray = [];
console.log(prices)
for(let i=0; i<prices.length; i++) {
    let price = prices[i]
    let newPrice = price * 5;
    newArray.push(newPrice);
}
console.log(newArray)

// console.log(newArray)
// [5, 10, 15, 20]



// console.log('end of for')

// let bill = prices.map((number) => {
//     return number*5
// }).reduce((acc, newValue) => acc + newValue)
// console.log(bill, prices)

let newPrices = prices.map((price) => price*5)
let evenNumbers = prices.filter(price => price%2 === 0 )
console.log(newPrices, evenNumbers)

let priceMap = {
    'apple': 1,
    'mango': 2,
    'pear': 2,
    'bill': '',
    'pear': 4,
    'pear': 10
}
console.log('price of pear', priceMap['pear'])
price = [1, 2, 3, 4, 5]
fruits= ['apple', 'mango', 'pear']

let num = 1;
for(let i in priceMap) {
    console.log(i, priceMap[i])
}

console.log(Object.keys(priceMap).map(fruit => 
    priceMap[fruit]))

const array1 = [1, 2, 3]
const array2 = [4, 5, 6, 8]

for(let i=0; i < array1.length; i++) {
    for(let j=0; j < array2.length; j++) {
        console.log(i, j)
    }
}
console.log("=========================================")

/**
 * 0,0
 * 0,1
 * 0,2
 * 1,0
 * 1,1
 * 1,2
 * 2,0
 * 2,1
 * 2,2
 */