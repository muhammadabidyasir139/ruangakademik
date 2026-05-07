import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features/Features";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      
      {/* Simple Program Section */}
      <section style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="headline-lg">Program Unggulan Kami</h2>
            <p className="body-md" style={{ color: 'var(--on-surface-variant)', marginTop: '1rem' }}>
              Temukan kurikulum terbaik yang dirancang khusus untuk kesuksesan akademik dan karirmu.
            </p>
          </div>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              { id: 'cpns', title: 'CPNS', desc: 'Persiapan lengkap menghadapi seleksi kompetensi dasar dan bidang.' },
              { id: 'utbk', title: 'UTBK', desc: 'Strategi jitu tembus kampus impian dengan bank soal terupdate.' },
              { id: 'toefl', title: 'TOEFL', desc: 'Tingkatkan skor kemahiran bahasa Inggrismu untuk karir.' }
            ].map((p, i) => (
              <Link key={i} href={`/program/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ 
                  backgroundColor: 'white', 
                  padding: '2rem', 
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--outline-variant)',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }} className="program-card">
                  <h3 className="headline-md" style={{ marginBottom: '1rem' }}>{p.title}</h3>
                  <p className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>{p.desc}</p>
                  <div style={{ 
                    marginTop: '1.5rem', 
                    color: 'var(--secondary)', 
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    Lihat Detail <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'var(--primary)', 
        color: 'white', 
        padding: '5rem 0 2rem 0' 
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
