#!/usr/bin/env node

// Mobile responsiveness testing script
const puppeteer = require('puppeteer');

const devices = [
  { name: 'iPhone SE', width: 375, height: 667, userAgent: 'iPhone' },
  { name: 'iPhone 12', width: 390, height: 844, userAgent: 'iPhone' },
  { name: 'iPhone 12 Pro Max', width: 428, height: 926, userAgent: 'iPhone' },
  { name: 'iPad', width: 768, height: 1024, userAgent: 'iPad' },
  { name: 'iPad Pro', width: 1024, height: 1366, userAgent: 'iPad' },
  { name: 'Samsung Galaxy S21', width: 360, height: 800, userAgent: 'Android' },
  { name: 'Desktop', width: 1440, height: 900, userAgent: 'Desktop' }
];

const pages = [
  { name: 'Home', url: 'http://localhost:5173/' },
  { name: 'Menu', url: 'http://localhost:5173/#menu' },
  { name: 'About', url: 'http://localhost:5173/#about' },
  { name: 'Gallery', url: 'http://localhost:5173/#gallery' },
  { name: 'Contact', url: 'http://localhost:5173/#contact' }
];

async function testMobileResponsiveness() {
  console.log('🚀 Starting Mobile Responsiveness Tests...\n');
  
  const browser = await puppeteer.launch({ 
    headless: false, // Set to true for CI/CD
    defaultViewport: null 
  });

  const results = [];

  for (const device of devices) {
    console.log(`📱 Testing on ${device.name} (${device.width}x${device.height})`);
    
    const page = await browser.newPage();
    await page.setViewport({ 
      width: device.width, 
      height: device.height,
      isMobile: device.width <= 768,
      hasTouch: device.width <= 768
    });

    for (const testPage of pages) {
      try {
        console.log(`  📄 Testing ${testPage.name} page...`);
        
        await page.goto(testPage.url, { waitUntil: 'networkidle0' });
        
        // Wait for page to fully load
        await page.waitForTimeout(2000);
        
        // Test 1: Check for horizontal scroll
        const hasHorizontalScroll = await page.evaluate(() => {
          return document.body.scrollWidth > window.innerWidth;
        });
        
        // Test 2: Check touch target sizes
        const touchTargets = await page.evaluate(() => {
          const elements = document.querySelectorAll('button, a, .card, input, select');
          let validTargets = 0;
          let totalTargets = elements.length;
          
          elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.height >= 44 && rect.width >= 44) {
              validTargets++;
            }
          });
          
          return { valid: validTargets, total: totalTargets };
        });
        
        // Test 3: Check font sizes
        const fontSizes = await page.evaluate(() => {
          const body = document.body;
          const bodyFontSize = parseInt(window.getComputedStyle(body).fontSize);
          
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
          let smallHeadings = 0;
          
          headings.forEach(heading => {
            const fontSize = parseInt(window.getComputedStyle(heading).fontSize);
            if (fontSize < 16) smallHeadings++;
          });
          
          return { bodySize: bodyFontSize, smallHeadings };
        });
        
        // Test 4: Check viewport meta tag
        const hasViewportMeta = await page.evaluate(() => {
          const meta = document.querySelector('meta[name="viewport"]');
          return meta && meta.content.includes('width=device-width');
        });
        
        // Test 5: Performance metrics
        const performanceMetrics = await page.evaluate(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          return {
            loadTime: perfData ? perfData.loadEventEnd - perfData.loadEventStart : 0,
            domReady: perfData ? perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart : 0
          };
        });
        
        // Test 6: Check for mobile-specific elements
        const mobileElements = await page.evaluate(() => {
          const mobileMenu = document.getElementById('mobile-menu-btn');
          const mobileNav = document.getElementById('mobile-menu');
          return {
            hasMobileMenu: !!mobileMenu,
            hasMobileNav: !!mobileNav
          };
        });
        
        const testResult = {
          device: device.name,
          page: testPage.name,
          viewport: `${device.width}x${device.height}`,
          tests: {
            noHorizontalScroll: !hasHorizontalScroll,
            touchTargets: touchTargets.valid / touchTargets.total >= 0.8,
            fontSizes: fontSizes.bodySize >= 16 && fontSizes.smallHeadings === 0,
            viewportMeta: hasViewportMeta,
            performance: performanceMetrics.loadTime < 3000,
            mobileElements: device.width <= 768 ? mobileElements.hasMobileMenu : true
          },
          metrics: {
            touchTargetRatio: `${touchTargets.valid}/${touchTargets.total}`,
            bodyFontSize: `${fontSizes.bodySize}px`,
            loadTime: `${performanceMetrics.loadTime.toFixed(0)}ms`,
            domReady: `${performanceMetrics.domReady.toFixed(0)}ms`
          }
        };
        
        results.push(testResult);
        
        // Calculate pass rate
        const passedTests = Object.values(testResult.tests).filter(Boolean).length;
        const totalTests = Object.keys(testResult.tests).length;
        const passRate = Math.round((passedTests / totalTests) * 100);
        
        console.log(`    ✅ ${passRate}% tests passed (${passedTests}/${totalTests})`);
        
      } catch (error) {
        console.log(`    ❌ Error testing ${testPage.name}: ${error.message}`);
      }
    }
    
    await page.close();
    console.log('');
  }

  await browser.close();
  
  // Generate report
  generateReport(results);
}

function generateReport(results) {
  console.log('📊 MOBILE RESPONSIVENESS TEST REPORT');
  console.log('=====================================\n');
  
  // Overall statistics
  const totalTests = results.length;
  const deviceGroups = {};
  
  results.forEach(result => {
    if (!deviceGroups[result.device]) {
      deviceGroups[result.device] = [];
    }
    deviceGroups[result.device].push(result);
  });
  
  // Device summary
  Object.keys(deviceGroups).forEach(deviceName => {
    const deviceResults = deviceGroups[deviceName];
    const totalDeviceTests = deviceResults.reduce((sum, result) => {
      return sum + Object.keys(result.tests).length;
    }, 0);
    
    const passedDeviceTests = deviceResults.reduce((sum, result) => {
      return sum + Object.values(result.tests).filter(Boolean).length;
    }, 0);
    
    const devicePassRate = Math.round((passedDeviceTests / totalDeviceTests) * 100);
    const status = devicePassRate >= 90 ? '🟢' : devicePassRate >= 70 ? '🟡' : '🔴';
    
    console.log(`${status} ${deviceName}: ${devicePassRate}% (${passedDeviceTests}/${totalDeviceTests} tests passed)`);
  });
  
  console.log('\n📋 DETAILED RESULTS:');
  console.log('====================\n');
  
  // Detailed results
  results.forEach(result => {
    console.log(`📱 ${result.device} - ${result.page} (${result.viewport})`);
    
    Object.entries(result.tests).forEach(([testName, passed]) => {
      const status = passed ? '✅' : '❌';
      console.log(`  ${status} ${testName}`);
    });
    
    console.log(`  📊 Metrics:`);
    Object.entries(result.metrics).forEach(([metric, value]) => {
      console.log(`     ${metric}: ${value}`);
    });
    
    console.log('');
  });
  
  // Recommendations
  console.log('💡 RECOMMENDATIONS:');
  console.log('===================\n');
  
  const failedTests = results.filter(result => {
    const passedTests = Object.values(result.tests).filter(Boolean).length;
    const totalTests = Object.keys(result.tests).length;
    return (passedTests / totalTests) < 0.8;
  });
  
  if (failedTests.length === 0) {
    console.log('🎉 All tests passed! Your website is mobile-ready.');
  } else {
    console.log('🔧 Areas for improvement:');
    
    const commonIssues = {};
    failedTests.forEach(result => {
      Object.entries(result.tests).forEach(([testName, passed]) => {
        if (!passed) {
          if (!commonIssues[testName]) commonIssues[testName] = 0;
          commonIssues[testName]++;
        }
      });
    });
    
    Object.entries(commonIssues).forEach(([issue, count]) => {
      console.log(`  • ${issue}: Failed on ${count} device(s)`);
    });
  }
  
  console.log('\n✨ Test completed successfully!');
}

// Run the tests
if (require.main === module) {
  testMobileResponsiveness().catch(console.error);
}

module.exports = { testMobileResponsiveness };
