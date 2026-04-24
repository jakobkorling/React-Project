import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Navbar from "./navbar.jsx";
import Portfolio from "./pages/Portfolio.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
