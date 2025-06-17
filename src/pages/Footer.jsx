// src/pages/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #dee2e6',
    paddingTop: '3rem',
    paddingBottom: '1rem',
    marginTop: 'auto'
  };

  return (
    // 1. Tag <footer> ini sekarang menjadi pembungkus terluar.
    //    Style dan kelas mt-5 diterapkan di sini agar background-nya full-width.
    <footer style={footerStyle} className="mt-5">
      
      {/* 2. Kita tambahkan <div className="container"> di DALAM footer.
             Ini akan membuat semua KONTEN di dalamnya tetap rapi di tengah. */}
      <div className="container">
        
        {/* Baris utama ini akan memisahkan konten kiri dan kanan */}
        <div className="row justify-content-between">
          
          {/* Konten Kiri: Mom's Care */}
          <div className="col-lg-3 col-md-4 mb-4">
            <Link className="navbar-brand d-flex align-items-center mb-2" to="/">
              <span className="fw-bold" style={{ fontSize: "20px", color: "#EE9CA7" }}>
                Mom's <span style={{ fontSize: "20px", color: "#A1C4FD" }}>Care</span>
              </span>
            </Link>
            <p className="text-muted small">
              Mom's Care Platform Digital Yang Dirancang untuk ibu hamil dalam memantau kondisi kesehatan secara mudah.
            </p>
          </div>

          {/* Konten Kanan: Grup untuk 3 kolom lainnya */}
          <div className="col-lg-8 col-md-7 mb-4">
            <div className="row">
              {/* Kolom Follow Us */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-bold">Follow Us</h5>
                <p className="text-muted small">Instagram : @mom's.care</p>
              </div>

              {/* Kolom Contact */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-bold">Contact</h5>
                <p className="text-muted small mb-1">+62 812 3456 7890</p>
                <p className="text-muted small">
                  Jl. Siliwangi KM 07 Ringroad Barat, Banyuraden Gamping, Sleman, DI Yogyakarta.
                </p>
              </div>

              {/* Kolom Mommy */}
              <div className="col-lg-4 col-md-6 mb-4">
                <h5 className="fw-bold">Mommy</h5>
                <p className="text-muted small">
                  Sistem Pakar Untuk Mendiagnosa Penyakit Pada Ibu Hamil.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        <hr />

        {/* Bagian Copyright (tidak berubah) */}
        <div className="text-center text-muted small py-2">
          <p className="mb-1">Program Studi Informatika</p>
          <p className="mb-0">Fakultas Teknik & Teknologi Informasi, Universitas Jenderal Achmad Yani Yogyakarta © 2025.</p>
        </div>
      </div> {/* Akhir dari <div className="container"> */}
    </footer> // Akhir dari tag <footer>
  );
}

export default Footer;