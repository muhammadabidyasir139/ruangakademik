import styles from './Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link href="/">
            Ruang<span>Akademi</span>
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/paket">Paket Belajar</Link></li>
          <li><Link href="/tryout">Tryout</Link></li>
          <li><Link href="/tentang">Tentang</Link></li>
        </ul>
        <div className={styles.actions}>
          <Link href="/login" className={styles.loginBtn}>Masuk</Link>
          <Link href="/register" className={styles.registerBtn}>Daftar Sekarang</Link>
        </div>
        <button className={styles.menuToggle} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
