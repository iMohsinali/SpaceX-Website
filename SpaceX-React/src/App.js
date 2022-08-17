import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Sections from "./components/Sections";
import InnerSection from "./components/InnerSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isOpen, urlName } = useSelector((state) => state.menu);

  // let match = useMatch();
  // const nameUrl = window.location;

  console.log(urlName);
  return (
    <Router>
      {isOpen && <div className="overlay"></div>}
      <Header />
      <Mobile />
      <Routes>
        <Route exact path="/" element={<Sections />} />
        <Route path={urlName} element={<InnerSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
