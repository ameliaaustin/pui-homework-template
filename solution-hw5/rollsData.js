const rolls = {
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

// cart array
const cart = []

// updating image and title information on product detail page
function loadInfo() {
        
    var imageRoll = document.getElementById("roll")
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    // getting correct roll info
    const rollType = params.get('roll');
    const rollInfo = rolls[rollType]

    // correct basePrice based on which roll was clicked
    const rollPrice = rollInfo["basePrice"]

    // updating the rollPrice
    document.getElementById("price").innerHTML = "$" + rollPrice

    // updating title to say the correct roll name
    var rollTitle = document.getElementById("title")
    rollTitle.innerHTML = rollType + " cinnamon roll"

    // updating the correct image link
    imageRoll.src = "images/" + rollInfo["imageFile"]
}

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

// adding instance to cart array
function addCart() {
    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);

    // changes element in the html based on roll information and reads from it
    const rollType = params.get('roll');
    const rollGlazing = document.getElementById("glazingOptions").options[document.getElementById("glazingOptions").selectedIndex].text
    const packSize = document.getElementById("packSizeOptions").options[document.getElementById("packSizeOptions").selectedIndex].text
    const price = document.getElementById("price").innerHTML.slice(1) * 1
    // creates that information into an element and pushes it into the cart array
    const roll = new Roll(rollType, rollGlazing, packSize, price)
    cart.push(roll);
    // prints roll information
    console.log(cart);
}
