import { Link } from "reactRouterDom";

// destructuring blogs & title props passed down from `Home`
const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{title} </h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          {/* access each blog with map, each blog object has an `id` */}
          <Link to={`/blogs/${blogs.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
