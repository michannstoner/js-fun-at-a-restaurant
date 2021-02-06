function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem;
};


function addIngredients(newIngredient, ingredients) {
  if (ingredients.includes(newIngredient)) {
    return ingredients;
  }else {
    ingredients.push(newIngredient);
    return ingredients;
    }
  };


  function formatPrice(initialPrice) {
     formattedPrice = `$${initialPrice}`;
     return formattedPrice;
  };

  function decreasePrice(initialPrice) {
    decreasedPrice = initialPrice * .9;
    return decreasedPrice;
  };

  function createRecipe(title, ingredients, type) {
      // recipe = {
      //   title: title,
      //   ingredients: ingredients,
      //   type: type,
      // }
      // return recipe;
      return {
        title,
        ingredients,
        type,
      }
  };








module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
