const Create = () => {
  
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      {/* add controlled inputs (web forms) */}
      <form>
        <label>Blog Title:</label>
        <input
          type="text"
          required
        />
        <label>Blog body:</label>
        <textarea
          required
        />
        <label>Blog author:</label>
        <select>
          <option value="thao">thao</option>
          <option value="fresno">fresno</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
