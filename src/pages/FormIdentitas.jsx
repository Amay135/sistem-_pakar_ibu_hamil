// src/pages/FormIdentitas.jsx
import React, { useState, useEffect } from 'react';

function FormIdentitas({ onSubmit, initialData }) {
  const [identitasData, setIdentitasData] = useState({
    nama: '',
    nomorTelepon: '',
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
    if (!identitasData.nama || !identitasData.nomorTelepon || !identitasData.pekerjaan || !identitasData.alamat) {
        alert("Semua field identitas wajib diisi!");
        return;
    }
    onSubmit(identitasData);
  };

  return (
    <div className="container py-3">
      <h2 className="fw-bold mb-4 text-center">Form Identitas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control rounded-pill shadow-sm p-3" name="nama" placeholder="Nama Lengkap" value={identitasData.nama} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="tel" className="form-control rounded-pill shadow-sm p-3" name="nomorTelepon" placeholder="Nomor Telepon" value={identitasData.nomorTelepon} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control rounded-pill shadow-sm p-3" name="pekerjaan" placeholder="Pekerjaan" value={identitasData.pekerjaan} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control rounded-pill shadow-sm p-3" name="alamat" placeholder="Alamat" value={identitasData.alamat} onChange={handleChange} required />
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormIdentitas;