const ItemsList = ({ cartItem, purchaseItem, clearItem }) => {
  // Buy button event handler
//   const buyButtonHandler = () => {
    const handleBuy = (evt) => {
      evt.preventDefault()
      purchaseItem(evt.target.id)
      console.log('buy')
    }

    const handleRemove = (evt) => {
      evt.preventDefault()
      clearItem(evt.target.id)
      console.log('remove')
    }
//   }
  


  return (
    <>
      <h3>Cart List Testing</h3>
      <div className="boxContainer">
        {cartItem.map((groceryItem) => (
          <div className="box" key={groceryItem.id}>
            <div className="item">{groceryItem.item}</div>
            <div className="item">{groceryItem.quantity} {groceryItem.unit}</div>
            <div>
            <button id={groceryItem.id} onClick={handleBuy}>Purchased</button>
            <button id={groceryItem.id} onClick={handleRemove}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
