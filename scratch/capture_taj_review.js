import puppeteer from 'puppeteer-core';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/e89c0744-14ad-4111-9254-8424f52e8e93';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function run() {
  console.log('Launching headless Chrome for verification of Taj Mahal evening hero and condensed text...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // 1. Mobile 360x640 (Exact 9:16)
  await page.setViewport({ width: 360, height: 640, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'taj_hero_360_640_mobile.png') });
  console.log('Captured taj_hero_360_640_mobile.png');

  // 2. Mobile 390x844 Hero
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'taj_hero_390_844_mobile.png') });
  console.log('Captured taj_hero_390_844_mobile.png');

  // 3. Mobile 390x844 Why Choose Us
  const whySection = await page.$('#why-bespoke');
  if (whySection) {
    await whySection.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'taj_why_choose_390_mobile.png') });
    console.log('Captured taj_why_choose_390_mobile.png');
  }

  // 4. Mobile 390x844 Featured Packages
  const pkgSection = await page.$('#featured-packages');
  if (pkgSection) {
    await pkgSection.scrollIntoView();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'taj_packages_390_mobile.png') });
    console.log('Captured taj_packages_390_mobile.png');
  }

  // 5. Desktop 1440x900 Hero
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'taj_hero_1440_desktop.png') });
  console.log('Captured taj_hero_1440_desktop.png');

  await browser.close();
  console.log('Finished capturing all verification screenshots successfully.');
}

run().catch(err => {
  console.error('Error running verification:', err);
  process.exit(1);
});
