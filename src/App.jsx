import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Products from "./pages/Products";
import Support from "./pages/Support";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/clothes/:id" element={<Details />} />
          <Route path="pro" element={<Products />} />
          <Route path="support" element={<Support />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
