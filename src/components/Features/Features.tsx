import styles from './Features.module.css';

const features = [
  {
    title: 'Analisis Pintar',
    description: 'Laporan mendalam tentang performamu tiap materi. Identifikasi titik lemah secara instan untuk efisiensi belajar maksimal.',
    icon: '📊'
  },
  {
    title: 'Update Soal 2026',
    description: 'Bank soal yang selalu diperbarui mengikuti regulasi terbaru BKN. Berbasis FR (Field Report) ujian tahun-tahun sebelumnya.',
    icon: '📝'
  },
  {
    title: 'Akses Selamanya',
    description: 'Beli sekali, pelajari kapan saja. Tidak ada biaya langganan bulanan yang membebani. Fokus penuh pada persiapan.',
    icon: '♾️'
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="headline-lg">Segala yang Anda Butuhkan</h2>
          <p className="body-md">Satu platform untuk persiapan lengkap, mulai dari materi dasar hingga simulasi ujian sesungguhnya.</p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className="headline-md">{feature.title}</h3>
              <p className="body-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
