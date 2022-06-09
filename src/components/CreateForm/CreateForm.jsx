import React, { useState } from 'react';

const CreateForm = ({ addNewItem} ) => {
    // Create useState for inputs: item, quantity, unit
    const [newItem, setNewItem] = useState('');
    const [newQuantity, setNewQuantity] = useState('');
    const [newUnit, setNewUnit] = useState('');

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

        // Clear input fields
        setNewItem('');
        setNewQuantity('');
        setNewUnit('');
        // Pass new item to GET item
        addNewItem(newItemsInput)
    }

    return (
        // On submit to handle 'save' click event
        <form onSubmit={onSaveSubmit}>
            <h2>Add an Item</h2> 
            <input onChange={event => setNewItem(event.target.value)} type="text" placeholder='item' />
            <input onChange={event=> setNewQuantity(event.target.value)} type="number" placeholder='quantity' />
            <input onChange={event => setNewUnit(event.target.value)} type="text" placeholder='unit' />
            <button type="submit">Save</button>
        </form>
    )
}

export default CreateForm;

