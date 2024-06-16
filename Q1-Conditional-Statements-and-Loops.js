// Exploring Conditional Statements and Loops
// Task 1: Implement a conditional statement to check if a user is logged in before allowing them to add items to the cart.

isLogin = true
const products = {eggs:3.99,bacon: 2.99,pancakes:4.99};

let cart ={}

if (isLogin === true){
    console.log("welcome to the coding temple market what product are you looking for?");
} else {
    console.log("Im sorry you dont appear to be a member please login and we can assist you.");
}

// Task 2: Use a loop to display the list of available products to the user and add functionality for users to add products to their cart.

const productList = () => {for (key in products){console.log(key)}};

productList()


function addToCart(product, price){
    if (isLogin == true){
        cart[product] = price;
        console.log(cart)
    }
}

addToCart("eggs",products.eggs)
addToCart("bacon",products.bacon)

console.log(cart)

const cartTotal = () => {
    let total = 0
    const prices = Object.values(cart)
    for(let price of prices){
        total += price
    }
    return total
}
console.log(cartTotal())
// Task 3: Calculate the total cost of the items in the cart and display it to the user.


// Exploring Functions in JavaScript

//Task 1
let accountBalance = 0

const deposit = (amount) => {accountBalance += amount; console.log("current balance eqauls " + accountBalance)}

//Task 2

const withdrawal = (amount) => {
    if (amount <= accountBalance) {
        accountBalance -= amount;
        console.log("New balance is " + accountBalance);
    } else {
        console.log("Insufficient funds");
    }
}
// Task 3

const checkBalance = () => {console.log(accountBalance)}
