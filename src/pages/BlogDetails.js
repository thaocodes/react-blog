import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
  // destructure route param using useParams hook
  // grabs `id` from url
  const { id } = useParams();
  const {
    data: blog,
    loading,
    error,
  } = useFetch("http://localhost:8000/blogs" + id);

  return (
    <div className="blog-details">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {blog && (
        <article>
          <h2>{blog.title} </h2>
          <p>Written by {blog.author} </p>
          {/* body is a property, displays actual content of the blog */}
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
