import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Connect to the MongoDB database
    const client = await clientPromise;
    const db = client.db("bookinfo"); // Use the database name

    // Fetch all books from the `books` collection
    const books = await db.collection("books").find({}).toArray();

    res.status(200).json(books); // Return the data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch books" });
  }
}
