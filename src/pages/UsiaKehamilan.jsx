// src/components/PregnancyAgeForm.js
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const PregnancyAgeForm = ({ onNext }) => {
  const [selectedTrimester, setSelectedTrimester] = useState(null);

  const handleSelect = (value) => {
    setSelectedTrimester(value);
  };

  const handleSubmit = () => {
    if (selectedTrimester && onNext) {
      onNext(selectedTrimester);
    }
  };

  return (
    <Container className="py-5">
      <h2 className="fw-bold mb-4">Usia Kehamilan</h2>
      <Form>
        {[1, 2, 3].map((trimester) => (
          <div key={trimester} className="d-flex align-items-center border-bottom py-2">
            <Form.Check type="radio" id={`trimester-${trimester}`} name="trimester" value={trimester} checked={selectedTrimester === trimester} onChange={() => handleSelect(trimester)} className="me-2" />
            <Form.Label htmlFor={`trimester-${trimester}`} className="m-0">
              {` ${trimester}. Trimester ${trimester}`}
            </Form.Label>
          </div>
        ))}
        <div className="text-end mt-3">
          <Button variant="danger" onClick={handleSubmit}>
            Selanjutnya
          </Button>
        </div>
      </Form>

      <div className="mt-5">
        <h3 className="fw-bold">Catatan</h3>
        <p className="text-justify">
          Usia kehamilan yang digunakan dibagi berdasarkan periode 40 minggu usia kehamilan atau biasa disebut dengan trimester. Trimester 1 yaitu pada usia kehamilan 1-13 minggu, trimester 2 pada usia kehamilan 14-26 minggu, dan trimester
          3 yaitu 27-40 minggu. Pada Tabel 3 merupakan data usia kehamilan berdasarkan trimester.
        </p>
      </div>
    </Container>
  );
};

export default PregnancyAgeForm;
