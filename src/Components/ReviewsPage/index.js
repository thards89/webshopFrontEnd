import "./style.css";
import { useState } from "react";
import Modal from "react-modal";
import { ReviewsArea } from "../ReviewsArea";

//style of component
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontFamily: "Crismon",
    alignItems: "center ",
  },
};

//here stats the logic
const ReviewsPage = (props) => {
  const { openModal, closeModal, modalIsOpen } = props;
  console.log("Reviews modal");

  //The review array
  const [reviews, setReviews] = useState([{ id: 1, name: "", review: "" }]);

  const reviewArray = [...reviews];
  console.log("array", reviewArray);

  //Function to add a review to the array

  const submitReview = (name, review) => {
    const newReview = { id: reviews.length + 1, name: name, review: review };
    const newReviewsArray = [...reviews, newReview];
    setReviews(newReviewsArray);
  };

  //Function to submit button
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmitName = (event) => {
    event.preventDefault();
    console.log("in the form");
    submitReview(name);
  };
  console.log("name", name);

  const handleSubmitReview = (event) => {
    event.preventDefault();
    console.log("in the form");
    submitReview(review);
  };

  console.log("review", review);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        {/* //content */}
        <p style={{ fontFamily: "Crismon" }}>
          <h3>Add Review</h3>
        </p>
        <p style={{ fontFamily: "Crismon" }}>
          <b>Name</b>
        </p>
        <form onSubmit={handleSubmitName}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            size="50"
          />
        </form>
        <p style={{ fontFamily: "Crismon" }}>
          <b>Review</b>
        </p>
        <form onSubmit={handleSubmitReview}>
          <input
            value={review}
            onChange={(event) => setReview(event.target.value)}
            size="50"
          />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        <div>
          {reviewArray.map((review) => {
            return (
              <ReviewsArea
                key={review.id}
                name={review.name}
                review={review.review}
              />
            );
          })}
        </div>
      </Modal>
    </div>
  );
};

export { ReviewsPage };
