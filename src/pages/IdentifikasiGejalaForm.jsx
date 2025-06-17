// src/pages/IdentifikasiGejalaForm.jsx

import React, { useState, useEffect } from "react";

function IdentifikasiGejalaForm({ onSubmit, onBack, initialData, kodeTrimester }) {
  const [allGejala, setAllGejala] = useState([]);
  const [selectedGejala, setSelectedGejala] = useState(initialData || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!kodeTrimester) return;
    const fetchGejala = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/gejala/${kodeTrimester}`);
        if (!response.ok) throw new Error("Gagal mengambil data dari server");
        const data = await response.json();
        setAllGejala(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchGejala();
  }, [kodeTrimester]);

  const handleToggleGejala = (kodeGejala) => {
    setSelectedGejala((prevSelected) => (prevSelected.includes(kodeGejala) ? prevSelected.filter((kode) => kode !== kodeGejala) : [...prevSelected, kodeGejala]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGejala.length === 0) {
      alert("Silakan pilih minimal satu gejala!");
      return;
    }
    onSubmit(selectedGejala);
  };

  if (loading)
    return (
      <div className="text-center">
        <p>Memuat data gejala untuk trimester yang dipilih...</p>
      </div>
    );
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <style>{`
        .gejala-row {
          padding: 0.5rem 0.25rem; /* Mengurangi padding vertikal */
          border-bottom: 1px solid #e0e0e0;
        }
        .gejala-row:last-of-type {
          border-bottom: none;
        }
        .gejala-label {
          display: flex; /* Menggunakan flexbox untuk penataan */
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 0.75rem 0.25rem; /* Padding di dalam label agar area klik luas */
          cursor: pointer;
        }
        .gejala-label input[type="checkbox"] {
          display: none; /* Sembunyikan checkbox asli */
        }
        .checkbox-box {
          width: 20px;
          height: 20px;
          border: 1px solid #adb5bd;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0; /* Mencegah kotak mengecil */
          margin-left: 1rem; /* Jarak antara teks dan kotak */
        }
        .gejala-label input:checked ~ .checkbox-box {
           background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
        }
      `}</style>

      <div className="container py-3">
        <h2 className="fw-bold mb-4 text-center">Identifikasi Gejala</h2>
        <p className="text-muted mb-4 text-center">Centang pada semua gejala yang Anda rasakan.</p>

        <form onSubmit={handleSubmit}>
          <div>
            {allGejala.map((gejala, index) => (
              // === STRUKTUR BARU YANG LEBIH STABIL ===
              <div key={gejala.kode_gejala} className="gejala-row">
                <label className="gejala-label" htmlFor={`gejala-${gejala.kode_gejala}`}>
                  {/* Checkbox asli (disembunyikan) dengan event handler yang benar */}
                  <input type="checkbox" id={`gejala-${gejala.kode_gejala}`} checked={selectedGejala.includes(gejala.kode_gejala)} onChange={() => handleToggleGejala(gejala.kode_gejala)} />

                  {/* Teks Gejala */}
                  <span>
                    {index + 1}. {gejala.nama_gejala}
                  </span>

                  {/* Kotak visual checkbox */}
                  <span className="checkbox-box"></span>
                </label>
              </div>
            ))}
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
    </>
  );
}

export default IdentifikasiGejalaForm;
