import React, { useState } from 'react';

const CreateForm = () => {
    // Create useState for inputs: item, quantity, unit
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');
    const [newPurchased, setNewPurchased] = useState('false');

    // Function to handle 'Save' click event
    const onSaveSubmit = (evt) => {
        // Prevent browser refresh
        evt.preventDefault();
        // Create object to store as data
        const newItemsInput = {
            item: newItem,
            quantity: newQuantity,
            unit: newUnit,
        };
    
    // Pass new item to GET item
    fetchCart(newItemsInput)
    
    }

    // Clear input fields
    setNewItem('');
    setNewQuantity('');
    setNewUnit('');
    setNewPurchased('false');
    return (
        // On submit to handle 'save' click event
        <form onSubmit={onSaveSubmit}>
            <h2>Add an Item</h2> 
            <input value={newItem} onChange={(event) => setNewItem(event.target.value)} type="text" placeholder='item' />
            <input  value={newQuantity} onChange={(event) => setNewItem(event.target.value)} type="number" placeholder='quantity;' />
            <input value={newPurchased} onChange={(event) => setNewItem(event.target.value)} type="text" placeholder='unit' />
            <button>Save</button>
        </form>
    )
}

export default CreateForm;

