import "./style.css";

const Signup = () => {
  return (
    <div>
      <h1>User Signup Page</h1>
      <form action="signup" method="post" id="signup">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export { Signup };
