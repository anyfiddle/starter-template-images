const puppeteer = require('puppeteer');

/**
 * Visit https://example.com and take a screenshot
 * Screenshot saved in example.png
 */

(async () => {
  const browser = await puppeteer.launch({
    // Anyfiddle runs in containers. These flags are need to make puppeteer run in containers. 
    args: [
        '--disable-dev-shm-usage',
        '--no-sandbox'
    ]
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');

  const outputFile = 'example.png'
  await page.screenshot({path: outputFile});
  console.log('Screenshot taken to', outputFile);

  await browser.close();
})();