import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/About/AboutPage";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";
import PortfolioDetails from "./Pages/Portfolio/PortfolioDetails";
import ScrollTop from "./layout/ScrollTop";
import Home from "./Pages/Home/Index";
import Preloader from "./layout/Preloader";

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {loader && <Preloader />}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio-details" element={<PortfolioDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ScrollTop />
    </>
  );
}

export default App;
