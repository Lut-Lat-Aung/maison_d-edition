import Image from 'next/image';
import styles from './Home.module.css'; // We'll use a CSS module for styling

export default function Home() {
  return (
    <div>
      {/* Parallax Section 1 */}
      <section className={styles.parallax} style={{ backgroundImage: "url('')" }}>
        <div className={styles.content}>
          <h1>Welcome to Open Eye Publishing House</h1>
          <p>Explore a universe of literature and creativity</p>
        </div>
      </section>

      {/* Regular Content Section */}
      <section className={styles.normal}>
        <h2>About Us</h2>
        <p>
          Open Eye Publishing House is dedicated to bringing poems, light novels, dramas, educational, and astrology books to readers.
          Our mission is to promote literature and support creativity in Myanmar and beyond.
        </p>
      </section>

      {/* Parallax Section 2 */}
      <section className={styles.parallax} style={{ backgroundImage: "url('')" }}>
        <div className={styles.content}>
          <h1>Our Categories</h1>
          <p>Browse through Poems, Novels, Astrology, and more!</p>
        </div>
      </section>

      {/* More Regular Content */}
      <section className={styles.normal}>
        <h2>Contact Us</h2>
        <p>
          Reach out to Open Eye Publishing for any inquiries. We’d love to hear from authors, readers, and partners alike!
        </p>
      </section>
    </div>
  );
}
