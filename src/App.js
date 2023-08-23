import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Details from "./pages/BlogDetails";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// a component is a function, we must return something inside it (JSX template)
// export the component to be used elsewhere
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* only 1 route shows at any 1 time, all routes go in here */}
          {/* set up a route for each page */}
          <Switch>
            {/* need to add path property, nest component we want to visit inside the Route */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* `:` syntax for making a route parameter */}
            {/* `id` is the parameter name we gave it */}
            <Route path="/blogs/:id">
              <Details />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
