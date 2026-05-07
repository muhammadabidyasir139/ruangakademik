import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import styles from "./ProgramDetail.module.css";

const programData = {
  cpns: {
    title: "Paket Intensif CPNS 2026",
    subtitle: "Strategi Lulus Murni & Terukur",
    description: "Persiapan komprehensif untuk menghadapi seleksi CPNS dengan sistem pembelajaran berbasis data dan analisis AI. Kami fokus pada penguasaan materi SKD (TWK, TIU, TKP) dan persiapan SKB yang spesifik.",
    features: [
      { title: "5000+ Bank Soal", desc: "Soal terupdate mencakup SKD, SKB, dan Psikotes dengan tingkat kesulitan bervariasi." },
      { title: "Simulasi CAT", desc: "Berlatih dengan interface yang 99% mirip dengan sistem Computer Assisted Test BKN." },
      { title: "Analisis Adaptif AI", desc: "Sistem cerdas yang memetakan kemampuanmu dan memberikan rekomendasi belajar yang personal." },
      { title: "Tutor Ahli", desc: "Video pembahasan langkah-demi-langkah dari praktisi dan alumni CPNS terbaik." }
    ],
    price: "Rp 149.000",
    oldPrice: "Rp 299.000",
    image: "/images/cpns-detail.jpg" // Placeholder path
  },
  utbk: {
    title: "Paket Sukses UTBK-SNBT 2026",
    subtitle: "Tembus Perguruan Tinggi Negeri Impian",
    description: "Kurikulum yang dirancang khusus untuk menguasai Tes Potensi Skolastik (TPS) dan Literasi. Dapatkan strategi jitu untuk menaklukkan soal-soal HOTS dan menaikkan peluang lolos di PTN favorit.",
    features: [
      { title: "Bank Soal TPS & TPA", desc: "Koleksi ribuan soal TPS terbaru dengan pembahasan mendalam dan trik cepat." },
      { title: "Simulasi Real-Time", desc: "Uji kemampuanmu dengan sistem tryout nasional yang diikuti ribuan siswa lainnya." },
      { title: "Strategi Kampus", desc: "Panduan memilih jurusan berdasarkan minat, bakat, dan analisis passing grade terkini." },
      { title: "Mentoring Lulusan PTN", desc: "Berbagi pengalaman dan tips langsung dari kakak mentor yang sudah sukses di kampus impian." }
    ],
    price: "Rp 129.000",
    oldPrice: "Rp 249.000",
    image: "/images/utbk-detail.jpg" // Placeholder path
  },
  toefl: {
    title: "Master TOEFL Preparation",
    subtitle: "Capai Skor 550+ dalam 30 Hari",
    description: "Tingkatkan kemahiran bahasa Inggrismu secara sistematis. Paket ini mencakup semua bagian test (Listening, Structure, Reading) dengan fokus pada penguasaan pola soal yang sering keluar.",
    features: [
      { title: "Listening & Reading Mastery", desc: "Latihan intensif dengan audio berkualitas tinggi dan teknik scanning-skimming." },
      { title: "Sistem Scoring Akurat", desc: "Dapatkan prediksi skor TOEFL yang mendekati hasil tes asli untuk mengukur progresmu." },
      { title: "Grammar & Vocab", desc: "Modul khusus untuk memperkuat fondasi tata bahasa dan kosa kata akademis." },
      { title: "Tips & Trik Ujian", desc: "Strategi manajemen waktu dan cara menghindari jebakan soal yang umum ditemui." }
    ],
    price: "Rp 199.000",
    oldPrice: "Rp 399.000",
    image: "/images/toefl-detail.jpg" // Placeholder path
  }
};

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programData[params.slug as keyof typeof programData];

  if (!program) {
    return (
      <div className="container" style={{ padding: '5rem 0', textAlign: 'center' }}>
        <h1 className="headline-lg">Program Tidak Ditemukan</h1>
        <Link href="/" style={{ color: 'var(--secondary)', marginTop: '2rem', display: 'inline-block' }}>Kembali ke Beranda</Link>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      
      <section className={styles.hero}>
        <div className="container">
          <Link href="/" className={styles.backLink}>← Kembali</Link>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>Program Unggulan</span>
              <h1 className="display-xl">{program.title}</h1>
              <p className="body-lg" style={{ color: 'var(--on-surface-variant)', marginTop: '1rem' }}>
                {program.subtitle}
              </p>
              <div className={styles.ctaGroup}>
                <button className={styles.primaryBtn}>Daftar Sekarang</button>
                <div className={styles.priceTag}>
                  <span className={styles.oldPrice}>{program.oldPrice}</span>
                  <span className={styles.newPrice}>{program.price}</span>
                </div>
              </div>
            </div>
            <div className={styles.heroImage}>
              {/* Image will be generated/placed here */}
              <div className={styles.imagePlaceholder}>
                <span style={{ fontSize: '4rem' }}>
                  {params.slug === 'cpns' ? '🎓' : params.slug === 'utbk' ? '🏫' : '🌎'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="headline-lg">Apa yang Anda Dapatkan?</h2>
            <p className="body-md">{program.description}</p>
          </div>
          
          <div className={styles.featureGrid}>
            {program.features.map((feature, i) => (
              <div key={i} className={styles.featureCard}>
                <div className={styles.featureIcon}>✓</div>
                <div>
                  <h3 className="headline-md" style={{ fontSize: '1.25rem' }}>{feature.title}</h3>
                  <p className="body-sm" style={{ marginTop: '0.5rem' }}>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.guarantee}>
        <div className="container">
          <div className={styles.guaranteeCard}>
            <h3 className="headline-md" style={{ color: 'white' }}>Jaminan Kualitas RuangAkademi</h3>
            <p className="body-md" style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
              Kami berkomitmen memberikan materi terbaik dan terupdate. Jika materi tidak sesuai dengan silabus terbaru, kami berikan update gratis selamanya.
            </p>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <p className="body-sm" style={{ textAlign: 'center', opacity: 0.6 }}>
            © 2024 RuangAkademi. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </footer>
    </main>
  );
}
