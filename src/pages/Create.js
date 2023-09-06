import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  // states for all input fields to track changing values
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("thao");
  // loading state for form submission
  const [isLoading, setIsLoading] = useState(false);

  // invoke useHistory hook to redirect user
  const history = useHistory();

  // function that reacts to a submit event (button being clicked)
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page being refreshed
    // onSubmit it creates a new blog object w/ properties
    const blog = { title, body, author };

    // isLoading = true when trying to submit form
    setIsLoading(true);

    // use fetch API, add second arg to include data & method
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // defines content type being sent
      // body is actual data being sent
      body: JSON.stringify(blog), // need to convert data from object to JSON string
      // async (returns promise)
    }).then(() => {
      // fires function when complete
      console.log("new blog added");

      // once form is submitted, isLoading = false
      setIsLoading(false);

      // after blog is added, redirect user to `Home` page
      history.push("/"); // use push method on history object
    });
  };

  //  add controlled inputs (web forms)
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* attach onSubmit event to the form, reference handleSubmit function  */}
      <form onSubmit={handleSubmit}>
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
        {/* if isLoading is false, only output Add Blog button  */}
        {!isLoading && <button>Add Blog</button>}
        {/* if isLoading is true, disable the button  */}
        {isLoading && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
