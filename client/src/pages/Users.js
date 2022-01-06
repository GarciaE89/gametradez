import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PRODUCT } from "../utils/mutations";

function Users(props) {
  const [formState, setFormState] = useState("");
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //***************** ********************************/
    const productResponse = await addProduct({
      variables: {
        productTitle: formState.productTitle,
        price: formState.price,
        quantity: formState.quantity,
        productDescription: formState.productDescription,
      },
    });
    //***************** *******************************/
    console.log("hello");
    const newProduct = productResponse.data.addProduct.newProduct;

    addProduct(newProduct);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // console.log(formState.productTitle);
  // console.log(formState.price);
  // console.log(formState.quantity);
  // console.log(formState.productDescription);

  return (
    <div>
      <p id="maintext">Users</p>

      <div className="container my-1">
        <form onSubmit={handleFormSubmit} className="register-container">
          <div className="flex-row space-between my-2">
            <label htmlFor="">Title:</label>
            <input
              placeholder="Title"
              name="productTitle"
              type="text"
              id="productTitle"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="price">Price:</label>
            <input
              placeholder="$1.00"
              name="price"
              type="number"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="quantity">Quantity:</label>
            <input
              placeholder="1"
              name="quantity"
              type="number"
              id="quantity"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="productDescription">Description:</label>
            <textarea
              placeholder="This is my product description"
              name="productDescription"
              type="text"
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
