import { useState } from "react";
import Form from "./Form";
export default function Card({ name, email, phone, website, imageSrc }) {
  //code to change the color of the like button

  const [likeBtnToggled, setLikeBtnToggle] = useState(false);
  const [editState, setEditState] = useState(false);
  const [deleteState, setDeleteState] = useState(false);
  let [userName, setName] = useState("");
  let [userEmail, setEmail] = useState("");
  let [userPhone, setPhone] = useState("");
  let [userWebsite, setWebsite] = useState("");
  //function triggered on likebutton cli
  const toggleLikeBtnClass = () => {
    setLikeBtnToggle(!likeBtnToggled);
  };
  //code to delete the user or remove the user

  const handleDelete = () => {
    setDeleteState(true);
  };

  const handleEdit = () => {
    setEditState(true);
  };

  return (
    <div className={deleteState ? "hidden" : "card"}>
      <div>
        <img className="card-img-top" src={imageSrc} alt="Card "></img>
        <div className="card-body">
          <h5 className="card-title">{userName === "" ? name : userName}</h5>
          <p className="card-text">
            <span className="e-icons e-comment-show card-detail-icon"></span>
            {userEmail === "" ? email : userEmail}
          </p>
          <p className="card-text">
            <span className="e-icons e-number-formatting card-detail-icon"></span>
            {userPhone === "" ? phone : userPhone}
          </p>
          <p className="card-text">
            <span className="e-icons e-web-layout card-detail-icon"></span>
            {userWebsite === "" ? website : userWebsite}
          </p>

          <hr style={{ width: "100%" }}></hr>
          <div className="card-button-wrapper">
            <button
              className={likeBtnToggled ? "btn btn-danger" : "btn btn-light"}
              onClick={toggleLikeBtnClass}
            >
              <span className="e-icons e-thumbs-up"></span>
            </button>
            <button
              href="/"
              className="btn btn-primary btn-light"
              onClick={handleEdit}
            >
              <span className="e-icons e-edit-4"></span>
            </button>
            <button
              href="/"
              className="btn btn-primary btn-light"
              onClick={handleDelete}
            >
              <span className="e-icons e-delete-2"></span>
            </button>
          </div>
        </div>
      </div>
      {editState ? (
        <Form
          editState={editState}
          setEditState={setEditState}
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          setWebsite={setWebsite}
        />
      ) : null}
    </div>
  );
}
