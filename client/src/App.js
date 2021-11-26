import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import Post from "./pages/Post";

const App = () => {
  return (
    <div>
      <Navbar />
      <Post />
    </div>
  )
}

export default App;
