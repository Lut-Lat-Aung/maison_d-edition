import Link from 'next/link';
import styles from './Navbar.module.css'; // Import a CSS module for styling if needed

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Open Eye</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">About Us</Link>
        </li>
        <li>
          <Link href="#categories">Categories</Link>
        </li>
        <li>
          <Link href="#contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}
