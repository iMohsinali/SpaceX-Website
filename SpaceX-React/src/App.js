import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Mobile from "./components/Mobile";
import Sections from "./components/Sections";

function App() {
  const { isOpen } = useSelector((state) => state.menu);
  console.log(isOpen);
  return (
    <>
      {isOpen && <div className="overlay"></div>}
      <Header />
      <Mobile />
      <Sections />
      <Footer />
    </>
  );
}

export default App;
