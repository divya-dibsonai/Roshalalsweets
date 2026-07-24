import fs from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.webp'];
const GALLERY_ROOT = path.join(process.cwd(), 'public', 'images', 'gallery');

export async function GET() {
  const result: Record<string, string[]> = {};

  if (!fs.existsSync(GALLERY_ROOT)) {
    return Response.json(result);
  }

  const categories = fs.readdirSync(GALLERY_ROOT).filter((f) =>
    fs.statSync(path.join(GALLERY_ROOT, f)).isDirectory()
  );

  for (const category of categories) {
    const folderPath = path.join(GALLERY_ROOT, category);
    const files = fs.readdirSync(folderPath).filter((f) =>
      IMAGE_EXTENSIONS.includes(path.extname(f).toLowerCase())
    );
    if (files.length > 0) {
      result[category] = files;
    }
  }

  return Response.json(result);
}
