const ItemsList = ({ cartItem }) => {
  // Buy button event handler
//   const buyButtonHandler = () => {
    
//   }

  return (
    <>
      <h3>Cart List Testing</h3>
      <div className="boxContainer">
        {cartItem.map((groceryItem) => (
          <div className="box" key={groceryItem.id}>
            <div className="item">{groceryItem.item}</div>
            <div className="item">{groceryItem.quantity} {groceryItem.unit}</div>
            {/* <div onSubmit={buyButtonHandler}>
              <button type="submit" className="buyRemove">Buy</button>
              <button type="submit" className="buyRemove">Remove</button>  
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
