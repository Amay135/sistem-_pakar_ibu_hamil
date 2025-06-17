// src/pages/Navbar.jsx
import { Outlet, Link } from "react-router-dom";
import Footer from "./Footer"; // 1. Impor komponen Footer yang baru dibuat

const Navbar = () => {
  return (
    // Kita gunakan div wrapper untuk memastikan footer berada di bawah konten
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      
      {/* Bagian Navbar (tidak berubah) */}
      <nav className="navbar navbar-expand-lg bg-light border-bottom px-4">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src="/images/logo.png" alt="Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold" style={{ fontSize: "20px", color: "#EE9CA7" }}>
            Mom's <span style={{ fontSize: "20px", color: "#A1C4FD" }}>Care</span>
          </span>
        </Link>
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav gap-4 ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/diagnosis">Diagnosis Penyakit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Kalender_kehamilan">Kalender Kehamilan</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Artikel">Artikel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main content akan dirender di sini, style ini memastikan konten mengisi ruang yang tersedia */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* 2. Tambahkan komponen Footer di sini */}
      <Footer />

    </div>
  );
};

export default Navbar;