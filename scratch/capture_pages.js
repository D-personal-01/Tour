import puppeteer from 'puppeteer-core';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/e89c0744-14ad-4111-9254-8424f52e8e93';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  // Test iPhone 14 / modern smartphone viewport: 390x844
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  // 1. Mobile Menu Open
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // Find mobile hamburger button
  const hamburger = await page.$('.mobile-menu-toggle');
  if (hamburger) {
    await hamburger.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_menu_open.png') });
  }

  // 2. Enquiry Modal Open
  const enquireBtn = await page.$('.navbar-enquire-btn, .btn-pill-gold');
  if (enquireBtn) {
    await enquireBtn.click();
    await new Promise(r => setTimeout(r, 500));
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_modal_enquiry.png') });
    // close modal
    const closeBtn = await page.$('.modal-close-btn');
    if (closeBtn) await closeBtn.click();
    await new Promise(r => setTimeout(r, 300));
  }

  // 3. Holidays Page
  await page.goto('http://localhost:5173/#/holidays', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_holidays_page.png') });

  // 4. State Page (Rajasthan)
  await page.goto('http://localhost:5173/#/state/rajasthan', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_state_page.png') });

  // 5. Insurance Page
  await page.goto('http://localhost:5173/#/insurance', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'mobile_insurance_page.png') });

  // 6. Tablet Viewport Test (iPad mini: 768x1024)
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'tablet_home.png') });

  await browser.close();
  console.log('All additional screenshots captured successfully!');
}

run().catch(console.error);
