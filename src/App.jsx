import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Servicios } from "./Components/Servicios";
import { Container } from "./Components/Container";
import { Home } from "./Components/Home";
import "./App.css";
import { Galeria } from "./Components/Galeria";
import MobileMenu from "./Components/Mobile Menu";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/galeria" element={<Galeria />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
