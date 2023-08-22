import BlogList from "../components/BlogList";
import useFetch from "../hooks/useFetch";

const Home = () => {
  // DESTRUCTURE useFetch hook we created
  // Need to pass in endpoint here as a parameter! 
  const { data: blogs, loading, error } = useFetch('http://localhost:8000/blogs');
  // grab the data: but name it `blogs` in this context

  //====  output data once we get it ==== 
  return (
    <div className="home">
      {/* conditional check for loading state */}
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {/* here its called `data` that we get back but we're trying to still pass the blogs in  */}
      {/* we could do blogs={data} here instead OR we could: */}
      {/* NAME THE DATA BLOGS INSIDE THIS COMPONENT BY ADDING A : */}

      {/* render BlogList once we have blogs data */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};

export default Home;
