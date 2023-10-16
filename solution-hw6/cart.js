// cart set
let cart = new Set()

// roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// pulls cart from local storage and converts it to a set
function rollLocalStorage() {
    const cartJson = localStorage.getItem("cart");
    
    if (cartJson !== null) {
        const cartArray = JSON.parse(cartJson);
        cart = new Set(cartArray);
    }
    else {
        cart = new Set();
    }
}

// dictionary to track changing image file and each roll's base price from hw4
const imageRolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
}

// dictionary to track pack size with price change
const allPack = {
    "1":1,
    "3":3,
    "6":5,
    "12":10
}

// dictionary to track glasing with price change
const allGlazing = {
    "Keep original" : 0.0,
    "Sugar milk" : 0.0,
    "Vanilla milk" : 0.50,
    "Double chocolate" : 1.50
}

// dynamically calculates the cost of each roll element being created
function calculateCost(roll) {

    const basePrice = imageRolls[roll.type].basePrice
    const packPrice = allPack[roll.size]
    const glazingPrice = allGlazing[roll.glazing]

    return (basePrice + glazingPrice) * packPrice 
}

// calculates the total price of all rolls in the cart
function totalPriceFun() {
    let total = 0
    for (let roll of cart) {
        total += calculateCost(roll);
    }
    return total.toFixed(2)
}

// displays the total price at the bottom of the page
function displayTotalPrice() {
    const priceContainer = document.getElementById("final-price");
    let totalPrice = document.createElement("p");
    totalPrice.className = "final-price";
    totalPrice.textContent = `$${totalPriceFun()}`; 
    priceContainer.appendChild(totalPrice);
}

// displays all elements in the cart
function displayCart(cart) {       
    for (let roll of cart) {
        createRoll(roll)   
    }
} 

// creates each roll to be displayed in the cart
function createRoll(roll) {
    // container for all elements
    const container = document.getElementById("cart-container"); 

        // container for each cart item and its all elements
        let cartItem = document.createElement("div");
        cartItem.className = "cart-display";

        // container for roll details
        let rollDetails = document.createElement("div");
        rollDetails.className = "item-descriptor";

        // container for image and remove button
        let imageContainer = document.createElement("div");
        imageContainer.className = "cinnamon-roll-description";
        
        // creates image
        let img = document.createElement("img");
        img.src = "images/" + imageRolls[roll.type]["imageFile"];
        img.alt = roll.type;
        img.className = "cinnamon-roll-pic-3";

        // creates roll name
        let itemType = document.createElement("p");
        itemType.textContent = roll.type + " Cinnamon Roll";

        // creates glazing information
        let glazing = document.createElement("p");
        glazing.textContent = "Glazing: " + roll.glazing;

        // creates pack size information
        let size = document.createElement("p");
        size.textContent = "Pack Size: " + roll.size; 

        // calculates each roll's individual price
        let individualPrice = document.createElement("p");
        individualPrice.className = "price-1";
        individualPrice.textContent = `$${calculateCost(roll).toFixed(2)}`;

        // creates remove button and calls remove function when it is clicked
        let remove = document.createElement("p");
        remove.textContent = "Remove"; 
        remove.addEventListener('click', () => {
            removeClickHandler(roll);
        })

        // appends item name, glazing type, and pack size to the container for roll details
        rollDetails.appendChild(itemType);
        rollDetails.appendChild(glazing);
        rollDetails.appendChild(size);
        
        // appends correct image link and remove button to the container for image and remove
        imageContainer.appendChild(img);
        imageContainer.appendChild(remove);

        // appends the three containers in flex for each roll
        cartItem.appendChild(imageContainer);
        cartItem.appendChild(rollDetails);
        cartItem.appendChild(individualPrice);

        // appends all roll information to the div container for the cart
        container.appendChild(cartItem);
}

// removes all roll information when remove is clicked and rerenders the cart
function removeClickHandler(roll) {
    cart.delete(roll)
    rerender(cart)
}

// recreates the cart without the deleted roll information and without the old total price
// converts set to array and stores the updated cart in local storage
function rerender(cart) {
    const cartArray = Array.from(cart);
    const cartJSON = JSON.stringify(cartArray);
    localStorage.setItem("cart", cartJSON);
    const container = document.getElementById("cart-container"); 
    container.innerHTML = '';
    const container2 = document.getElementById("final-price"); 
    container2.innerHTML = '';
    console.log(localStorage.getItem("cart"));
    displayCart(cart)
    displayTotalPrice()
}

// displays the cart and total price when page is rendered and updates local storage
rollLocalStorage()
displayCart(cart)
displayTotalPrice()

