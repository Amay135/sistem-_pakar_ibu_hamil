// src/pages/UsiaKehamilanForm.jsx

import React, { useState, useEffect } from "react";

// Props: onSubmit, onBack, initialData
function UsiaKehamilanForm({ onSubmit, onBack, initialData }) {
  // State untuk menyimpan daftar trimester dari API
  const [trimesters, setTrimesters] = useState([]);
  const [selectedTrimester, setSelectedTrimester] = useState(initialData || "");
  // State untuk loading dan error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect untuk mengambil data saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchTrimesters = async () => {
      try {
        const response = await fetch("/api/trimester"); // Panggil API baru
        if (!response.ok) {
          throw new Error("Gagal mengambil data trimester");
        }
        const data = await response.json();
        setTrimesters(data); // Simpan data ke state
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrimesters();
  }, []); // Dependensi kosong agar hanya berjalan sekali

  const handleChange = (e) => {
    setSelectedTrimester(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedTrimester) {
      alert("Silakan pilih usia kehamilan!");
      return;
    }
    onSubmit(selectedTrimester);
  };

  // Tampilkan pesan saat data sedang dimuat
  if (loading) {
    return (
      <div className="text-center">
        <p>Memuat pilihan...</p>
      </div>
    );
  }

  // Tampilkan pesan jika terjadi error
  if (error) {
    return <div className="alert alert-danger">Error: {error}</div>;
  }

  return (
    <div className="container py-3">
      <h2 className="fw-bold mb-4">Usia Kehamilan</h2>
      <form onSubmit={handleSubmit}>
        {/* Render radio button secara dinamis dari state 'trimesters' */}
        {trimesters.map((trimester) => (
          <div className="form-check mb-3 shadow-sm p-3 rounded" key={trimester.kode} style={{ border: "1px solid #dee2e6" }}>
            <input className="form-check-input" type="radio" name="usiaKehamilan" id={`trimester-${trimester.kode}`} value={trimester.kode} checked={selectedTrimester === trimester.kode} onChange={handleChange} required />
            <label className="form-check-label" htmlFor={`trimester-${trimester.kode}`}>
              {trimester.label}
            </label>
          </div>
        ))}

        <div className="mt-4">
          <h5 className="fw-bold">Catatan</h5>
          <p className="text-muted small">
            Usia kehamilan yang digunakan dibagi berdasarkan periode 40 minggu usia kehamilan atau biasa disebut dengan trimester. Trimester 1 yaitu pada usia kehamilan 1-13 minggu, trimester 2 pada usia kehamilan 14-26 minggu, dan
            trimester 3 yaitu 27-40 minggu.
          </p>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <button type="button" className="btn btn-secondary px-4 py-2 rounded-pill" onClick={onBack}>
            Kembali
          </button>
          <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
            Selanjutnya
          </button>
        </div>
      </form>
    </div>
  );
}

export default UsiaKehamilanForm;
