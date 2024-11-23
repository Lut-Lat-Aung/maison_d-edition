import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../../lib/mongodb';
import { Double,ObjectId } from 'mongodb';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const db = client.db('library'); // Database name
  const collection = db.collection('books'); // Collection name

  const { id } = req.query;

  if (!id || Array.isArray(id)) {
    res.status(400).json({ message: 'Invalid book ID' });
    return;
  }

  try {
    if (req.method === 'PUT') {
      // Update a book by ID
      const { title, author, price, image } = req.body;

      if (!title || !author || !price || !image) {
        res.status(400).json({ message: 'All fields are required' });
        return;
      }

      const result = await collection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { 
          title, 
          author, 
          price: new Double(parseFloat(price)), // Convert price to Double 
          image 
        } }
      );

      if (result.matchedCount === 0) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }

      res.status(200).json({ message: 'Book updated successfully' });
    } else if (req.method === 'DELETE') {
      // Delete a book by ID
      const result = await collection.deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        res.status(404).json({ message: 'Book not found' });
        return;
      }

      res.status(200).json({ message: 'Book deleted successfully' });
    } else {
      res.setHeader('Allow', ['PUT', 'DELETE']);
      res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (error) {
    console.error('Error in API handler:', error);
    res.status(500).json({ message: 'Internal Server Error', error });
  }
}
