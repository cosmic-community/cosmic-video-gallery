const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', '.next', 'server', 'app');

function injectScript(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const scriptTag = '<script src="/dashboard-console-capture.js"></script>';
  
  if (!content.includes(scriptTag) && content.includes('<head>')) {
    content = content.replace('<head>', `<head>${scriptTag}`);
    fs.writeFileSync(filePath, content);
    console.log(`✓ Injected console capture script into ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.html')) {
      injectScript(filePath);
    }
  });
}

if (fs.existsSync(distDir)) {
  walkDir(distDir);
  console.log('Console capture script injection complete!');
} else {
  console.log('Build directory not found. Run build first.');
}