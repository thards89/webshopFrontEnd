import "./style.css";
import { useState } from "react";
import Modal from "react-modal"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Crismon',
          },
  };

  

const ReviewsPage = (props) => {
const {openModal, closeModal, modalIsOpen} = props
console.log("Reviews modal")
return (
  <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    > 
        
      <button className="closeButton" onClick={closeModal}>close</button>
      <p>Add Review</p>
      <p>Name</p>  
      <form>
        <input type="text" id="name" name="fname" size="50"/>     
     </form>
      <p>Rating</p>
      <p>Review</p> 
      <textarea placeholder="Comment" rows="10" cols="55">123 testando</textarea>   
      <p>
        <button>Submit</button>
    </p>
   
    </Modal>
  </div>
);

}

export { ReviewsPage };
