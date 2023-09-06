import { useState } from "react";

const Create = () => {
  // states for all input fields to track changing values
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("thao");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* add controlled inputs (web forms) */}
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          // set value to initial state
          value={title}
          // to track when input value changes & to update it, use onChange event
          // set to anon arrow func which invokes setTitle
          // onChange gives us access to event object
          onChange={(e) => setTitle(e.target.value)} // target = input field, value = what's typed in
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        {/* drop down options to select */}
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="thao">thao</option>
          <option value="fresno">fresno</option>
        </select>
        <button>Add Blog</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
