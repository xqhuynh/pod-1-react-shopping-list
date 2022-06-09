import React from 'react';
import axios from 'axios'
import { useState, useEffect  } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';

// Import components
import CreateForm from '../CreateForm/CreateForm.jsx';




function App() {
    let [cartItem, setCartItem] = useState([]);
   
useEffect(()=> {
    fetchCart();
}, [])

const fetchCart = () =>{
    axios({
        method: 'GET', 
        url: '/cart'
    })
    .then((response)=>{
        setCartItem(response.data)
    })
    .catch(err =>{
        console.log('error in GET', err);
    })
};

const addNewItem = (newItemInput) =>{
    axios.post('/cart', newItemInput)
    .then(response => {
        console.log('In POST /cart', response);
        fetchCart();
    })
    .catch(err =>{
        alert('err adding item');
        console.log('err');
    });
}
 const deleteItem = () =>{
   const deleteItemID  = $(this).closest('tr')  
   console.log('in delete', deleteItemID)
   axios({
       method: 'DELETE', 
       url: `'/cart'/${deleteItemID}`

   })
   .then((response)=>{
   fetchCart();
})
.catch(err =>{
    console.log('error in delete', err);
})
 };


    return (
        <div className="App">
            <Header />
            <CreateForm 
             addNewItem={addNewItem}/>
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
    }

export default App;
