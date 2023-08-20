import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  // set to `true`, data is loading at first while we make request
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        // once we get data, change `loading` state to false.
        setLoading(false); // NOT loading
      });
  }, []);

  return (
    <div className="home">
      {/* conditional check for loading state */}
      {loading && <div>Loading...</div>}

      {/* render BlogList once we have blogs data */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
