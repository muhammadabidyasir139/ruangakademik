import Navbar from "@/components/Navbar/Navbar";
import styles from "./Tryout.module.css";
import Link from "next/link";

export default function TryoutLandingPage() {
  return (
    <main className={styles.tryoutPage}>
      <Navbar />
      
      <div className={styles.waves}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
      </div>

      <div className={styles.landing}>
        <div className={styles.emojiContainer}>
          <span>📚</span>
          <span>🎓</span>
        </div>
        <h1 className={styles.title}>Ruang Akademik</h1>
        <p className={styles.subtitle}>Yuk, latihan UTBK!</p>
        
        <Link href="/tryout/simulasi">
          <button className={styles.ctaButton}>Mulai sekarang</button>
        </Link>
      </div>
    </main>
  );
}
