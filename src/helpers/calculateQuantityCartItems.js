const calculateQuantityCartItems = (selectedProducts) => {
  return selectedProducts.reduce((quantityCardItems, currentCartItem) => {
    return quantityCardItems += currentCartItem.quantity;
  }, 0);
}

export default calculateQuantityCartItems;