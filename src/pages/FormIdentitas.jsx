// src/pages/FormIdentitas.jsx
import React, { useState, useEffect } from 'react';

// Props: onSubmit (fungsi dari DiagnosisPage), initialData
function FormIdentitas({ onSubmit, initialData }) {
  const [identitasData, setIdentitasData] = useState({
    nama: '',
    nomorTelepon: '', // Diubah dari usiaKandungan
    pekerjaan: '',
    alamat: '',
  });

  useEffect(() => {
    if (initialData) {
      setIdentitasData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setIdentitasData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validasi sederhana, bisa ditambahkan lebih lanjut
    if (!identitasData.nama || !identitasData.nomorTelepon || !identitasData.pekerjaan || !identitasData.alamat) {
        alert("Semua field identitas wajib diisi!");
        return;
    }
    onSubmit(identitasData);
  };

  return (
    // Container utama dihapus karena sudah ada di DiagnosisPage
    // Header juga dipindahkan ke DiagnosisPage
    <div className="container py-3"> {/* Disesuaikan paddingnya */}
      <h2 className="fw-bold mb-4">Form Identitas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill shadow-sm"
            name="nama"
            placeholder="Nama Lengkap"
            value={identitasData.nama}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="tel" // type diubah menjadi tel untuk nomor telepon
            className="form-control rounded-pill shadow-sm"
            name="nomorTelepon"
            placeholder="Nomor Telepon" // placeholder diubah
            value={identitasData.nomorTelepon}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill shadow-sm"
            name="pekerjaan"
            placeholder="Pekerjaan"
            value={identitasData.pekerjaan}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill shadow-sm"
            name="alamat"
            placeholder="Alamat"
            value={identitasData.alamat}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
          Selanjutnya
        </button>
      </form>
    </div>
  );
}

export default FormIdentitas;