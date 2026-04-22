import {BrowserRouter, Routes, Route} from "react-router-dom";
import PreviousProjects from "./Components/Previous-projects.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Navbar from "./navbar.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
