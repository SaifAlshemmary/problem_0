function whereIsMyFood(fridge, item) {

    fridge = ["Milk", "Banana", "Apple", "Bread"];
    item = "Banana";

    for (let i = 0; i < fridge.length; i++) {
        if (fridge.includes(item)) {
            return `It Is Available.`
        } else {
            return `Sorry It Is Not Available.`
        }
    }
}

let result = whereIsMyFood();

console.log(result);