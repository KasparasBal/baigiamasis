import "../styles/Create.css";

const Create = () => {
  return (
    <div className="create_container">
      <form className="create_form">
        <h1 className="create-form-title">Create New Post</h1>
        <label className="create_label">Title</label>
        <input className="create_input" type="text" id="title"></input>
        <label className="create_label">Body</label>
        <textarea className="create_input body_input" id="body"></textarea>
        <button className="create_btn">Create Post</button>
      </form>
    </div>
  );
};

export default Create;
