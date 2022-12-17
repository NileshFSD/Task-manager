function View({ title, description, setView, setHome }) {
  function handleClose(e) {
    e.preventDefault();
    setView(false);
    setHome(true);
  }
  return (
    <div>
      <div className="view-container">
        <div className="view-page">
          <div>
            <span className="close-btn" onClick={handleClose}>
              X
            </span>
          </div>
          <h3> {title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default View;
