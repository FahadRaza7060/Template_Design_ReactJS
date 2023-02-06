import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import About from "./Components/About";
import Screenshot from "./Components/Screenshot";
import Services from "./Components/Services";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Links from "./Components/Links";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Screenshot />
      <Services />
      <Blog />
      <Contact />
      <Links />
    </>
  );
}
export default App;
