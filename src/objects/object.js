const priceMap = {
  'mango' : 2,
  'orange' : 4,
  'apple' : 3,
  'banana' : 1
}
let calculateBill = () => {
  let inputs = document.getElementsByClassName('fruit');
  // let totalCost = 0;
  // for(let i=0; i<inputs.length; i++){
  //   let inputEl = inputs[i];
  //   console.log(inputEl);
  //   let fruit = inputEl.getAttribute('name');
  //   let quantity = inputEl.value;
  //   totalCost += calculatePrice(priceMap[fruit], quantity)
  // }
  let totalCost = [].slice.call(inputs).map(input=>{
    let fruit = input.getAttribute('name');
    let quantity = (isNaN(parseInt(input.value))) ? 0 : input.value; //ternary operator
    return calculatePrice(priceMap[fruit], quantity)
  }).reduce((total,price)=> total + price)
  document.getElementById('bold').innerText = totalCost; 
}

let calculatePrice = (price, quantity) => parseInt(price) * parseInt(quantity);