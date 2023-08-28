import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Display from "./components/Display";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Footer from "./components/Footer";
import { imageArr } from "./components/imageloader";

function App() {
  return (
    <>
      <div>
        <Nav />
        <Hero />
        <Display />
        <About />
        <Footer />
      </div>
    </>
  );
}

export default App;
