var packPrice = 1
var glazingPrice = 0
var basePrice = 0

const allGlazings = [
    {
        name: "Keep original", 
        addOn: 0.0
    },
    {
        name: "Sugar milk", 
        addOn: 0.0
    },
    {
        name: "Vanilla milk", 
        addOn: 0.50
    },
    {
        name: "Double chocolate", 
        addOn: 1.50
    }
]

const allPack = [
    {
        name: "1", 
        value: 1
    },
    {
        name: "3", 
        value: 3
    },
    {
        name: "6", 
        value: 5
    },
    {
        name: "12", 
        value: 10
    }
]

function loadOptions() {
// glazing and pack options dynamically coded

    var selectGlazings = document.getElementById("glazingOptions")
    allGlazings.forEach((glazing, i) => {
        var opt = document.createElement("option")
        opt.value = i
        opt.innerHTML = glazing.name
        selectGlazings.appendChild(opt)
    })

    var selectPackSize = document.getElementById("packSizeOptions")
    allPack.forEach((pack, i) => {
        var opt = document.createElement("option")
        opt.value = i
        opt.innerHTML = pack.name
        selectPackSize.appendChild(opt)
    })

    basePrice = document.getElementById("price").innerHTML.slice(1) * 1

}

function glazingChange(glazing) {
    const priceChange = allGlazings[glazing.value].addOn;
    
    glazingPrice = priceChange;

    const newPrice = (basePrice + glazingPrice) * packPrice 

    document.getElementById("price").innerHTML = "$" + newPrice.toFixed(2)
}

function packChange(pack) {
    const priceChange = allPack[pack.value].value;
    
    packPrice = priceChange;

    const newPrice = (basePrice + glazingPrice) * packPrice;

    document.getElementById("price").innerHTML = "$" + newPrice.toFixed(2)
}
