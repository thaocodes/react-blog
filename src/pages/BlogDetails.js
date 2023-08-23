import { useParams } from "react-router-dom";

const BlogDetails = () => {
  // destructure route param using useParams hook
  const { id } = useParams;

  return (
    <div className="blog-details">
      {/* just outputting blog's id here  */}
      <h2>Blog Details - {id}</h2>
    </div>
  );
};

export default BlogDetails;
