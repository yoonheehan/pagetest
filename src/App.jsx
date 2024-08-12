import "./App.css";
import About from "./routing/About";
import Home from "./routing/Home";
// import MainPage from "./component/MainPage";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100%" }}>
        <div className="main">
          <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
