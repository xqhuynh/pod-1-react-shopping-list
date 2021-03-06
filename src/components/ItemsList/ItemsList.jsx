const ItemsList = ({ cartItem, purchaseItem, clearItem }) => {
  // Buy button event handler
  //   const buyButtonHandler = () => {
  const handleBuy = (evt) => {
    evt.preventDefault();
    purchaseItem(evt.target.id);
    console.log("buy");
  };

  const handleRemove = (evt) => {
    evt.preventDefault();
    clearItem(evt.target.id);
    console.log("remove");
  };

  return (
    <div className="boxContainer">
      {cartItem.map((groceryItem) => (
        <div className="box" key={groceryItem.id}>
          <div className="item">{groceryItem.item}</div>
          <div className="item">
            {groceryItem.quantity} {groceryItem.unit}
          </div>
          {groceryItem.purchased ? (
            <h4>Purchased</h4>
          ) : (
            <div>
              <button
                className="buyRemove buttons"
                id={groceryItem.id}
                onClick={handleBuy}
              >
                Buy
              </button>
              <button
                className="buyRemove buttons"
                id={groceryItem.id}
                onClick={handleRemove}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
