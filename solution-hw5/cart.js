const cart = []

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

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

const allPack = {
    "1" : 1,
    "3": 3,
    "6":5,
    "12":10
}

const allGlazings = {
        "Keep original" : 0.0,
        "Sugar milk" : 0.0,
        "Vanilla milk" : 0.50,
        "Double chocolate" : 1.50
}

const rollOne = new Roll(
    'Original',
    'Sugar Milk',
    '1',
    '$2.49',
)

const rollTwo = new Roll(
    'Walnut',
    'Vanilla Milk',
    '12',
    '$39.90',
)

const rollThree = new Roll(
    'Raisin',
    'Sugar Milk',
    '3',
    '$8.97',
)

const rollFour = new Roll(
    'Apple',
    'Original',
    '3',
    '$10.47',
)

function calculateCost(roll) {

    const basePrice = rolls[roll.type].basePrice

    const packPrice = allPack[roll.size]

    const glazingPrice = allGlazing[roll.glazing]

    return (basePrice + glazingPrice) * packPrice 
}

function addShoppingCart(roll) {
    console.log("add shooppingsx")
    cart.push(roll);
    addElement(roll)
}

addShoppingCart(rollOne);
addShoppingCart(rollTwo);
addShoppingCart(rollThree);
addShoppingCart(rollFour);

function addElement(roll) {    
    const temp = document.getElementsByTagName("template")[0];
    console.log(temp.content)
    const cartDisplay = temp.content.querySelector("div");

    const description = cartDisplay.content.querySelector("div");
    const cinRoll = description.content.querySelector("div")
    const img = cinRoll.content.querySelector("img")

    img.src = rolls[roll.type].imageFile

    // const type = this.element.querySelector('.cinnamon-roll-pic-3');
    // const glazing = this.element.querySelector('.glazing');
    // const size = this.element.querySelector('.pack');
    // const basePrice = this.element.querySelector('.notecard-footer');
    // document.getElementById("price").innerHTML.slice(1) * 1

    // noteImageElement.src = this.noteImageURL;
    // noteTitleElement.innerText = this.noteTitle;
    // noteBodyElement.innerText = this.noteBody;
    // noteFooterElement.innerText = this.noteFooter;
}