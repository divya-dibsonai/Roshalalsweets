// scripts/upload-to-mux.mjs
// Usage: node --env-file=.env.local scripts/upload-to-mux.mjs

import Mux from '@mux/mux-node';
import fs from 'fs';
import path from 'path';

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

const ROOT = '/Users/dibsonai/Desktop/GALLERY';
const LOG_FILE = './uploaded-log.json';

const FILES = [
  { category: 'Bakery', file: '18288058702269564.mp4' },
  { category: 'Festivals', file: 'Diwali.mp4' },
  { category: 'Festivals', file: 'Karwa Chauth.mp4' },
  { category: 'Kitchen', file: 'Imarti Making.mp4' },
  { category: 'Kitchen', file: 'Laddoo Making.mp4' },
  { category: 'Restaurant', file: '17845714851650546.mp4' },
  { category: 'Store', file: '17885648450971009.mp4' },
  { category: 'Store', file: '17888659413122016.mp4' },
  { category: 'About Us - Journey', file: 'journey.mp4', folder: 'About Us' },
  { category: 'About Us - Domains', file: 'what we do.mp4', folder: 'About Us' },
];

function loadLog() {
  if (fs.existsSync(LOG_FILE)) {
    return JSON.parse(fs.readFileSync(LOG_FILE, 'utf-8'));
  }
  return {};
}

function saveLog(log) {
  fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));
}

async function uploadFile(filePath, category, fileName) {
  const upload = await mux.video.uploads.create({
    cors_origin: '*',
    new_asset_settings: {
      playback_policy: ['public'],
      video_quality: 'basic',
      meta: {
        title: `${category} — ${fileName}`,
        creator_id: category,
      },
    },
  });

  const fileBuffer = fs.readFileSync(filePath);
  const res = await fetch(upload.url, {
    method: 'PUT',
    body: fileBuffer,
  });

  if (!res.ok) {
    throw new Error(`Upload failed for ${fileName}: ${res.status} ${res.statusText}`);
  }

  console.log(`Uploaded: [${category}] ${fileName}`);
}

async function main() {
  const log = loadLog();

  for (const { category, file, folder } of FILES) {
    const key = `${category}/${file}`;

    if (log[key] === 'done') {
      console.log(`Skipping (already uploaded): ${key}`);
      continue;
    }

    const filePath = path.join(ROOT, folder || category, file);

    if (!fs.existsSync(filePath)) {
      console.error(`File not found, skipping: ${filePath}`);
      continue;
    }

    try {
      await uploadFile(filePath, category, file);
      log[key] = 'done';
      saveLog(log);
    } catch (err) {
      console.error(`Failed: ${key} — ${err.message}`);
      if (err.message.includes('Free plan is limited')) {
        console.error('Hit the 10-asset free plan limit. Stop here and check dashboard.mux.com/video.');
        return;
      }
    }
    await new Promise((r) => setTimeout(r, 500));
  }

  console.log('All done. Check dashboard.mux.com for processing status.');
}

main();
