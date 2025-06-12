const Home = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="fw-bold">
            Sumber Informasi <br />
            Terpercaya Untuk <br />
            Ibu Hamil
          </h1>
          <p className="mt-3">
            Temukan Diagnosa Penyakit Pada Ibu Hamil,
            <br />
            Informasi tentang kehamilan dan artikel
            <br />
            bermanfaat untuk menjaga kesehatan ibu hamil
          </p>
          <button className="btn btn-danger px-4 mt-3">Periksa Sekarang</button>
        </div>
        <div className="col-md-6 text-center">
          <img src="/images/home1.png" alt="Ibu Hamil" className="img-fluid w-100" style={{ maxHeight: "600px" }} />
        </div>

        <section className="diagnosa-step mb-5 py-5">
          <h2 className="text-center mb-5">Bagaimana cara diagnosa</h2>
          <div className="row text-center">
            {/* Kartu 1 */}
            <div className="col-md-4 mb-3">
              <div>
                <img src="images/card_id.png" alt="Masukan Data Diri" style={{ width: "60px", height: "60px" }} className="mx-auto mb-3" />
                <h4 className="fw-bold">Masukan Data Diri</h4>
                <p>Identitas ibu hamil sangat penting dan harus diisi dengan cermat saat pendaftaran.</p>
              </div>
            </div>

            {/* Kartu 2 */}
            <div className="col-md-4 mb-3">
              <div>
                <img src="images/dokument_gejala.png" alt="Identifikasi Gejala" style={{ width: "60px", height: "60px" }} className="mx-auto mb-3" />
                <h4 className="fw-bold">Identifikasi Gejala</h4>
                <p>Sistem akan menanyakan gejala-gejala yang dialami ibu hamil sebagai identifikasi awal.</p>
              </div>
            </div>

            {/* Kartu 3 */}
            <div className="col-md-4 mb-3">
              <div>
                <img src="images/hasil.png" alt="Hasil Diagnosa" style={{ width: "60px", height: "60px" }} className="mx-auto mb-3" />
                <h4 className="fw-bold">Hasil Diagnosa</h4>
                <p>Sistem akan memberikan hasil diagnosa lengkap dan saran penanganan yang tepat.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container py-5">
          <div className="row align-item-center">
            <div className="col-md-6 text-start">
              <h2 className="fw-bold mb-4">Mom's Care</h2>
              <p className="mb-5 text-muted">
                Mom's Care adalah platform digital yang dirancang khusus untuk membantu ibu hamil dalam menjaga kesehatan mereka. Dengan menggunakan teknologi terkini, Bunda Hati memberikan informasi yang akurat dan terpercaya.
              </p>
              <ul className="list-unstyled">
                <li className="mb-3">
                  ✅ <strong>Analisis Faktor Resiko</strong>
                </li>
                <li className="mb-3">
                  ✅ <strong>Algoritma AI yang Bagus</strong>
                </li>
                <li className="mb-3">
                  ✅ <strong>Algoritma AI yang Bagusar</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-6 text-center">
              <img src="/images/dokter.png" alt="dokter" className="img-fluid" style={{ maxHeight: "400px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
