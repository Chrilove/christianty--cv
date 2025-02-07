import styles from '../styles/page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <img
            src="/foto.jpeg"
            alt="Profile"
            className={styles.profileImage}
          />
          
          <div>
            <h3 className={styles.sectionTitle}>Education</h3>
            <p className={styles.i}>
              <strong>Komputerisasi Akuntansi</strong>
              <br />
              Universitas Ma'soem (2023- Sekarang) <br />
            </p>
          </div>
          <br /><br /><br /><br />
          <h3 className={styles.sectionTitle}>Contact</h3>
          <ul className={styles.i}>
            <li>
              <i className="uil uil-phone"></i> +62 895 3308 76559
            </li>
            <li>
              <i className="uil uil-envelope"></i> chrilove04@gmail.com
            </li>
            <li>
              <i className="uil uil-location-point"></i> Kp. Rancasaar RT/RW 01/12 Ds.Wangisagara, Majalaya, Bandung
            </li>
          </ul>
          <br /><br /><br />
          <div>
            <h3 className={styles.sectionTitle}>Portofolio</h3>
            <p className={styles.i}>
              Check out my portfolio at{' '}
              <a href="https://christianty-s45r.vercel.app/" target="_blank" style={{ color: '#8a2be2' }}>
                portfolio.example.com
              </a>
            </p>
          </div>

    
        </div>

        {/* Right Section */}

        <div className={styles.rightSection}>

        <h2 className={styles.sectionTitle}>Christianty Nur Fhadilah</h2>
        <hr></hr>
          <div>
            <h3 className={styles.title}>About Me</h3>
            <p className={styles.text}>
            Saya adalah mahasiswa semester 4 Prodi Komputerisasi Akuntansi Fakultas Komputer di Universitas Ma'soem. Saya aktif dalam kegiatan keorganisasian
            dan aktif dalam kegiatan kepanitian Himpunan Mahasiswa Fakultas Komputer Universitas Ma'soem. 
            </p>
          </div>

          <div>
          <h3 className={styles.title}>Skills</h3>
          <ul className={styles.ul}>
            <li>
              <i className="uil uil-users-alt"></i> Mampu bekerja sendiri dan berkelompok
            </li>
            <li>
              <i className="uil uil-pen"></i> Word, Excel & Power Point
            </li>
            <li>
              <i className="uil uil-search"></i> Dapat membagi waktu dengan baik
            </li>
          </ul>
          </div>

          <div>
            <h3 className={styles.title}>Experience</h3>
            <ul className={styles.ul}>
              <li className="uil uil-briefcase-alt"> Staff Departemen OSDM Himpunan Mahasiswa FKOM (2024-2025)
              </li>
              <li className="uil uil-briefcase-alt"> PPL di SMP Al-Ma'soem Bandung (2024)
              </li>
              <li className="uil uil-briefcase-alt"> Sekretaris II Himpunan Mahasiswa FKOM
              </li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
