import Link from 'next/link';
import styles from './Library.module.css';
import Navbar from '../component/navbar';

export default function Library() {
  const books = [
    { 
      title: 'Poetry Collection', 
      author: 'John Doe', 
      price: '$10', 
      image: '/image/welcome.png' // Place images in the public folder 
    },
    { 
      title: 'Astrology Basics', 
      author: 'Jane Smith', 
      price: '$15', 
      image: '/image/stairs.png' 
    },
    { 
      title: 'Light Novel Vol. 1', 
      author: 'Alice Johnson', 
      price: '$12', 
      image: '/image/assassincreed.jpg' 
    },
    { 
      title: 'Drama Anthology', 
      author: 'Chris Lee', 
      price: '$20', 
      image: '/image/category.png' 
    },
    { 
      title: 'Educational Insights', 
      author: 'Emily Davis', 
      price: '$18', 
      image: '/image/magicforest.jpg' 
    },
    { 
      title: 'Educational Insights', 
      author: 'Emily Davis', 
      price: '$18', 
      image: '/image/stairs.png' 
    },
    { 
      title: 'Educational Insights', 
      author: 'Emily Davis', 
      price: '$18', 
      image: '/image/magicforest.jpg' 
    },
    { 
      title: 'Educational Insights', 
      author: 'Emily Davis', 
      price: '$18', 
      image: '/image/magicforest.jpg' 
    },
    { 
      title: 'Educational Insights', 
      author: 'Emily Davis', 
      price: '$18', 
      image: '/image/magicforest.jpg' 
    },
  ];

  return (
    <div>
      <Navbar />
      <div className={styles.library}>
        <h1>Library</h1>
        <p>Explore our collection of books</p>
        <div className={styles.bookGrid}>
          {books.map((book, index) => (
            <div key={index} className={styles.bookItem}>
              <img src={book.image} alt={book.title} className={styles.bookImage} />
              <h2>{book.title}</h2>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Price:</strong> {book.price}</p>
            </div>
          ))}
        </div>
        <Link href="/">
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
}
