import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import { Double } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('library'); // Use your database name
  const collection = db.collection('books'); // Ensure the collection name is correct

  if (req.method === 'GET') {
    // Fetch all books
    try {
      const books = await collection.find({}).toArray();
      res.status(200).json(books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ message: 'Failed to fetch books', error });
    }
  } else if (req.method === 'POST') {
    // Add a new book
    try {
      const { title, author, price, image } = req.body;

      if (!title || !author || !price || !image) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      const result = await collection.insertOne({ 
        title, 
        author, 
        price: new Double(parseFloat(price)), // Convert price to Double
        image 
      });
      const book = await collection.findOne({ _id: result.insertedId });
      res.status(201).json({ message: 'Book added successfully', book });
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({ message: 'Failed to add book', error });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
}
