import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Sections from "./components/Sections";
import InnerSection from "./components/InnerSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const { isOpen, urlName, navbar } = useSelector((state) => state.menu);

  let n = window.location.href;
  let m = n.split("/");
  let u = m[m.length - 1];
  let lname = "/" + u;
  console.log(lname);

  return (
    <Router>
      {isOpen && <div className="overlay"></div>}

      {!navbar && <Header />}
      <Mobile />
      <Routes>
        <Route exact path="/" element={<Sections />} />
        <Route path={lname} element={<InnerSection />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
