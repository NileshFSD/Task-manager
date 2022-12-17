import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../Firebase/firebase";
import Task from "./Task";
import Add from "./Add";

function Home() {
  const [store, setStore] = useState([]);
  const [addForm, setAddForm] = useState(false);

  useEffect(() => {
    const storeRef = query(collection(db, "store"), orderBy("created", "asc"));
    onSnapshot(storeRef, (snapshot) => {
      setStore(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  function openAddForm(e) {
    setAddForm(true);
  }

  return (
    <div className="parent-container">
      <div>
        <button className="add" onClick={openAddForm}>
          Add +
        </button>
      </div>
      <div className="main-container">
        {console.log(store)}
        {store.length < 1 ? "No Task Added" : null}
        {store.map((user, index) => {
          return (
            <div key={index}>
              <Task
                alert={openAddForm}
                addForm={addForm}
                setAddForm={setAddForm}
                id={user.id}
                store={store}
                key={user.id}
                title={user.data.title}
                description={user.data.description}
              />
            </div>
          );
        })}
      </div>
      {addForm ? <Add setAddForm={setAddForm} /> : null}
    </div>
  );
}

export default Home;
