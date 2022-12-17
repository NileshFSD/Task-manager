import { useRef, useState } from "react";
// import { Link } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../Firebase/firebase";

function Add({ setAddForm }) {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "store"), {
        title: title,
        description: description,
        created: Timestamp.now(),
      });
    } catch (error) {
      alert(error);
    }

    titleRef.current.value = "";
    descriptionRef.current.value = "";

    setAddForm(false);
    // setHome(true);
  };

  function close(e) {
    e.preventDefault();
    setAddForm(false);
    // setHome(true);
  }
  return (
    <div className="input-container">
      <div className="input-page">
        <div>
          <span onClick={close} className="close-btn">
            X
          </span>
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title..."
            onChange={(e) => setTitle(e.target.value)}
            ref={titleRef}
            required
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            required
            placeholder="Description..."
            onChange={(e) => setDescription(e.target.value)}
            ref={descriptionRef}
          ></textarea>
          <button type="submit" className="add-btn">
            {" "}
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Add;
