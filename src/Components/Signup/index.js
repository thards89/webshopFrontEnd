import "./style.css";
import { useState } from "react";

const Signup = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Handle submit form inside Signup");
  };

  return (
    <div>
      <div>
        <h4>User Signup</h4>
        <form action="/signup" method="post" id="signup">
          <div>
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label for="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <label for="name">Password:</label>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export { Signup };
