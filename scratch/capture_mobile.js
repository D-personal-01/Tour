import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const ARTIFACT_DIR = 'C:/Users/Lenovo/.gemini/antigravity-ide/brain/e89c0744-14ad-4111-9254-8424f52e8e93';
const CHROME_PATH = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

async function run() {
  console.log('Launching Chrome from:', CHROME_PATH);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  
  // 9:16 standard mobile phone ratio (iPhone 13/14/15 viewport: 390x844 or 375x667)
  // Let's test standard 390 x 844 (9:19.5) and 360 x 640 (exact 9:16)
  await page.setViewport({
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });

  console.log('Navigating to http://localhost:5173/...');
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0', timeout: 30000 });
  await new Promise(r => setTimeout(r, 1000));

  // 1. Check for horizontal overflow elements
  const overflowElements = await page.evaluate(() => {
    const docWidth = document.documentElement.clientWidth;
    const bodyScrollWidth = document.body.scrollWidth;
    const docScrollWidth = document.documentElement.scrollWidth;
    
    const elements = Array.from(document.querySelectorAll('*'));
    const overflowing = [];
    
    for (const el of elements) {
      const rect = el.getBoundingClientRect();
      if (rect.right > docWidth + 1 || rect.left < -1) {
        overflowing.push({
          tag: el.tagName,
          className: el.className,
          id: el.id,
          rect: { left: rect.left, right: rect.right, width: rect.width },
          docWidth
        });
      }
    }
    return {
      docWidth,
      bodyScrollWidth,
      docScrollWidth,
      hasLeak: docScrollWidth > docWidth || bodyScrollWidth > docWidth,
      overflowingCount: overflowing.length,
      overflowingSample: overflowing.slice(0, 10)
    };
  });

  console.log('Overflow check:', JSON.stringify(overflowElements, null, 2));

  // 2. Take screenshot of Hero fold (initial 9:16 screen)
  const heroPath = path.join(ARTIFACT_DIR, 'mobile_1_hero.png');
  await page.screenshot({ path: heroPath });
  console.log('Hero screenshot saved to', heroPath);

  // 3. Open Mobile Menu (hamburger) if exists
  const hamburger = await page.$('.nav-mobile-toggle, .mobile-toggle, [aria-label*="menu" i], button.mobile-menu-btn');
  if (hamburger) {
    console.log('Found mobile toggle, clicking...');
    await hamburger.click();
    await new Promise(r => setTimeout(r, 500));
    const menuPath = path.join(ARTIFACT_DIR, 'mobile_2_menu.png');
    await page.screenshot({ path: menuPath });
    console.log('Menu screenshot saved to', menuPath);
    // Click again to close
    await hamburger.click();
    await new Promise(r => setTimeout(r, 400));
  } else {
    console.log('No mobile hamburger toggle found by selector!');
  }

  // 4. Scroll down to Featured Packages
  await page.evaluate(() => {
    const el = document.querySelector('.featured-packages') || document.querySelector('#packages');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const packagesPath = path.join(ARTIFACT_DIR, 'mobile_3_packages.png');
  await page.screenshot({ path: packagesPath });
  console.log('Packages screenshot saved to', packagesPath);

  // 5. Scroll down to Destinations
  await page.evaluate(() => {
    const el = document.querySelector('.popular-destinations') || document.querySelector('#destinations');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const destPath = path.join(ARTIFACT_DIR, 'mobile_4_destinations.png');
  await page.screenshot({ path: destPath });
  console.log('Destinations screenshot saved to', destPath);

  // 6. Scroll down to Why Choose Us & Insurance
  await page.evaluate(() => {
    const el = document.querySelector('.why-choose-us') || document.querySelector('.insurance-teaser');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const whyPath = path.join(ARTIFACT_DIR, 'mobile_5_why_choose.png');
  await page.screenshot({ path: whyPath });
  console.log('Why Choose Us screenshot saved to', whyPath);

  // 7. Scroll down to B2B & Partners & Footer
  await page.evaluate(() => {
    const el = document.querySelector('.b2b-section') || document.querySelector('footer');
    if (el) el.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 600));
  const footerPath = path.join(ARTIFACT_DIR, 'mobile_6_footer.png');
  await page.screenshot({ path: footerPath });
  console.log('Footer screenshot saved to', footerPath);

  // 8. Full page screenshot
  const fullPagePath = path.join(ARTIFACT_DIR, 'mobile_fullpage.png');
  await page.screenshot({ path: fullPagePath, fullPage: true });
  console.log('Full page screenshot saved to', fullPagePath);

  // 9. Inspect tap targets under 44px
  const smallTapTargets = await page.evaluate(() => {
    const interactives = Array.from(document.querySelectorAll('button, a, input, select, textarea, [role="button"]'));
    const small = [];
    for (const el of interactives) {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        if (rect.width < 44 || rect.height < 44) {
          small.push({
            tag: el.tagName,
            text: (el.textContent || '').trim().substring(0, 30),
            className: el.className,
            width: Math.round(rect.width),
            height: Math.round(rect.height)
          });
        }
      }
    }
    return small;
  });

  console.log('Small tap targets count:', smallTapTargets.length);
  console.log('Small tap targets sample:', JSON.stringify(smallTapTargets.slice(0, 15), null, 2));

  await browser.close();
}

run().catch(err => {
  console.error('Error running script:', err);
  process.exit(1);
});
