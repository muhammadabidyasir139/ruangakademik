import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import styles from "../auth.module.css";

export default function RegisterPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.authContainer}>
        <div className={styles.authCard} style={{ maxWidth: '600px' }}>
          <div className={styles.header}>
            <h1 className="headline-lg">Daftar Akun</h1>
            <p className="body-sm">Mulai perjalanan suksesmu bersama RuangAkademi</p>
          </div>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="fullName">Nama Lengkap</label>
              <input type="text" id="fullName" placeholder="Masukkan nama lengkap" required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="nama@email.com" required />
            </div>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label htmlFor="dob">Tanggal Lahir</label>
                <input type="date" id="dob" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="target">Tujuan Target</label>
                <select id="target" required defaultValue="">
                  <option value="" disabled>Pilih Target</option>
                  <option value="cpns">Lolos CPNS</option>
                  <option value="utbk">Tembus PTN (UTBK)</option>
                  <option value="toefl">Skor TOEFL 550+</option>
                </select>
              </div>
            </div>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="••••••••" required />
              </div>
              
              <div className={styles.inputGroup}>
                <label htmlFor="repeatPassword">Ulangi Password</label>
                <input type="password" id="repeatPassword" placeholder="••••••••" required />
              </div>
            </div>
            
            <button type="submit" className={styles.submitBtn}>Buat Akun Sekarang</button>
          </form>
          
          <div className={styles.footer}>
            Sudah punya akun? <Link href="/login">Masuk di sini</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
