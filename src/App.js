import Navbar from "./components/Navbar";
import Home from "./pages/Home";



// a component is a function, we must return something inside it (JSX template)
// export the component to be used elsewhere
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
