import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/firebase";

function Edit({ id, setEditForm, toDescription, toTitle, setHome }) {
  const [title, setTitle] = useState(toTitle);
  const [description, setDescription] = useState(toDescription);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updateDocRef = doc(db, "store", id);

    try {
      await updateDoc(updateDocRef, { title, description });
    } catch (error) {
      alert(error);
    }
    setHome(true);
    setEditForm(false);
  };

  function close(e) {
    e.preventDefault();
    setHome(true);
    setEditForm(false);
  }

  return (
    <div className="input-container">
      <div className="input-page">
        <div>
          <span className="close-btn" onClick={close}>
            X
          </span>
        </div>
        <form className="input-form" onSubmit={handleUpdate}>
          <input
            type="text"
            name="title"
            placeholder="Entre new Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button type="submit" className="edit-btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Edit;
