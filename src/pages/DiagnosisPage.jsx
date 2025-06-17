// src/pages/DiagnosisPage.jsx
import React, { useState } from "react";
import FormIdentitas from "./FormIdentitas";
import UsiaKehamilanForm from "./UsiaKehamilanForm";
import IdentifikasiGejalaForm from "./IdentifikasiGejalaForm";
import HasilDiagnosis from "./HasilDiagnosis";

function DiagnosisPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    identitas: null,
    usiaKehamilan: "",
    gejala: [],
    hasilDiagnosis: null,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleIdentitasSubmit = (dataIdentitas) => {
    setFormData((prev) => ({ ...prev, identitas: dataIdentitas }));
    nextStep();
  };

  const handleUsiaKehamilanSubmit = (dataUsia) => {
    setFormData((prev) => ({ ...prev, usiaKehamilan: dataUsia }));
    nextStep();
  };

  const handleGejalaSubmit = async (dataGejala) => {
    const payload = {
      identitas: formData.identitas,
      usiaKehamilan: formData.usiaKehamilan,
      gejala: dataGejala,
    };
    setFormData((prev) => ({ ...prev, gejala: dataGejala }));

    try {
      const response = await fetch("/api/diagnosis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setFormData((prev) => ({ ...prev, hasilDiagnosis: result }));
      nextStep();
    } catch (error) {
      console.error("Error submitting diagnosis:", error);
      alert("Gagal mendapatkan diagnosis. Silakan coba lagi.");
    }
  };

  const resetDiagnosis = () => {
    setStep(1);
    setFormData({
      identitas: null,
      usiaKehamilan: "",
      gejala: [],
      hasilDiagnosis: null,
    });
  };

  const renderStep = () => {
    // ... (Fungsi renderStep tidak perlu diubah)
    switch (step) {
      case 1:
        return <FormIdentitas onSubmit={handleIdentitasSubmit} initialData={formData.identitas} />;
      case 2:
        return <UsiaKehamilanForm onSubmit={handleUsiaKehamilanSubmit} onBack={prevStep} initialData={formData.usiaKehamilan} />;
      case 3:
        return <IdentifikasiGejalaForm onSubmit={handleGejalaSubmit} onBack={prevStep} initialData={formData.gejala} kodeTrimester={formData.usiaKehamilan} />;
      case 4:
        return <HasilDiagnosis hasil={formData.hasilDiagnosis} identitas={formData.identitas} onReset={resetDiagnosis} />;
      default:
        return <FormIdentitas onSubmit={handleIdentitasSubmit} initialData={formData.identitas} />;
    }
  };

  return (
    // Menggunakan React Fragment (<>) sebagai pembungkus utama agar tidak ada div ekstra
    <>
      {/* Header ini sekarang berada di level atas, sehingga bisa full-width */}
      {step < 4 && (
        // 1. Div ini untuk background yang membentang penuh
        <div style={{ backgroundColor: "#FAF2EA", padding: "3rem 0" }}>
          {/* 2. Div .container ini untuk menengahkan TEKS di dalamnya */}
          <div className="container">
            <h2 className="fw-bold mb-4">Diagnosis penyakit</h2>
            <p className="text-muted" style={{ maxWidth: "700px" }}>
              Sebelum diagnosa penyakit pada ibu hamil, mohon isi form identitas terlebih dahulu untuk membantu kami memberikan diagnosis yang lebih akurat dan spesifik. Kami akan menjaga semua kerahasiaan informasi yang anda berikan dan
              hanya akan kami gunakan untuk kepentingan diagnosis.
            </p>
          </div>
        </div>
      )}

      {/* 3. Konten form (identitas, gejala, dll) dibungkus container terpisah */}
      <div className="container mt-5">{renderStep()}</div>
    </>
  );
}

export default DiagnosisPage;
