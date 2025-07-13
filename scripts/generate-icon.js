const fs = require('fs');
const path = require('path');

// Create a simple wine glass SVG icon
const createWineGlassSVG = (size) => {
  const padding = size * 0.1;
  const strokeWidth = size * 0.02;
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="${size}" height="${size}" fill="#722f37" rx="${size * 0.15}"/>
  
  <!-- Wine Glass -->
  <g transform="translate(${size/2}, ${size/2})">
    <!-- Bowl of glass -->
    <path d="
      M ${-size * 0.25} ${-size * 0.25}
      C ${-size * 0.25} ${-size * 0.15}, ${-size * 0.15} ${size * 0.05}, 0 ${size * 0.05}
      C ${size * 0.15} ${size * 0.05}, ${size * 0.25} ${-size * 0.15}, ${size * 0.25} ${-size * 0.25}
      L ${-size * 0.25} ${-size * 0.25}
      Z
    " fill="#ffffff" stroke="#ffffff" stroke-width="${strokeWidth}"/>
    
    <!-- Wine in glass -->
    <path d="
      M ${-size * 0.2} ${-size * 0.15}
      C ${-size * 0.2} ${-size * 0.05}, ${-size * 0.1} ${size * 0.02}, 0 ${size * 0.02}
      C ${size * 0.1} ${size * 0.02}, ${size * 0.2} ${-size * 0.05}, ${size * 0.2} ${-size * 0.15}
      L ${-size * 0.2} ${-size * 0.15}
      Z
    " fill="#8b0000" opacity="0.8"/>
    
    <!-- Stem -->
    <line x1="0" y1="${size * 0.05}" x2="0" y2="${size * 0.25}" 
          stroke="#ffffff" stroke-width="${strokeWidth * 1.5}"/>
    
    <!-- Base -->
    <ellipse cx="0" cy="${size * 0.25}" rx="${size * 0.15}" ry="${size * 0.03}" 
             fill="#ffffff"/>
  </g>
  
  <!-- WSET Text -->
  <text x="${size/2}" y="${size * 0.85}" 
        font-family="Arial, sans-serif" 
        font-size="${size * 0.12}" 
        font-weight="bold" 
        text-anchor="middle" 
        fill="#ffffff">WSET</text>
</svg>`;
};

// Generate icons for all required sizes
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

sizes.forEach(size => {
  const svg = createWineGlassSVG(size);
  const filename = path.join(__dirname, '..', 'public', 'icons', `icon-${size}x${size}.svg`);
  fs.writeFileSync(filename, svg);
  console.log(`Generated ${filename}`);
});

console.log('All icons generated successfully!');