function validateRecipe(fridge, ingredients) {
    return ingredients.every(function (element) {
        return fridge.includes(element)
    })
};

fridge = ['Milk', 'Flour', 'Sugar', 'Egg'];
ingredients = ['Milk', 'Sugar'];

let result = validateRecipe(fridge, ingredients);

console.log(result);