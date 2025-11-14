
import mongoose from 'mongoose';
const MONGODB_URI = process.env.MONGODB_URI as string;
if (!MONGODB_URI) throw new Error('Add MONGODB_URI');

let cached = (global as any).mongoose || { conn: null };
export async function connectToDB() {
  if (cached.conn) return cached.conn;
  cached.conn = await mongoose.connect(MONGODB_URI);
  (global as any).mongoose = cached;
  return cached.conn;
}
