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
    <div>
      <h1>User Page </h1>
      <Signup createUser={createUser} />
      <Login />
    </div>
  );
};
export { User };