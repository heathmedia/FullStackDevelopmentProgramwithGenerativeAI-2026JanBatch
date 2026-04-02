import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BookRide from "./pages/BookRide";
import MyRides from "./pages/MyRides";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookRide />} />
        <Route path="/rides" element={<MyRides />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;