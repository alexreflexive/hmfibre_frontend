import "./App.css";
import Header from "./visitor/Header";
import Nav from "./visitor/Nav";
import Accueil from "./visitor/Accueil";
import Soudure from "./visitor/Soudure";
import Tirage from "./visitor/Tirage";
import Pose from "./visitor/Pose";
import Mesure from "./visitor/Mesure";

function App() {
  return (
    <div className="App">
      {/* <p className="dark-background">lorem ipsum</p>
      <p className="light-background">lorem ipsum</p> */}
      <Header />
      <Nav />
      <Accueil />
      <Soudure />
      <Tirage />
      <Pose />
      <Mesure />
      <section>sectuion</section>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
