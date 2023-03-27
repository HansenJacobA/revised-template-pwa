import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const files = await fs.readdir(publicDir);
    const assets = files.map((file) => `/public/${file}`);
    res.status(200).json({ assets });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
