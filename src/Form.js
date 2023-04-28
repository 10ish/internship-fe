export default function Form({setEditState,setName,setEmail,setPhone,setWebsite}){
    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        const newName = event.target.name.value;
        setName(newName);
        const newEmail = event.target.email.value;
        setEmail(newEmail);
        const newPhone = event.target.phone.value;
        setPhone(newPhone);
        const newWebsite = event.target.website.value;
        setWebsite(newWebsite);
    
     
        setEditState(false);
      };
      const closeForm = () => {
        setEditState(false);
      };
return(
    <div className="form-wrapper">
    <form className="edit-user-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label>
          <span style={{ color: "red" }}>*</span> Name
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          name="name"
        ></input>
      </div>
      <div className="form-group">
        <label>
          <span style={{ color: "red" }}>*</span> Email address
        </label>
        <input
          type="email"
          className="form-control"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          name="email"
        ></input>
      </div>
      <div className="form-group">
        <label>
          <span style={{ color: "red" }}>*</span> Phone Number
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          name="phone"
        ></input>
      </div>
      <div className="form-group">
        <label>
          <span style={{ color: "red" }}>*</span> Website
        </label>
        <input
          type="text"
          className="form-control"
          name="website"
          placeholder="Name"
        ></input>
      </div>
      <div className="form-button-wrapper">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button type="reset" className="btn btn-danger" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </form>
  </div>
)

}