import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
// import Auth from "../utils/auth";
import { ADD_PRODUCT } from "../utils/mutations";
import { QUERY_ALL_PRODUCTS } from "../utils/queries";
import background from "../assets/img/gametradez.gif";

function Users(props) {
  const [productz, setText] = useState('');
  // const [productzCount, setCharacterCount] = useState(0);
  const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {
      try {
        // could potentially not exist yet, so wrap in a try...catch
        const { products } = cache.readQuery({ query: QUERY_ALL_PRODUCTS });
        cache.writeQuery({
          query: QUERY_ALL_PRODUCTS,
          data: { products: [addProduct, ...products] }
        });
      } catch (e) {
        console.error(e);
      }
    }
  });

  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setText(event.target.value);
      // setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
  
    try {
      // add thought to database
      await addProduct({
        variables: { productz }
      });
  
      // clear form value
      setText('');
      // setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <div style={{ backgroundImage: `url(${background})` }}>
      <p id="maintext">Post You Stuff for Sale Here!</p>

      <div className="container my-1">
          <form onSubmit={handleFormSubmit} className="register-container">
          <div className="flex-row space-between my-2">
            <label htmlFor="">Title:</label>
            <input
              placeholder="Title"
              name="productTitle"
              type="productTitle"
              id="productTitle"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="price">Price:</label>
            <input placeholder="$1.00" name="price" type="price" id="price" />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="quantity">Quantity:</label>
            <input
              placeholder="1"
              name="quantity"
              type="quantity"
              id="quantity"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="productDescription">Description:</label>
            <textarea
              placeholder="This is my product description"
              name="productDescription"
              type="productDescription"
              id="productDescription"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row flex-end">
            <button type="submit">Submit</button>
          </div>
        </form>
        </div>
    </div>
  );
}

export default Users;