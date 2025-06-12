// server.js (Versi Final dengan Hardcoded Rules, CF, dan Semua Endpoint Lengkap)

import express from "express";
import mysql from "mysql2/promise";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "sistem_pakar_ibu_hamil",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

console.log("MySQL Connection Pool berhasil dibuat.");

const aturanPakarCF = {
  1: {
    kodePenyakit: "P01",
    trimester: ["T01", "T02", "T03"],
    gejala: [
      { kode: "G28", cf: 0.7 },
      { kode: "G32", cf: 0.8 },
      { kode: "G35", cf: 0.5 },
      { kode: "G36", cf: 0.6 },
      { kode: "G38", cf: 0.4 },
      { kode: "G39", cf: 0.9 },
      { kode: "G40", cf: 0.6 },
    ],
  },
  2: {
    kodePenyakit: "P02",
    trimester: ["T02", "T03"],
    gejala: [
      { kode: "G03", cf: 0.8 },
      { kode: "G04", cf: 0.9 },
      { kode: "G07", cf: 0.7 },
      { kode: "G08", cf: 0.6 },
      { kode: "G21", cf: 0.5 },
      { kode: "G29", cf: 0.8 },
      { kode: "G30", cf: 0.3 },
      { kode: "G36", cf: 0.4 },
      { kode: "G37", cf: 0.4 },
      { kode: "G41", cf: 0.7 },
      { kode: "G43", cf: 0.8 },
      { kode: "G59", cf: 0.5 },
    ],
  },
  3: {
    kodePenyakit: "P03",
    trimester: ["T02", "T03"],
    gejala: [
      { kode: "G11", cf: 0.9 },
      { kode: "G12", cf: 0.7 },
      { kode: "G13", cf: 0.8 },
      { kode: "G17", cf: 0.8 },
      { kode: "G18", cf: 0.6 },
      { kode: "G19", cf: 0.5 },
      { kode: "G22", cf: 0.5 },
    ],
  },
  4: {
    kodePenyakit: "P04",
    trimester: ["T01"],
    gejala: [
      { kode: "G01", cf: 0.8 },
      { kode: "G21", cf: 0.4 },
      { kode: "G31", cf: 0.9 },
      { kode: "G44", cf: 0.7 },
      { kode: "G45", cf: 0.5 },
      { kode: "G48", cf: 0.8 },
      { kode: "G49", cf: 0.6 },
      { kode: "G51", cf: 0.7 },
      { kode: "G52", cf: 0.4 },
    ],
  },
  5: {
    kodePenyakit: "P05",
    trimester: ["T01"],
    gejala: [
      { kode: "G06", cf: 0.9 },
      { kode: "G16", cf: 0.6 },
      { kode: "G24", cf: 0.8 },
      { kode: "G26", cf: 0.8 },
      { kode: "G27", cf: 0.7 },
      { kode: "G33", cf: 0.7 },
    ],
  },
  6: {
    kodePenyakit: "P06",
    trimester: ["T01", "T02"],
    gejala: [
      { kode: "G02", cf: 0.7 },
      { kode: "G14", cf: 0.9 },
      { kode: "G15", cf: 0.9 },
      { kode: "G25", cf: 0.5 },
      { kode: "G30", cf: 0.4 },
      { kode: "G34", cf: 0.6 },
      { kode: "G42", cf: 0.5 },
      { kode: "G44", cf: 0.5 },
      { kode: "G53", cf: 0.4 },
      { kode: "G54", cf: 0.6 },
      { kode: "G55", cf: 0.8 },
      { kode: "G56", cf: 0.8 },
    ],
  },
  7: {
    kodePenyakit: "P07",
    trimester: ["T01", "T02", "T03"],
    gejala: [
      { kode: "G24", cf: 0.6 },
      { kode: "G50", cf: 0.5 },
      { kode: "G57", cf: 0.9 },
      { kode: "G58", cf: 0.8 },
      { kode: "G59", cf: 0.7 },
      { kode: "G60", cf: 0.8 },
      { kode: "G61", cf: 0.7 },
      { kode: "G62", cf: 0.8 },
    ],
  },
  8: {
    kodePenyakit: "P08",
    trimester: ["T02", "T03"],
    gejala: [
      { kode: "G05", cf: 0.9 },
      { kode: "G09", cf: 0.7 },
      { kode: "G39", cf: 0.5 },
      { kode: "G41", cf: 0.4 },
      { kode: "G46", cf: 0.8 },
      { kode: "G47", cf: 0.8 },
      { kode: "G58", cf: 0.6 },
    ],
  },
  9: {
    kodePenyakit: "P09",
    trimester: ["T01", "T02"],
    gejala: [
      { kode: "G02", cf: 0.8 },
      { kode: "G10", cf: 0.9 },
      { kode: "G12", cf: 0.7 },
      { kode: "G13", cf: 0.7 },
      { kode: "G17", cf: 0.6 },
      { kode: "G19", cf: 0.5 },
      { kode: "G20", cf: 0.8 },
      { kode: "G22", cf: 0.5 },
    ],
  },
  10: {
    kodePenyakit: "P10",
    trimester: ["T01", "T02"],
    gejala: [
      { kode: "G02", cf: 0.7 },
      { kode: "G10", cf: 0.9 },
      { kode: "G17", cf: 0.6 },
      { kode: "G20", cf: 0.8 },
      { kode: "G23", cf: 0.8 },
      { kode: "G63", cf: 0.9 },
      { kode: "G64", cf: 0.9 },
      { kode: "G65", cf: 0.7 },
      { kode: "G66", cf: 0.8 },
      { kode: "G67", cf: 0.7 },
    ],
  },
};

// =================================================================
// --- ENDPOINT API ---
// =================================================================

// Endpoint untuk mengambil data trimester
app.get("/api/trimester", async (req, res) => {
  try {
    const [rows] = await dbPool.query("SELECT kode_trimester, keterangan FROM trimester ORDER BY kode_trimester");
    const dataTrimesterLengkap = rows.map((trimester) => {
      let deskripsiMinggu = "";
      switch (trimester.kode_trimester) {
        case "T01":
          deskripsiMinggu = "(Usia kehamilan 1-13 minggu)";
          break;
        case "T02":
          deskripsiMinggu = "(Usia kehamilan 14-26 minggu)";
          break;
        case "T03":
          deskripsiMinggu = "(Usia kehamilan 27-40 minggu)";
          break;
      }
      return { kode: trimester.kode_trimester, label: `${trimester.keterangan} ${deskripsiMinggu}`.trim() };
    });
    res.json(dataTrimesterLengkap);
  } catch (error) {
    console.error("Error saat mengambil data trimester:", error);
    res.status(500).json({ message: "Error mengambil data trimester dari database" });
  }
});

// Endpoint untuk mengambil GEJALA berdasarkan Trimester
app.get("/api/gejala/:kodeTrimester", async (req, res) => {
  const { kodeTrimester } = req.params;
  const gejalaCodes = new Set();
  for (const ruleId in aturanPakarCF) {
    const rule = aturanPakarCF[ruleId];
    if (rule.trimester.includes(kodeTrimester)) {
      rule.gejala.forEach((g) => gejalaCodes.add(g.kode));
    }
  }
  const uniqueGejalaCodes = Array.from(gejalaCodes);
  if (uniqueGejalaCodes.length === 0) return res.json([]);
  try {
    const placeholders = uniqueGejalaCodes.map(() => "?").join(",");
    const query = `SELECT kode_gejala, nama_gejala FROM gejala WHERE kode_gejala IN (${placeholders}) ORDER BY kode_gejala`;
    const [rows] = await dbPool.query(query, uniqueGejalaCodes);
    res.json(rows);
  } catch (error) {
    console.error("Error fetching gejala details:", error);
    res.status(500).json({ message: "Gagal mengambil detail gejala dari DB." });
  }
});

// Endpoint Diagnosis dengan Logika Baru (FC + CF Bertingkat)
app.post("/api/diagnosis", async (req, res) => {
  const { identitas, usiaKehamilan, gejala: gejalaPasien } = req.body;
  if (!identitas || !usiaKehamilan || !gejalaPasien || gejalaPasien.length === 0) {
    return res.status(400).json({ message: "Data tidak lengkap." });
  }
  let connection;
  try {
    connection = await dbPool.getConnection();
    await connection.beginTransaction();
    const userQuery = "INSERT INTO user (nama, alamat, nomor_telepon) VALUES (?, ?, ?)";
    const [userResult] = await connection.query(userQuery, [identitas.nama, identitas.alamat, identitas.nomorTelepon]);
    const newUserId = userResult.insertId;

    let kodePenyakitTerdiagnosis = null;
    for (const ruleId in aturanPakarCF) {
      const rule = aturanPakarCF[ruleId];
      const gejalaRuleCodes = rule.gejala.map((g) => g.kode);
      const trimesterCocok = rule.trimester.includes(usiaKehamilan);
      const semuaGejalaCocok = gejalaRuleCodes.every((gRule) => gejalaPasien.includes(gRule));
      if (trimesterCocok && semuaGejalaCocok) {
        kodePenyakitTerdiagnosis = rule.kodePenyakit;
        break;
      }
    }

    if (kodePenyakitTerdiagnosis) {
      const diagnosaQuery = "INSERT INTO diagnosa (id_user, kode_penyakit) VALUES (?, ?)";
      await connection.query(diagnosaQuery, [newUserId, kodePenyakitTerdiagnosis]);
      const [penyakitResult] = await dbPool.query("SELECT * FROM penyakit WHERE kode_penyakit = ?", [kodePenyakitTerdiagnosis]);
      await connection.commit();
      return res.json({ ...penyakitResult[0], keyakinan: 100 });
    }

    const cfScores = {};
    for (const ruleId in aturanPakarCF) {
      const rule = aturanPakarCF[ruleId];
      if (!rule.trimester.includes(usiaKehamilan)) continue;
      let cfKombinasi = 0;
      rule.gejala.forEach((gejalaAturan) => {
        if (gejalaPasien.includes(gejalaAturan.kode)) {
          cfKombinasi = cfKombinasi + gejalaAturan.cf * (1 - cfKombinasi);
        }
      });
      if (cfKombinasi > 0) {
        if (!cfScores[rule.kodePenyakit] || cfKombinasi > cfScores[rule.kodePenyakit]) {
          cfScores[rule.kodePenyakit] = cfKombinasi;
        }
      }
    }

    let penyakitTeratas = null;
    let skorTertinggi = 0;
    for (const kodePenyakit in cfScores) {
      if (cfScores[kodePenyakit] > skorTertinggi) {
        skorTertinggi = cfScores[kodePenyakit];
        penyakitTeratas = kodePenyakit;
      }
    }

    if (penyakitTeratas && skorTertinggi >= 0.6) {
      const diagnosaQuery = "INSERT INTO diagnosa (id_user, kode_penyakit) VALUES (?, ?)";
      await connection.query(diagnosaQuery, [newUserId, penyakitTeratas]);
      const [penyakitDb] = await dbPool.query("SELECT * FROM penyakit WHERE kode_penyakit = ?", [penyakitTeratas]);
      const hasilPenyakit = penyakitDb[0];
      let deskripsiKeyakinan = "";
      if (skorTertinggi > 0.8) {
        deskripsiKeyakinan = `Kemungkinan besar Anda mengalami ${hasilPenyakit.nama_penyakit}`;
      } else {
        deskripsiKeyakinan = `Kemungkinan sedang Anda mengalami ${hasilPenyakit.nama_penyakit}`;
      }
      await connection.commit();
      return res.json({
        kode_penyakit: hasilPenyakit.kode_penyakit,
        nama_penyakit: deskripsiKeyakinan,
        solusi: hasilPenyakit.solusi,
        keyakinan: Math.round(skorTertinggi * 100),
      });
    } else {
      await connection.rollback();
      res.json({
        kode_penyakit: null,
        nama_penyakit: "Tidak Ada Penyakit yang Terdiagnosis",
        solusi: "Penyakit dengan keyakinan < 60% tidak ditampilkan karena kurang meyakinkan. Sangat disarankan untuk segera berkonsultasi dengan dokter atau bidan.",
        keyakinan: Math.round(skorTertinggi * 100),
      });
    }
  } catch (error) {
    if (connection) await connection.rollback();
    console.error("Error selama proses diagnosis:", error);
    res.status(500).json({ message: "Terjadi kesalahan pada server." });
  } finally {
    if (connection) connection.release();
  }
});

app.listen(port, () => {
  console.log(`🚀 Server berjalan di http://localhost:${port}`);
});
