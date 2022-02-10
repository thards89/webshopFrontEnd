import "./style.css";

const About = () => {
  return (
    <div style={{ fontSize: "23px" }}>
      <h1>About Page</h1>
      <p>
        {" "}
        <ul>
          The Shop is an Amsterdam-based company that creates affordable and
          sustainable homewear apparel and range of things. With efficiency in
          mind, this business was created to ensure that every person is able to
          get the things they need in a minimum amount of time and less hassle
          as possible.
        </ul>
        <ul>
          The Shop is passionate about style, simplicity, and attention to
          detail.
        </ul>
        <ul> </ul>
        <img
          style={{ width: "500px", justifyContent: "space-around" }}
          src={
            "https://onwise.nl/wp-content/webp-express/webp-images/uploads/2019/09/Google-Shopping.jpeg.webp"
          }
        />
        <div style={{ fontSize: "20px" }}>
          <ul></ul>
        </div>
      </p>
    </div>
  );
};

export { About };
