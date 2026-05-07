import Navbar from "@/components/Navbar/Navbar";
import Link from "next/link";
import styles from "../auth.module.css";

export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <div className={styles.authContainer}>
        <div className={styles.authCard}>
          <div className={styles.header}>
            <h1 className="headline-lg">Selamat Datang</h1>
            <p className="body-sm">Silakan masuk ke akun RuangAkademi Anda</p>
          </div>
          
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="nama@email.com" required />
            </div>
            
            <div className={styles.inputGroup}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="••••••••" required />
            </div>
            
            <button type="submit" className={styles.submitBtn}>Masuk Sekarang</button>
          </form>
          
          <div className={styles.footer}>
            Belum punya akun? <Link href="/register">Daftar di sini</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
