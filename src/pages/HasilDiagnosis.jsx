// src/pages/HasilDiagnosis.jsx
import React from "react";

function HasilDiagnosis({ hasil, identitas, onReset }) {
  if (!hasil || !identitas) {
    return (
      <div className="container py-5 text-center">
        <p>Data diagnosis tidak tersedia.</p>
      </div>
    );
  }

  const renderHasilPenyakit = () => {
    // Kasus: Tidak ada penyakit yang memenuhi ambang batas
    if (!hasil.kode_penyakit) {
      return <p className="text-muted">{hasil.nama_penyakit}</p>;
    }

    // Kasus: Hasil pasti (100%)
    if (hasil.keyakinan === 100) {
      return (
        <div>
          <p className="fs-5 fw-bold">
            {hasil.kode_penyakit} - {hasil.nama_penyakit}
          </p>
          <div className="progress" style={{ height: "25px" }}>
            <div className="progress-bar bg-success" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
              Keyakinan: 100%
            </div>
          </div>
        </div>
      );
    }

    // Kasus: Hasil CF (60% - 99%)
    // Teks sudah diformat oleh backend, kita tinggal tampilkan.
    return (
      <div>
        <p className="fs-5">
          <strong>{hasil.nama_penyakit}</strong>
        </p>
        <div className="progress" style={{ height: "25px" }}>
          <div className="progress-bar bg-warning text-dark" role="progressbar" style={{ width: `${hasil.keyakinan}%` }} aria-valuenow={hasil.keyakinan} aria-valuemin="0" aria-valuemax="100">
            Tingkat Keyakinan: {hasil.keyakinan}%
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-5 text-center">Hasil Diagnosis</h2>
      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0 fw-semibold">Identitas</h5>
        </div>
        <div className="card-body">{/* ... Identitas tidak berubah ... */}</div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0 fw-semibold">Hasil Diagnosis</h5>
        </div>
        <div className="card-body">{renderHasilPenyakit()}</div>
      </div>
      <div className="card shadow-sm mb-4">
        <div className="card-header">
          <h5 className="mb-0 fw-semibold">Solusi</h5>
        </div>
        <div className="card-body">
          <div dangerouslySetInnerHTML={{ __html: hasil.solusi.replace(/\n/g, "<br />") }} />
        </div>
      </div>
      <div className="text-center mt-5">
        <button className="btn btn-danger px-5 py-2 rounded-pill me-3" onClick={() => window.print()}>
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
