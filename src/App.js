import Cv from "./components/Cv";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./styles/App.scss"
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Cv/>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>
    </div>
  );
}

export default App;
