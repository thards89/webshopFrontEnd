import "./style.css";

const Login = () => {
  return (
    <div className="allFont">
      <h4>User Login </h4>
      <form action="/login" method="post" id="login">
        <div>
          <label for="email"><b>Email:{""}</b></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label for="name"><b>Password:</b></label>
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

export { Login };