import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>Terpercaya Sejak 2020</div>
          <h1 className="display-xl">
            Raih Mimpi Menjadi <span>ASN</span> Tahun Depan
          </h1>
          <p className="body-lg">
            Platform belajar CPNS terlengkap dengan materi yang selalu diperbarui sesuai kisi-kisi terbaru. Raih mimpi karir Anda di instansi idaman tahun depan.
          </p>
          <div className={styles.actions}>
            <Link href="/paket" className={styles.primaryBtn}>Mulai Belajar Sekarang</Link>
            <Link href="/tryout" className={styles.secondaryBtn}>Coba Tryout Gratis</Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <strong>50k+</strong>
              <span>Siswa Aktif</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <strong>120+</strong>
              <span>Paket Soal</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.statItem}>
              <strong>98%</strong>
              <span>Kepuasan</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src="/hero-banner.png" alt="RuangAkademi Hero" className={styles.heroImage} />
          <div className={styles.floatingCard}>
            <div className={styles.cardIcon}>✅</div>
            <div>
              <strong>Lulus CPNS 2024</strong>
              <p>Kementerian Hukum & HAM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
