import { Link } from "react-router-dom";

// arrow function
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Thao's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>

        {/* OLD nav below using anchor tags & href */}
        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
