import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../Header/Header.jsx";
import "./App.css";

// Import components
import CreateForm from "../CreateForm/CreateForm.jsx";
import ItemsList from "../ItemsList/ItemsList.jsx";

function App() {
  let [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    fetchCart();
  }, []);

  // GET route
  const fetchCart = () => {
    axios({
      method: "GET",
      url: "/cart",
    })
      .then((response) => {
        setCartItem(response.data);
        console.log('Items are: ', response.data);
      })
      .catch((err) => {
        console.log("error in GET", err);
      });
  };

  // POST route
  const addNewItem = (newItemInput) => {
    axios
      .post("/cart", newItemInput)
      .then((response) => {
        console.log("In POST /cart", response);
        fetchCart();
      })
      .catch((err) => {
        alert("err adding item");
        console.log("err");
      });
  };

  // DELETE route
  const deleteItem = () => {
    console.log("in delete");
    axios({
      method: "DELETE",
      url: "/cart",
    })
      .then((response) => {
        fetchCart();
      })
      .catch((err) => {
        console.log("error in delete", err);
      });
  };

  return (
    <div className="App">
      <Header />
      <CreateForm addNewItem={addNewItem} />
      <main>
        <p>Under Construction...</p>
        <ItemsList cartItem={cartItem} />
      </main>
    </div>
  );
}

export default App;
