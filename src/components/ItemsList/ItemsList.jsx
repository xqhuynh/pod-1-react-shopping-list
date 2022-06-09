const ItemsList = ({ cartItem }) => {
  return (
    <>
      <h3>Cart List Testing</h3>
      <div className="boxContainer">
        {cartItem.map((groceryItem) => (
          <div className="box" key={groceryItem.id}>
            <div className="item">{groceryItem.item}</div>
            <div className="item">{groceryItem.quantity} {groceryItem.unit}</div>
            <button className="buyRemove">Buy</button>
            <button className="buyRemove">Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemsList;
