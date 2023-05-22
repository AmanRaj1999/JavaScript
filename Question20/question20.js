// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

// Add 'Meat' in the beginning if not already added
if (!shoppingCart.includes("Meat")) {
  shoppingCart.unshift("Meat");
}

// Add 'Sugar' at the end if not already added
if (!shoppingCart.includes("Sugar")) {
  shoppingCart.push("Sugar");
}

// Remove 'Honey' from the shopping cart
const honeyIndex = shoppingCart.indexOf("Honey");
if (honeyIndex !== -1) {
  shoppingCart.splice(honeyIndex, 1);
}

// Modify 'Tea' to 'Green Tea'
const teaIndex = shoppingCart.indexOf("Tea");
if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}

console.log(shoppingCart);

//expected output : [ 'Meat', 'Milk', 'Coffee', 'Green Tea', 'Sugar' ]
