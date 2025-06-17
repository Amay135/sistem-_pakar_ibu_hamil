// src/pages/About.jsx

import React from 'react';

function About() {
  // 1. Kita tambahkan data 'name' dan 'nim' untuk setiap anggota tim.
  //    Silakan ganti dengan data tim Anda yang sebenarnya.
  const teamMembers = [
    { id: 1, src: '/images/amay.jpeg', name: 'Amar Maruf Ainul Yaqin', nim: '232102014' },
    { id: 2, src: '/images/rheval.jpeg', name: 'Rheval 2', nim: 'NIM 2' },
    { id: 3, src: '/images/erii.jpeg', name: 'eri', nim: 'NIM 3' },
    { id: 4, src: '/images/fadil.jpeg', name: 'fadil', nim: 'NIM 4' },
    { id: 5, src: '/images/fathur.jpeg', name: 'fathur', nim: 'NIM 5' },
    { id: 6, src: '/images/rustam.jpeg', name: 'rustam', nim: 'NIM 6' },
  ];

  return (
    <>
      {/* 2. Tambahkan CSS untuk efek overlay saat hover */}
      <style>{`
        .team-card {
          position: relative; /* Diperlukan agar overlay bisa diposisikan absolut terhadap card */
          overflow: hidden; /* Memastikan overlay tidak keluar dari sudut yang membulat */
          border-radius: 0.375rem; /* Menyamakan dengan kelas .rounded dari Bootstrap */
        }

        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.6); /* Latar belakang hitam semi-transparan */
          color: white;
          
          /* Properti untuk membuat teks di tengah */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          
          opacity: 0; /* Awalnya tidak terlihat */
          transition: opacity 0.3s ease-in-out; /* Animasi saat muncul/hilang */
        }

        /* Saat kursor diarahkan ke .team-card, .team-overlay di dalamnya akan muncul */
        .team-card:hover .team-overlay {
          opacity: 1;
        }
      `}</style>
    
      <div className="container py-5">
        {/* --- Bagian Our Team --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Team</h2>
        </div>
        
        <div className="row g-4 mb-4">
          {/* 3. Kita ubah struktur JSX untuk setiap anggota tim */}
          {teamMembers.map((member) => (
            <div className="col-md-4" key={member.id}>
              {/* Setiap gambar dibungkus dengan .team-card */}
              <div className="team-card shadow-sm">
                <img 
                  src={member.src}
                  alt={member.name}
                  className="img-fluid"
                  style={{ width: '100%', height: '250px', objectFit: 'cover' }}
                />
                {/* Ini adalah lapisan yang akan muncul saat hover */}
                <div className="team-overlay">
                  <h5 className="fw-bold">{member.name}</h5>
                  <p>{member.nim}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted mb-5 pb-5" style={{ maxWidth: '800px', margin: 'auto' }}>
          Kelompok 1 atau bisa disebut Mommy Squad beranggotakan 6 Orang Hebat. Bersama, kami menghadirkan Mom's Care Sebagai Wujud Perhatian Kami Untuk Ibu & Buah Hati
        </p>

        {/* ... Sisa konten halaman (Our Logo Philosophy, dll) tidak berubah ... */}
        {/* --- Bagian Our Logo Philosophy --- */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Logo Philosophy</h2>
        </div>
        <div className="row align-items-center mb-5 pb-5">
          <div className="col-md-4 text-center">
            <img 
              src="/images/logo.png"
              alt="Mom's Care Logo" 
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="col-md-8">
            <div>
              <h5 className="fw-bold">Siluet Ibu & Anak</h5>
              <p className="text-muted">Mencerminkan fokus aplikasi pada kesehatan ibu dan anak.</p>
            </div>
            <div className="my-3">
              <h5 className="fw-bold">Warna Biru & Merah Muda</h5>
              <p className="text-muted">Merepresentasikan jalinan antara kepercayaan (trust) dan kasih sayang.</p>
            </div>
            <div>
              <h5 className="fw-bold">Lingkaran Pelindung</h5>
              <p className="text-muted">Menggambarkan sistem ini sebagai tempat aman untuk bertanya dan mendapatkan informasi yang terpercaya.</p>
            </div>
          </div>
        </div>
        
        {/* --- Bagian Our Part & Social Media --- */}
        <div className="row">
          <div className="col-md-6 mb-5">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Our Part</h2>
            </div>
            <div className="d-flex flex-column align-items-center">
              <img src="/images/logo-unjaya.png" alt="logo-unjaya.png" className="img-fluid mb-3" style={{ maxWidth: '300px' }}/>
              <img src="/images/logo-ftti.png" alt="FTTI Logo" className="img-fluid mb-3" style={{ maxWidth: '300px' }}/>
              <img src="/images/logo-fkes.png" alt="FKES Logo" className="img-fluid mb-3" style={{ maxWidth: '300px' }}/>
            </div>
          </div>
          <div className="col-md-6 mb-5">
            <div className="text-center mb-2">
              <h2 className="fw-bold">Our Social Media</h2>
            </div>
            <div className="text-center">
              <img src="/images/ig.jpg" alt="QR Code Instagram" className="img-fluid" style={{ maxWidth: '300px' }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;