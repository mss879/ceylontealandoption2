import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const PUBLIC_DIR = path.resolve('public');
const PARTNER_LOGOS_DIR = path.resolve('public/partner logos');

const MAIN_IMAGES = [
  '100_Pure_Ceylon.png',
  'Premium Quality.png',
  'Global Reach.png',
  'Traditional Heritage.png',
  'zenzur-logo.png',
  'rivon-logo.png',
  'sun-delmar-logo.png',
  'premium_black_tea.png',
  'artisan_green_tea.png',
  'exquisite_flavoured_tea.png'
];

async function convertToWebp(dir, files) {
  for (const file of files) {
    if (!file.endsWith('.png')) continue;
    
    const inputPath = path.join(dir, file);
    const outputPath = path.join(dir, file.replace(/\.png$/, '.webp'));

    try {
      // Check if file exists
      await fs.access(inputPath);
      
      console.log(`Converting ${inputPath} to ${outputPath}...`);
      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 }) // Moderate quality, high compression effort
        .toFile(outputPath);
        
      console.log(`✅ Success: ${file}`);
    } catch (e) {
      if (e.code === 'ENOENT') {
        console.warn(`⚠️ Warning: Input file not found: ${inputPath}`);
      } else {
        console.error(`❌ Error converting ${file}:`, e);
      }
    }
  }
}

async function run() {
  console.log('--- Processing Main Images ---');
  await convertToWebp(PUBLIC_DIR, MAIN_IMAGES);

  console.log('\n--- Processing Partner Logos ---');
  try {
    const partnerFiles = await fs.readdir(PARTNER_LOGOS_DIR);
    await convertToWebp(PARTNER_LOGOS_DIR, partnerFiles);
  } catch (e) {
    console.error('Error reading partner logos directory:', e);
  }

  console.log('\nDone!');
}

run();
