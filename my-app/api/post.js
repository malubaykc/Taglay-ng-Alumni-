import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then(m => m);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default async function handler(req, res) {
  await connectDB();

  if (req.method === "GET") {
    const posts = await Post.find();
    return res.status(200).json(posts);
  }

  if (req.method === "POST") {
    const post = await Post.create(req.body);
    return res.status(201).json(post);
  }

  res.status(405).json({ message: "Method not allowed" });
}
