import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./visitor/Header";
// import Nav from "./visitor/Nav";
// import Accueil from "./visitor/Accueil";
// import Soudure from "./visitor/Soudure";
// import Tirage from "./visitor/Tirage";
// import Pose from "./visitor/Pose";
// import Mesure from "./visitor/Mesure";
// import Contactform from "./visitor/Contactform";
// import Footer from "./visitor/Footer";
import Visitor from "./visitor/Visitor";
import Admin from "./admin/Admin";
import Planning from "./planning/Planning";
import Login from "./logging/Login";

function App() {
  return (
    <div className="App">
      {/* <p className="dark-background">lorem ipsum</p>
      <p className="light-background">lorem ipsum</p> */}
      {/* <Header />
      <Nav />
      <Accueil />
      <Soudure />
      <Tirage />
      <Pose />
      <Mesure />
      <Contactform />
      <Footer /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Visitor />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
