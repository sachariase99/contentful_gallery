import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <Router>
      <div className="mb-[100px]">
        <NavBar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <div className="mt-[90px]">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
