import Navbar from './component/navbar';
import styles from './Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      
      <div >
      
      {/* Parallax Section 1 */}
      <section className={styles.parallax} style={{ backgroundImage: "url('/image/welcome.png')" }} >
      <div></div>
        <div className={styles.content}>
          <h1>Welcome to Open Eye Publishing House</h1>
          <p>Explore a universe of literature and creativity</p>
          <Link href="/library">
            <button className={styles.btn}>Explore library</button>
          </Link>
        </div>
      </section>

      {/* Regular Content Section */}
      <section className={styles.normal} id="about">
        <h2>About Us</h2>
        <p>
          Open Eye Publishing House is dedicated to bringing poems, light novels, dramas, educational, and astrology books to readers.
          Our mission is to promote literature and support creativity in Myanmar and beyond.
        </p>
      </section>

      {/* Parallax Section 2 */}
      <section className={styles.parallax} style={{ backgroundImage: "url('/image/category.png')" }} id="categories">
        <div className={styles.content} >
          <h1>Our Categories</h1>
          <p>Browse through Poems, Novels, Astrology, and more!</p>
          <button className={styles.btn}>Browse Category</button>
        </div>
      </section>

      {/* More Regular Content */}
      <section className={styles.normal} id="contact">
        <h2>Contact Us</h2>
        <p>
          Reach out to Open Eye Publishing for any inquiries. We’d love to hear from authors, readers, and partners alike!
        </p>
      </section>
      </div>
    </div>
  );
}
