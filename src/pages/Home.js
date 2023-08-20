import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // set to `true`, data is loading at first while we make request
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        if (!res.ok) {
          // if error, we go right to .catch block
          throw Error("Could not fetch data"); // creating a new Error object with this message
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false); // NOT loading
        setError(null); // no error if data
      })
      // catches the error thrown & names it `err`
      // `err` is an instance of the Error object
      .catch((err) => {
        setLoading(false);
        // get message from error
        setError(err.message); // message is a property of Error
        console.log(err.message);
      });
  }, []);

  return (
    <div className="home">
      {/* conditional check for loading state */}
      {loading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {/* render BlogList once we have blogs data */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
