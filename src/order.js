function takeOrder(orders, deliveryArray) {
  if (deliveryArray.length < 3) {
    deliveryArray.push(orders);
    return deliveryArray;
  }else{
    return deliveryArray;
  }
};

function refundOrder(orderNumber, deliveryOrders) {
  deliveryOrders.splice(orderNumber - 1, 1);
    return deliveryOrders;
};

function listItems(deliveryOrders) {
  var items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(', ');
};

function searchOrder(deliveryOrders, item) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === item) {
      return true;
  }else if (deliveryOrders[1].item === item) {
      return true;
  }else{
      return false;
    }
  }
};
// Need to refactor this to not be hard coded but feeling very stuck!!







module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
