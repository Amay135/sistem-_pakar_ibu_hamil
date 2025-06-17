// src/pages/HasilDiagnosis.jsx
import React from "react";

function HasilDiagnosis({ hasil, identitas, onReset }) {
  // === TAMBAHKAN BARIS INI UNTUK INSPEKSI ===
  console.log("Data 'hasil' yang diterima oleh komponen:", hasil);

  if (!hasil || !identitas) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-4">Hasil Diagnosis</h2>
        <p>Data diagnosis tidak tersedia atau sedang diproses.</p>
        <button className="btn btn-primary px-4 py-2 rounded-pill mt-3" onClick={onReset}>
          Mulai Diagnosis Baru
        </button>
      </div>
    );
  }

  const renderHasilPenyakit = () => {
    // Kasus 1: Tidak ada penyakit yang terdiagnosis
    if (!hasil.kode_penyakit) {
      return <p className="text-muted">{hasil.nama_penyakit}</p>;
    }

    // Kasus 2 & 3: Ada penyakit yang terdiagnosis (100% atau < 100%)
    return (
      // Menggunakan React Fragment <> untuk membungkus beberapa elemen
      <>
        {/* Menampilkan nama penyakit */}
        {hasil.keyakinan === 100 ? (
          <p className="fs-5 fw-bold">
            {hasil.kode_penyakit} - {hasil.nama_penyakit}
          </p>
        ) : (
          <p className="fs-5">
            <strong>{hasil.nama_penyakit}</strong>
          </p>
        )}

        {/* === BAGIAN BARU UNTUK MENAMPILKAN DESKRIPSI === */}
        {/* Tampilkan deskripsi jika datanya ada dari backend */}
        {hasil.deskripsi && (
          <p className="text-muted mt-2" style={{ whiteSpace: "pre-line" }}>
            {hasil.deskripsi}
          </p>
        )}
      </>
    );
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Hasil Diagnosis</h2>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light-pink">
          <h5 className="mb-0 fw-semibold">Identitas</h5>
        </div>
        <div className="card-body">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td style={{ width: "150px" }}>
                  <strong>Nama Lengkap</strong>
                </td>
                <td>: {identitas.nama}</td>
              </tr>
              <tr>
                <td>
                  <strong>No. Telepon</strong>
                </td>
                <td>: {identitas.nomorTelepon}</td>
              </tr>
              <tr>
                <td>
                  <strong>Pekerjaan</strong>
                </td>
                <td>: {identitas.pekerjaan}</td>
              </tr>
              <tr>
                <td>
                  <strong>Alamat</strong>
                </td>
                <td>: {identitas.alamat}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light-pink">
          <h5 className="mb-0 fw-semibold">Penyakit</h5>
        </div>
        <div className="card-body">{renderHasilPenyakit()}</div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-light-pink">
          <h5 className="mb-0 fw-semibold">Solusi</h5>
        </div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: hasil.solusi.replace(/\n/g, "<br />") }} />
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-danger px-5 py-2 rounded-pill me-3" onClick={handlePrint}>
          Cetak
        </button>
        <button className="btn btn-outline-secondary px-4 py-2 rounded-pill" onClick={onReset}>
          Diagnosis Baru
        </button>
      </div>
    </div>
  );
}

export default HasilDiagnosis;
