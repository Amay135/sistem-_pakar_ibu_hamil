// src/pages/UsiaKehamilanForm.jsx

import React, { useState, useEffect } from "react";

function UsiaKehamilanForm({ onSubmit, onBack, initialData }) {
  const [trimesters, setTrimesters] = useState([]);
  const [selectedTrimester, setSelectedTrimester] = useState(initialData || "");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrimesters = async () => {
      try {
        const response = await fetch("/api/trimester");
        if (!response.ok) throw new Error("Gagal mengambil data trimester");
        const data = await response.json();
        setTrimesters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrimesters();
  }, []);

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

  if (loading)
    return (
      <div className="text-center">
        <p>Memuat pilihan...</p>
      </div>
    );
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <>
      <style>{`
        .trimester-option-wrapper {
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #e0e0e0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .trimester-option-wrapper:last-child {
          border-bottom: none;
        }
        .trimester-option-label {
          display: block;
          padding: 0.5rem 0;
        }
        .trimester-radio-input {
          opacity: 0;
          position: absolute;
          cursor: pointer;
          height: 0;
          width: 0;
        }
        .radio-indicator {
          width: 24px;
          height: 24px;
          border: 1px solid #adb5bd;
          border-radius: 4px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.2s ease-in-out;
        }
        
        /* === PERUBAHAN DI SINI: Menambahkan kembali ikon ceklis === */
        /* Style indikator saat radio button dicentang */
        .trimester-radio-input:checked + .radio-indicator {
          /* SVG untuk ikon ceklis berwarna putih */
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23212529' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
          background-position: center;
        }
        
        }
      `}</style>

      <div className="container py-3">
        <h2 className="fw-bold mb-4 text-center">Usia Kehamilan</h2>
        <form onSubmit={handleSubmit}>
          {trimesters.map((trimester, index) => {
            const labelText = trimester.label.split("(")[0].trim();
            return (
              <div key={trimester.kode} className="trimester-option-wrapper" onClick={() => setSelectedTrimester(trimester.kode)}>
                <label className="trimester-option-label" htmlFor={`trimester-${trimester.kode}`}>
                  {index + 1}. {labelText}
                </label>
                <div>
                  <input type="radio" name="usiaKehamilan" id={`trimester-${trimester.kode}`} value={trimester.kode} checked={selectedTrimester === trimester.kode} onChange={handleChange} className="trimester-radio-input" required />
                  <div className="radio-indicator"></div>
                </div>
              </div>
            );
          })}

          <div className="d-flex justify-content-between mt-4">
            <button type="button" className="btn btn-secondary px-4 py-2 rounded-pill" onClick={onBack}>
              Kembali
            </button>
            <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">
              Selanjutnya
            </button>
          </div>
        </form>

        <div className="mt-5">
          <h5 className="fw-bold">Catatan</h5>
          <p className="text-muted small">
            Usia kehamilan yang digunakan dibagi berdasarkan periode 40 minggu usia kehamilan atau biasa disebut dengan trimester. Trimester 1 yaitu pada usia kehamilan 1-13 minggu, trimester 2 pada usia kehamilan 14-26 minggu, dan
            trimester 3 yaitu 27-40 minggu.
          </p>
        </div>
      </div>
    </>
  );
}

export default UsiaKehamilanForm;
