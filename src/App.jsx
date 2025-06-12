// src/App.jsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
// FormIdentitas tidak lagi diroute langsung, tapi bagian dari DiagnosisPage
// import FormIdentitas from "./pages/FormIdentitas";
import Artikel from "./pages/Artikel";
import Kalender_kehamilan from "./pages/Kalender_kehamilan";
import Artikel_1 from "./pages/Artikel_1";
import Artikel_2 from "./pages/Artikel_2";
import NoPage from "./pages/NoPage";
import DiagnosisPage from "./pages/DiagnosisPage"; // <-- Impor komponen baru

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          {/* Rute diagnosis penyakit sekarang akan ditangani oleh DiagnosisPage */}
          <Route path="diagnosis" element={<DiagnosisPage />} /> {/* <-- Rute baru */}
          <Route path="kalender_kehamilan" element={<Kalender_kehamilan />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/1" element={<Artikel_1 />} />
          <Route path="artikel/2" element={<Artikel_2 />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// Pastikan main.jsx yang me-render App, bukan App.jsx sendiri
// Baris kode berikut ini seharusnya ada di main.jsx
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);