import { useState } from "react";
import "./style.css";
import { Signup } from "../../Components/Signup";
import { Login } from "../../Components/Login";

const User = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const createUser = (name, email, password) => {
    const newUser = { name: name, email: email, password: password };

    const updatedUsers = [];
  };
  return (
    <div className="userContainer">
      <h2>User Page </h2>
      <div className="userText" >
      <Signup createUser={createUser} />
      <Login />
      </div>
    </div>
  );
};
export { User };
