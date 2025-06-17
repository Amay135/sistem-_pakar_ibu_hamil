// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Artikel from "./pages/Artikel";
import Kalender_kehamilan from "./pages/Kalender_kehamilan";
import Artikel_1 from "./pages/Artikel_1";
import Artikel_2 from "./pages/Artikel_2";
import NoPage from "./pages/NoPage";
import DiagnosisPage from "./pages/DiagnosisPage";
import About from "./pages/About"; // <-- 1. Impor komponen About

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="diagnosis" element={<DiagnosisPage />} />
          <Route path="kalender_kehamilan" element={<Kalender_kehamilan />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/1" element={<Artikel_1 />} />
          <Route path="artikel/2" element={<Artikel_2 />} />
          <Route path="about" element={<About />} /> {/* <-- 2. Tambahkan rute ini */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
