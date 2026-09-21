import puppeteer from 'puppeteer-core';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/e89c0744-14ad-4111-9254-8424f52e8e93';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function run() {
  console.log('Launching headless Chrome for verification...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // Test 1: Exact 9:16 mobile (360x640)
  console.log('\n--- 1. Testing 360x640 (Exact 9:16 Phone) ---');
  await page.setViewport({ width: 360, height: 640, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  let leak360 = await page.evaluate(() => {
    return {
      docWidth: document.documentElement.clientWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      bodyScrollWidth: document.body.scrollWidth,
      hasLeak: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('360x640 Overflow Check:', leak360);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_360_640_hero.png') });

  // Test 2: Standard Modern Smartphone (390x844)
  console.log('\n--- 2. Testing 390x844 (iPhone 14 / Modern Phone) ---');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  let leak390 = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const overflowing = [];
    document.querySelectorAll('*').forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 2) {
        overflowing.push({ tag: el.tagName, class: el.className, right: rect.right, docWidth });
      }
    });
    return {
      docWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      hasLeak: document.documentElement.scrollWidth > docWidth,
      overflowingElements: overflowing.slice(0, 5)
    };
  });
  console.log('390x844 Overflow Check:', JSON.stringify(leak390, null, 2));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_hero.png') });

  // Test 3: Open Mobile Drawer
  console.log('\n--- 3. Testing Mobile Drawer Open ---');
  const toggleBtn = await page.$('.mobile-menu-toggle');
  if (toggleBtn) {
    await toggleBtn.click();
    await new Promise(r => setTimeout(r, 500));
    const drawerOpen = await page.evaluate(() => {
      const drawer = document.querySelector('.mobile-nav-drawer');
      const backdrop = document.querySelector('.mobile-nav-backdrop');
      return {
        drawerExists: !!drawer,
        drawerHasOpenClass: drawer?.classList.contains('open'),
        backdropHasOpenClass: backdrop?.classList.contains('open')
      };
    });
    console.log('Mobile Drawer status after click:', drawerOpen);
    await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_drawer_open.png') });

    // Close drawer using close button
    const closeBtn = await page.$('.mobile-drawer-close');
    if (closeBtn) {
      await closeBtn.click();
      await new Promise(r => setTimeout(r, 400));
    }
  }

  // Test 4: Open Enquiry Modal on Mobile
  console.log('\n--- 4. Testing Enquiry Modal on Mobile ---');
  // Click enquire button in hero or open via JS
  await page.evaluate(() => {
    const btn = document.querySelector('.search-submit-btn') || document.querySelector('.btn-pill-gold');
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 600));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_modal.png') });
  const modalClose = await page.$('.modal-close-btn');
  if (modalClose) {
    await modalClose.click();
    await new Promise(r => setTimeout(r, 400));
  }

  // Test 5: Scroll to Sections on Mobile
  console.log('\n--- 5. Scrolling Sections on Mobile ---');
  await page.evaluate(() => {
    window.scrollTo({ top: 900, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_destinations.png') });

  await page.evaluate(() => {
    window.scrollTo({ top: 1800, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_metrics.png') });

  await page.evaluate(() => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'instant' });
  });
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_390_844_footer.png') });

  // Test 6: Tablet Viewport (768x1024)
  console.log('\n--- 6. Testing 768x1024 (Tablet) ---');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 2 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  let leak768 = await page.evaluate(() => {
    return {
      docWidth: document.documentElement.clientWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      hasLeak: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('768x1024 Overflow Check:', leak768);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_768_1024_tablet.png') });

  // Test 7: Desktop Viewport (1440x900)
  console.log('\n--- 7. Testing 1440x900 (Desktop) ---');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  let leak1440 = await page.evaluate(() => {
    return {
      docWidth: document.documentElement.clientWidth,
      docScrollWidth: document.documentElement.scrollWidth,
      hasLeak: document.documentElement.scrollWidth > document.documentElement.clientWidth
    };
  });
  console.log('1440x900 Overflow Check:', leak1440);
  await page.screenshot({ path: path.join(ARTIFACT_DIR, 'verify_1440_900_desktop.png') });

  console.log('\nVerification complete! All screenshots saved.');
  await browser.close();
}

run().catch(console.error);
