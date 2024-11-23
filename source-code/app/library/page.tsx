'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Book {
  _id?: string;
  title: string;
  author: string;
  price: string;
  image: string; // URL or image path
}

const LibraryPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [newBook, setNewBook] = useState<Partial<Book>>({
    title: '',
    author: '',
    price: '',
    image: '',
  });
  const [editingBook, setEditingBook] = useState<Partial<Book> | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch books from API
  const fetchBooks = async () => {
    try {
      const response = await axios.get('/api/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Failed to fetch books:', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Add a new book
  const addBook = async () => {
    try {
      if (!newBook.title || !newBook.author || !newBook.price) {
        alert('Please fill all fields.');
        return;
      }

      await axios.post('/api/books', newBook);
      alert('Book added successfully!');
      setNewBook({ title: '', author: '', price: '', image: '' });
      fetchBooks(); // Refresh the list
    } catch (error) {
      console.error('Failed to add book:', error);
    }
  };

  // Update an existing book
  const updateBook = async () => {
    try {
      if (!editingBook || !editingBook._id) {
        alert('Book ID is missing.');
        return;
      }

      await axios.put(`/api/books/${editingBook._id}`, editingBook);
      alert('Book updated successfully!');
      setEditingBook(null);
      setIsEditMode(false);
      fetchBooks(); // Refresh the list
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  // Delete a book
  const deleteBook = async (id: string) => {
    try {
      await axios.delete(`/api/books/${id}`);
      alert('Book deleted successfully!');
      fetchBooks(); // Refresh the list
    } catch (error) {
      console.error('Failed to delete book:', error);
    }
  };

  // Handle form submission
  const handleFormSubmit = () => {
    if (isEditMode) {
      updateBook();
    } else {
      addBook();
    }
  };

  // Set book for editing
  const onEditClick = (book: Book) => {
    setIsEditMode(true);
    setEditingBook(book);
  };

  return (
    <div className=" mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Library</h1>
      <h3 className="text-xl mb-2">{isEditMode ? 'Edit Book' : 'Add New Book'}</h3>
      
      {/* Form for adding/editing books */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={isEditMode ? editingBook?.title : newBook.title}
          onChange={(e) =>
            isEditMode
              ? setEditingBook({ ...editingBook, title: e.target.value })
              : setNewBook({ ...newBook, title: e.target.value })
          }
          className="block w-full p-2 border mb-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={isEditMode ? editingBook?.author : newBook.author}
          onChange={(e) =>
            isEditMode
              ? setEditingBook({ ...editingBook, author: e.target.value })
              : setNewBook({ ...newBook, author: e.target.value })
          }
          className="block w-full p-2 border mb-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Price"
          value={isEditMode ? editingBook?.price : newBook.price}
          onChange={(e) =>
            isEditMode
              ? setEditingBook({ ...editingBook, price: e.target.value })
              : setNewBook({ ...newBook, price: e.target.value })
          }
          className="block w-full p-2 border mb-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={isEditMode ? editingBook?.image : newBook.image}
          onChange={(e) =>
            isEditMode
              ? setEditingBook({ ...editingBook, image: e.target.value })
              : setNewBook({ ...newBook, image: e.target.value })
          }
          className="block w-full p-2 border mb-4 rounded"
          required
        />
      </div>

      <button
        onClick={handleFormSubmit}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isEditMode ? 'Update Book' : 'Add Book'}
      </button>
      {isEditMode && (
        <button
          onClick={() => {
            setIsEditMode(false);
            setEditingBook(null);
          }}
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Cancel
        </button>
      )}

      {/* List of books */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <div key={book._id} className="border p-4 rounded-lg shadow-lg">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-lg font-bold">{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => onEditClick(book)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteBook(book._id!)}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryPage;
