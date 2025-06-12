// src/pages/IdentifikasiGejalaForm.jsx

import React, { useState, useEffect } from 'react';

// Terima prop baru: 'kodeTrimester'
function IdentifikasiGejalaForm({ onSubmit, onBack, initialData, kodeTrimester }) {
  const [allGejala, setAllGejala] = useState([]);
  const [selectedGejala, setSelectedGejala] = useState(initialData || []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect sekarang bergantung pada 'kodeTrimester'
  useEffect(() => {
    // Pastikan kodeTrimester tidak kosong sebelum fetch
    if (!kodeTrimester) return;

    const fetchGejala = async () => {
      setLoading(true); // Mulai loading setiap kali trimester berubah
      try {
        // Panggil API dengan URL dinamis berdasarkan trimester yang dipilih
        const response = await fetch(`/api/gejala/${kodeTrimester}`);
        if (!response.ok) {
          throw new Error('Gagal mengambil data dari server');
        }
        const data = await response.json();
        setAllGejala(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGejala();
  }, [kodeTrimester]); // Jalankan ulang efek ini jika kodeTrimester berubah

  const handleToggleGejala = (kodeGejala) => {
    setSelectedGejala(prevSelected => 
      prevSelected.includes(kodeGejala)
        ? prevSelected.filter(kode => kode !== kodeGejala)
        : [...prevSelected, kodeGejala]
    );
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedGejala.length === 0) {
        alert("Silakan pilih minimal satu gejala!");
        return;
    }
    onSubmit(selectedGejala);
  };

  if (loading) return <div className="text-center"><p>Memuat data gejala untuk trimester yang dipilih...</p></div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="container py-3">
      <h2 className="fw-bold mb-4">Identifikasi Gejala</h2>
      <p className="text-muted mb-4">Pilih semua gejala yang Anda rasakan. Daftar ini sudah disesuaikan dengan usia kehamilan Anda.</p>
      
      <form onSubmit={handleSubmit}>
        <div className="list-group">
          {allGejala.map((gejala, index) => (
            <div key={gejala.kode_gejala} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{index + 1}. {gejala.nama_gejala}</span>
              <div>
                <button type="button" className={`btn btn-sm ${selectedGejala.includes(gejala.kode_gejala) ? 'btn-success' : 'btn-outline-success'}`} onClick={() => handleToggleGejala(gejala.kode_gejala)} style={{ marginRight: '5px' }}>Ya</button>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-5">
          <button type="button" className="btn btn-secondary px-4 py-2 rounded-pill" onClick={onBack}>Kembali</button>
          <button type="submit" className="btn btn-danger px-4 py-2 rounded-pill">Lihat Hasil Diagnosis</button>
        </div>
      </form>
    </div>
  );
}

export default IdentifikasiGejalaForm;