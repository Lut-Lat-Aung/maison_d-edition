// app/library.tsx
import Link from 'next/link';
import styles from './Library.module.css'; // Create a CSS module for styling if needed

export default function Library() {
  const books = [
    { title: 'Poetry Collection', author: 'John Doe' },
    { title: 'Astrology Basics', author: 'Jane Smith' },
    { title: 'Light Novel Vol. 1', author: 'Alice Johnson' },
    { title: 'Drama Anthology', author: 'Chris Lee' },
    { title: 'Educational Insights', author: 'Emily Davis' },
  ];

  return (
    <div className={styles.library}>
      <h1>Library</h1>
      <p>Explore our collection of books</p>
      <ul className={styles.bookList}>
        {books.map((book, index) => (
          <li key={index} className={styles.bookItem}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
          </li>
        ))}
      </ul>
      <Link href="/">
        <button className={styles.backButton}>Back to Home</button>
      </Link>
    </div>
  );
}
