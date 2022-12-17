import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../Firebase/firebase";
import Edit from "./Edit";
import View from "./View";

function Task({ title, id, description, setAddForm, store }) {
  const [home, setHome] = useState(true);
  const [editForm, setEditForm] = useState(false);
  const [view, setView] = useState(false);

  function openEditForm(e) {
    e.preventDefault();
    setEditForm(true);
    setHome(false);
    setAddForm(false);
  }

  function handleView(e) {
    e.preventDefault();
    setView(true);
    setHome(false);
    setAddForm(false);
  }

  const handleDelete = async (e) => {
    const deleteDocRef = doc(db, "store", id);

    try {
      await deleteDoc(deleteDocRef);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {editForm ? (
        <Edit
          id={id}
          setEditForm={setEditForm}
          toTitle={title}
          toDescription={description}
          setHome={setHome}
        />
      ) : null}

      {home ? (
        <div className="container">
          <h2>{title}</h2>
          <div>{description}</div>
          <div className="buttons">
            <button onClick={openEditForm}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleView}>View</button>
          </div>
        </div>
      ) : null}

      {view ? (
        <View
          title={title}
          description={description}
          setView={setView}
          setHome={setHome}
        />
      ) : null}
    </>
  );
}

export default Task;
