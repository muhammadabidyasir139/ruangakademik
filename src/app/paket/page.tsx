import Navbar from "@/components/Navbar/Navbar";
import styles from "./Paket.module.css";
import Link from "next/link";

export default function PaketPage() {
  return (
    <main className={styles.paketPage}>
      <Navbar />

      <div className="container">
        <header className={styles.header}>
          <h1 className="display-xl">Pilih Jalur Kesuksesanmu</h1>
          <p className="body-lg">
            Dari sekadar berlatih hingga persiapan total dengan dukungan AI tercanggih di Indonesia.
          </p>
        </header>

        <div className={styles.cardsContainer}>
          {/* Paket Latihan */}
          <div className={styles.card}>
            <div className={styles.label}>Jalur Mandiri</div>
            <h2 className={styles.title}>Paket Latihan</h2>
            
            <ul className={styles.features}>
              <li className={styles.featureItem}>
                <span className={styles.icon + " " + styles.check}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Hanya dapat soal dan pengerjaan
              </li>
              <li className={styles.featureItem + " " + styles.disabled}>
                <span className={styles.icon + " " + styles.cross}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </span>
                Fitur adaptif AI
              </li>
            </ul>

            <button className={styles.button}>Coba Sekarang</button>
          </div>

          {/* Paket Premium */}
          <div className={styles.card + " " + styles.premium}>
            <div className={styles.badge}>Rekomendasi</div>
            <div className={styles.label}>Jalur Intensif</div>
            <h2 className={styles.title}>Paket Premium (1 Bulan)</h2>
            
            <ul className={styles.features}>
              <li className={styles.featureItem}>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </span>
                Semua yang ada di paket per soal
              </li>
              <li className={styles.featureItem}>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </span>
                Fitur latihan Adaptif sesuai kelemahan
              </li>
              <li className={styles.featureItem}>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </span>
                Analisis kelemahan & strategi lolos
              </li>
              <li className={styles.featureItem}>
                <span className={styles.icon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </span>
                Update soal terbaru
              </li>
            </ul>

            <button className={styles.button}>Beli Paket Premium</button>
          </div>
        </div>

        {/* AI Analysis Section */}
        <section className={styles.aiSection}>
          <div className={styles.aiContent}>
            <span className={styles.aiTag}>Smart AI Analysis</span>
            <h2 className={styles.aiTitle}>Analisis Belajar yang Memahami Anda</h2>
            <p className={styles.aiDesc}>
              Sistem kami melacak setiap klik dan waktu pengerjaan Anda. Dapatkan rekomendasi materi yang tepat sasaran untuk menutup celah nilai Anda.
            </p>
          </div>

          <div className={styles.aiCard}>
            <div className={styles.reportHeader}>
              <div className={styles.reportTitle}>
                <div className={styles.reportIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Laporan Harian</div>
                  <div style={{ fontSize: '0.7rem', opacity: 0.6 }}>Update 2 menit yang lalu</div>
                </div>
              </div>
              <div className={styles.accuracy}>92% Akurasi</div>
            </div>

            <div className={styles.focusArea}>
              <h4>⚠️ Fokus Area</h4>
              <p>Kamu lemah di <strong>deret angka</strong>, pelajari materi ini!</p>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statLabel}>TIU Score</div>
                <div className={styles.statValue}>145<span>/175</span></div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statLabel}>Speed</div>
                <div className={styles.statValue}>42s<span>/soal</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'var(--primary)', 
        color: 'white', 
        padding: '5rem 0 2rem 0',
        marginTop: '8rem'
      }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '4rem',
            marginBottom: '4rem'
          }}>
            <div>
              <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>RuangAkademi</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
                Platform persiapan CPNS terbaik di Indonesia. Kami berkomitmen menyediakan edukasi berkualitas dan terjangkau.
              </p>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Fitur</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                <li>Paket Belajar</li>
                <li>Tryout Gratis</li>
                <li>Analisis Skor</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'white', marginBottom: '1.5rem' }}>Kontak</h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                <li>WhatsApp: 0812-xxxx-xxxx</li>
                <li>Instagram: @ruangakademi</li>
                <li>Email: cs@ruangakademi.id</li>
              </ul>
            </div>
          </div>
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            paddingTop: '2rem', 
            textAlign: 'center',
            fontSize: '0.875rem',
            color: 'rgba(255,255,255,0.5)'
          }}>
            © 2024 RuangAkademi. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
