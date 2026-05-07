"use client";

import { useState, useEffect } from "react";
import styles from "../Tryout.module.css";
import Link from "next/link";

export default function CATSimulationPage() {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 minutes in seconds
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [doubts, setDoubts] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const handleSelectAnswer = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const toggleDoubt = () => {
    setDoubts({ ...doubts, [currentQuestion]: !doubts[currentQuestion] });
  };

  return (
    <main className={styles.simContainer}>
      <header className={styles.simHeader}>
        <div className={styles.headerLeft}>
          <Link href="/tryout" style={{ color: "white", textDecoration: "none", fontWeight: 700 }}>
            ← Keluar
          </Link>
          <div className={styles.simTitle}>Simulasi CAT CPNS - Paket Gratis</div>
        </div>
        <div className={styles.timer}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          {formatTime(timeLeft)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Ahmad Fauzi</div>
            <div style={{ fontSize: '0.75rem', opacity: 0.7 }}>Peserta #12405</div>
          </div>
          <div style={{ width: 40, height: 40, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👤</div>
        </div>
      </header>

      <section className={styles.questionArea}>
        <div className={styles.qHeader}>
          <div className={styles.qNumber}>Pertanyaan {currentQuestion} dari 100</div>
          <div style={{ fontSize: '0.9rem', color: 'var(--on-surface-variant)' }}>Bobot: 5 Poin</div>
        </div>

        <p className={styles.qText}>
          Pemerintah Indonesia menerapkan kebijakan Pemberlakuan Pembatasan Kegiatan Masyarakat (PPKM) untuk menekan laju penyebaran virus COVID-19. Kebijakan ini didasarkan pada prinsip keselamatan rakyat sebagai hukum tertinggi. Hal ini sejalan dengan pengamalan nilai Pancasila, khususnya sila ke...
        </p>

        <div className={styles.optionsList}>
          {["A", "B", "C", "D", "E"].map((opt) => {
            const text = [
              "Ketuhanan Yang Maha Esa",
              "Kemanusiaan yang adil dan beradab",
              "Persatuan Indonesia",
              "Kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan",
              "Keadilan sosial bagi seluruh rakyat Indonesia"
            ][opt.charCodeAt(0) - 65];

            return (
              <div 
                key={opt}
                className={`${styles.optionItem} ${answers[currentQuestion] === opt ? styles.selected : ""}`}
                onClick={() => handleSelectAnswer(opt)}
              >
                <div className={styles.optionLabel}>{opt}</div>
                <div className={styles.optionText}>{text}</div>
              </div>
            );
          })}
        </div>
      </section>

      <aside className={styles.sidebar}>
        <div className={styles.navTitle}>
          <span>Navigasi Soal</span>
          <span style={{ fontSize: '0.8rem', color: 'var(--secondary)' }}>{Object.keys(answers).length}/100 Terjawab</span>
        </div>
        <div className={styles.qGrid}>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((n) => (
            <div 
              key={n}
              className={`
                ${styles.gridItem} 
                ${currentQuestion === n ? styles.active : ""} 
                ${answers[n] ? styles.answered : ""}
                ${doubts[n] ? styles.doubt : ""}
              `}
              onClick={() => setCurrentQuestion(n)}
            >
              {n}
            </div>
          ))}
        </div>
        
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ width: 12, height: 12, backgroundColor: '#040d24', borderRadius: 2 }}></div> Aktif
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ width: 12, height: 12, backgroundColor: '#006d3a', borderRadius: 2 }}></div> Terjawab
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem' }}>
              <div style={{ width: 12, height: 12, backgroundColor: '#f1c40f', borderRadius: 2 }}></div> Ragu-ragu
           </div>
        </div>
      </aside>

      <footer className={styles.simFooter}>
        <div className={styles.footerActions}>
          <button 
            className={styles.navBtn}
            onClick={() => setCurrentQuestion(Math.max(1, currentQuestion - 1))}
            disabled={currentQuestion === 1}
          >
            ← Sebelumnya
          </button>
          <button 
            className={`${styles.navBtn} ${styles.doubtBtn}`}
            onClick={toggleDoubt}
          >
            {doubts[currentQuestion] ? "Batal Ragu" : "Ragu-ragu"}
          </button>
        </div>

        <div className={styles.footerActions}>
          <button 
            className={`${styles.navBtn} ${styles.primaryNav}`}
            onClick={() => setCurrentQuestion(Math.min(100, currentQuestion + 1))}
          >
            {currentQuestion === 100 ? "Selesai Ujian" : "Selanjutnya →"}
          </button>
        </div>
      </footer>
    </main>
  );
}
