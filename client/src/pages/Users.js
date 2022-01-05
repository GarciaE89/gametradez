import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_PRODUCT } from "../utils/mutations";

function Users(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addProduct({
      variable: {
        productTitle: formState.productTitle,
        price: formState.price,
        quantity: formState.quantity,
        productDescription: formState.productDescription,
      },
    });
    console.log(formState.productTitle);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      <p id="maintext">Users</p>

      <div className="container my-1">
        <form className="register-container">
          {/* <form onSubmit={handleFormSubmit} className="register-container"> */}
          <div className="flex-row space-between my-2">
            <label htmlFor="">Title:</label>
            <input
              placeholder="Title"
              name="productTitle"
              type="productTitle"
              id="productTitle"
              // onChange={handleChange}
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
              // onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="productDescription">Description:</label>
            <textarea
              placeholder="This is my product description"
              name="productDescription"
              type="productDescription"
              id="productDescription"
              // onChange={handleChange}
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
