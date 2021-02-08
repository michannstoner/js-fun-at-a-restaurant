function createRestaurant(restaurantName) {
  restaurantName = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
  return restaurantName;
};


function addMenuItem(restaurant, item) {
  var correctMenu = item.type
  if (!restaurant.menus[correctMenu].includes(item))
  restaurant.menus[correctMenu].push(item);
};


function removeMenuItem(restaurant, item, type) {
  if (restaurant.menus[type].length) {
    for (var i = 0; i < restaurant.menus[type].length; i++) {
      if (restaurant.menus[type][i].name === item){
        restaurant.menus[type].splice(i, 1)
        return `No one is eating our ${item} - it has been removed from the ${type} menu!`
      }else {
        return `Sorry, we don't sell ${item}, try adding a new recipe!`
      }
    }
  }else {
    return `Sorry, we don't sell ${item}, try adding a new recipe!`
  }
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
