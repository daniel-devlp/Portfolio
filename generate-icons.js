const fs = require('fs');
const path = require('path');

// SVG Template for the portfolio icon
function createSVGIcon(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <linearGradient id="portfolioGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#f0f0f0;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0e0e0;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background Circle -->
  <circle cx="${size/2}" cy="${size/2}" r="${size*0.47}" fill="#000000" stroke="url(#portfolioGradient)" stroke-width="${size*0.016}"/>
  
  <!-- Developer Brackets -->
  <path d="M${size*0.27} ${size*0.35} L${size*0.20} ${size*0.43} L${size*0.20} ${size*0.57} L${size*0.27} ${size*0.65}" stroke="url(#portfolioGradient)" stroke-width="${size*0.024}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M${size*0.73} ${size*0.35} L${size*0.80} ${size*0.43} L${size*0.80} ${size*0.57} L${size*0.73} ${size*0.65}" stroke="url(#portfolioGradient)" stroke-width="${size*0.024}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Center Code Symbol -->
  <circle cx="${size/2}" cy="${size/2}" r="${size*0.12}" fill="url(#portfolioGradient)"/>
  
  <!-- Letter D for Daniel -->
  <text x="${size/2}" y="${size/2 + size*0.01}" font-family="Arial, sans-serif" font-size="${size*0.18}" font-weight="bold" text-anchor="middle" fill="#000000">D</text>
  
  <!-- Code dots -->
  <circle cx="${size*0.39}" cy="${size*0.39}" r="${size*0.012}" fill="url(#portfolioGradient)"/>
  <circle cx="${size*0.61}" cy="${size*0.39}" r="${size*0.012}" fill="url(#portfolioGradient)"/>
  <circle cx="${size*0.39}" cy="${size*0.61}" r="${size*0.012}" fill="url(#portfolioGradient)"/>
  <circle cx="${size*0.61}" cy="${size*0.61}" r="${size*0.012}" fill="url(#portfolioGradient)"/>
</svg>`;
}

// Create different sized SVG icons
const sizes = [16, 32, 64, 128, 192, 256, 512];

sizes.forEach(size => {
  const svgContent = createSVGIcon(size);
  fs.writeFileSync(path.join(__dirname, `logo${size}.svg`), svgContent);
  console.log(`✅ Generated logo${size}.svg`);
});

console.log('🎉 All portfolio icons generated successfully!');
console.log('📋 Next steps:');
console.log('1. Convert SVG files to PNG/ICO using an online converter');
console.log('2. Replace the files in your public folder');
console.log('3. Update your manifest.json if needed');