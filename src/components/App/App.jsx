import React from 'react';
import axios from 'axios'
import { useState, useEffect  } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';


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

const addToCart = (newItem) =>{
    axios.post('/cart', newItem)
    .then(response=>{
        fetchCart();

    })
    .catch(err =>{
        alert('err adding guest');
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
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
    }

export default App;
